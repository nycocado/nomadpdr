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
    return { success: false, message: 'Por favor, preencha todos os campos obrigatórios.' };
  }

  if (name.length > 100) return { success: false, message: 'O nome é muito longo (máx. 100 caracteres).' };
  if (email.length > 100) return { success: false, message: 'O email é muito longo (máx. 100 caracteres).' };
  if (phone && phone.length > 20) return { success: false, message: 'O telefone é muito longo (máx. 20 caracteres).' };
  if (message.length > 2000) return { success: false, message: 'A mensagem é muito longa (máx. 2000 caracteres).' };

  // Basic Email Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: 'Por favor, insira um endereço de email válido.' };
  }

  if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");
      return { success: false, message: 'Erro de configuração no servidor (API Key ausente).' };
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
      return { success: false, message: 'Falha ao enviar email. Tente novamente.' };
    }

    return { success: true, message: 'Email enviado com sucesso!' };
  } catch (error) {
    console.error('Server Error:', error);
    return { success: false, message: 'Erro interno. Tente novamente mais tarde.' };
  }
}
