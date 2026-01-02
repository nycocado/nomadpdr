'use client';

import { Button } from '@/components/ui/button';
import { CONTACT_INFO } from '@/lib/config';
import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppFAB({ lang }: { lang: string }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-subtle">
      <Button
        variant="nomad"
        size="icon"
        className="w-14 h-14 rounded-full shadow-2xl hover:scale-110 transition-transform bg-[#25D366] hover:bg-[#20ba5a] border-none text-white p-0 flex items-center justify-center"
        onClick={() => window.open(CONTACT_INFO.phone.getWhatsappLink(lang), '_blank')}
      >
        <FaWhatsapp className="w-8 h-8 fill-current" />
        <span className="sr-only">WhatsApp</span>
      </Button>
    </div>
  );
}
