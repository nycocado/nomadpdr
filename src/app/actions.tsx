'use server';

import { Resend } from 'resend';
import { render } from '@react-email/render';
import AdminEmail from '@/emails/admin-email';
import CustomerEmail from '@/emails/customer-email';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

type ActionState = {
  success: boolean;
  code: string;
};

const customerSubjects: Record<string, string> = {
  pt: "Recebemos o seu pedido - Nomad PDR",
  br: "Recebemos seu pedido - Nomad PDR",
  es: "Hemos recibido su solicitud - Nomad PDR",
  en: "We received your request - Nomad PDR",
};

export async function sendEmail(prevState: ActionState, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;
  const lang = (formData.get('lang') as string) || 'pt';

  // Basic validation & Limits
  if (!name || !email || !message) {
    return { success: false, code: 'required' };
  }

  if (name.length > 100) return { success: false, code: 'name_long' };
  if (email.length > 100) return { success: false, code: 'email_long' };
  if (phone && phone.length > 20) return { success: false, code: 'phone_long' };
  if (message.length > 2000) return { success: false, code: 'message_long' };

  // Basic Email Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, code: 'email_invalid' };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is missing');
    return { success: false, code: 'config_error' };
  }

  try {
    const fromAddress =
      process.env.EMAIL_FROM_ADDRESS || 'onboarding@resend.dev';
    
    // Admin email destination
    const ownerEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contato@nomadpdr.com';

    // 1. Send Admin Email
    const adminHtml = await render(
        <AdminEmail 
          name={name} 
          email={email} 
          phone={phone} 
          message={message} 
          lang={lang} 
        />
    );

    const { error: adminError } = await resend.emails.send({
      from: fromAddress,
      to: [ownerEmail], // Send to the owner
      replyTo: email, // Reply directly to the client
      subject: `Novo Orçamento: ${name} [${lang.toUpperCase()}]`,
      html: adminHtml,
    });

    if (adminError) {
      console.error('Resend Admin Error:', adminError);
      return { success: false, code: 'server_error' };
    }

    // 2. Send Customer Email (Fire and forget, don't fail if this fails)
    try {
        const customerHtml = await render(<CustomerEmail name={name} lang={lang} />);
        const subject = customerSubjects[lang] || customerSubjects.en;

        await resend.emails.send({
          from: fromAddress,
          to: [email],
          subject: subject,
          html: customerHtml,
        });
    } catch (customerError) {
        console.error('Resend Customer Error (Non-fatal):', customerError);
        // We don't return error here to ensure the user sees "Success" even if confirmation email fails
    }

    return { success: true, code: 'success' };
  } catch (error) {
    console.error('Server Error:', error);
    return { success: false, code: 'server_error' };
  }
}