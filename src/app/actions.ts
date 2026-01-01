'use server'

import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

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
      console.error("RESEND_API_KEY is missing");
      return { success: false, code: 'config_error' };
  }

  try {
    const fromAddress = process.env.EMAIL_FROM_ADDRESS || 'onboarding@resend.dev';
    
    const { data, error } = await resend.emails.send({
      from: fromAddress, 
      to: [process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contato@nomadpdr.com'], // Send to the owner
      replyTo: email, // Reply directly to the client
      subject: `Novo Orçamento: ${name}`,
      text: `
        Novo pedido de orçamento recebido pelo site:
        
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        
        Mensagem:
        ${message}
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, code: 'server_error' };
    }

    return { success: true, code: 'success' };
  } catch (error) {
    console.error('Server Error:', error);
    return { success: false, code: 'server_error' };
  }
}
