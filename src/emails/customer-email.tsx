import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Tailwind,
  Button,
  Section,
  Img,
  Hr,
} from "@react-email/components";
import * as React from "react";
import { SITE_URL } from "@/lib/config";

interface CustomerEmailProps {
  name: string;
  lang: string;
}

const translations = {
  pt: {
    subject: "Recebemos o seu pedido - Nomad PDR",
    title: "Pedido Recebido!",
    greeting: "Olá",
    p1: "Obrigado pelo seu contacto. A nossa equipa recebeu o seu pedido de orçamento e irá analisá-lo com a máxima atenção.",
    p2: "Entraremos em contacto consigo brevemente para apresentar a nossa proposta ou esclarecer qualquer dúvida.",
    button: "Visitar Site",
    footer: "Nomad Opportunity - Man. e Rep. de Automóveis, Lda"
  },
  br: {
    subject: "Recebemos seu pedido - Nomad PDR",
    title: "Pedido Recebido!",
    greeting: "Olá",
    p1: "Obrigado pelo seu contato. Nossa equipe recebeu seu pedido de orçamento e irá analisá-lo com a máxima atenção.",
    p2: "Entraremos em contato com você brevemente para apresentar nossa proposta ou esclarecer qualquer dúvida.",
    button: "Visitar Site",
    footer: "Nomad Opportunity - Man. e Rep. de Automóveis, Lda"
  },
  es: {
    subject: "Hemos recibido su solicitud - Nomad PDR",
    title: "¡Solicitud Recibida!",
    greeting: "Hola",
    p1: "Gracias por contactarnos. Nuestro equipo ha recibido su solicitud de presupuesto y la analizará con la máxima atención.",
    p2: "Nos pondremos en contacto con usted brevemente para presentar nuestra propuesta o aclarar cualquier duda.",
    button: "Visitar Sitio",
    footer: "Nomad Opportunity - Man. e Rep. de Automóveis, Lda"
  },
  en: {
    subject: "We received your request - Nomad PDR",
    title: "Request Received!",
    greeting: "Hello",
    p1: "Thank you for contacting us. Our team has received your quote request and will review it carefully.",
    p2: "We will contact you shortly to present our proposal or clarify any questions.",
    button: "Visit Website",
    footer: "Nomad Opportunity - Man. e Rep. de Automóveis, Lda"
  },
};

export const CustomerEmail = ({ name, lang = 'pt' }: CustomerEmailProps) => {
  // Fallback to 'en' if lang is not found, or map variations
  const safeLang = (Object.keys(translations).includes(lang) ? lang : 'en') as keyof typeof translations;
  const t = translations[safeLang];

  const logoUrl = `${SITE_URL}/logo-full.png`; // Ensure this is accessible publicly

  return (
    <Html>
      <Head />
      <Preview>{t.subject}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[20px] mb-[32px]">
              <Img
                src={logoUrl}
                width="150"
                height="50"
                alt="Nomad PDR"
                className="my-0 mx-auto object-contain"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              {t.title}
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              {t.greeting} <strong>{name}</strong>,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              {t.p1}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              {t.p2}
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-[#2A3375] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={SITE_URL}
              >
                {t.button}
              </Button>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px] text-center">
              {t.footer}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default CustomerEmail;
