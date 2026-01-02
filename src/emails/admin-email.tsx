import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Hr,
} from "@react-email/components";
import * as React from "react";

interface AdminEmailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  lang: string;
}

export const AdminEmail = ({
  name,
  email,
  phone,
  message,
  lang,
}: AdminEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Quote Request from {name}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              New <strong>Nomad PDR</strong> Lead
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello Admin,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              You received a new quote request from the website via <strong>{lang.toUpperCase()}</strong> locale.
            </Text>
            <Section className="bg-[#f9fafb] rounded p-4 my-4 border border-[#eaeaea]">
              <Text className="m-0 text-[12px] font-bold uppercase text-gray-500">Name</Text>
              <Text className="m-0 text-[16px] mb-4 text-black">{name}</Text>
              
              <Text className="m-0 text-[12px] font-bold uppercase text-gray-500">Email</Text>
              <Text className="m-0 text-[16px] mb-4 text-blue-600 underline">{email}</Text>

              <Text className="m-0 text-[12px] font-bold uppercase text-gray-500">Phone</Text>
              <Text className="m-0 text-[16px] mb-0 text-black">{phone || "Not provided"}</Text>
            </Section>
            
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

            <Text className="text-[12px] font-bold uppercase text-gray-500 mb-2">Message:</Text>
            <Text className="text-black text-[14px] leading-[24px] bg-[#f9fafb] p-4 rounded border border-[#eaeaea] whitespace-pre-wrap">
              {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default AdminEmail;
