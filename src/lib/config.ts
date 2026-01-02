export const CONTACT_INFO = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@example.com',
  phone: {
    ddi: process.env.NEXT_PUBLIC_CONTACT_PHONE_DDI || '351',
    ddd: process.env.NEXT_PUBLIC_CONTACT_PHONE_DDD || '',
    number: process.env.NEXT_PUBLIC_CONTACT_PHONE_NUMBER || '999999999',

    get fullNumber() {
      if (process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY) {
        return process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY;
      }
      return `+${this.ddi} ${this.ddd ? this.ddd + ' ' : ''}${this.number}`;
    },
    get whatsappLink() {
      return `https://wa.me/${this.ddi}${this.ddd}${this.number}`;
    },
  },
  instagram: {
    handle: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || 'your_instagram_handle',
    get url() {
      return `https://instagram.com/${this.handle}`;
    },
    get display() {
      return `@${this.handle}`;
    },
  },
};

export const COMPANY_INFO = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Nomad PDR System',
  nif: process.env.NEXT_PUBLIC_COMPANY_NIF || '999999999',
  address:
    process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Company Address, City, Country',

  street: process.env.NEXT_PUBLIC_COMPANY_STREET || 'Street Address',
  city: process.env.NEXT_PUBLIC_COMPANY_CITY || 'City Name',
  zip: process.env.NEXT_PUBLIC_COMPANY_ZIP || '0000-000',
  country: process.env.NEXT_PUBLIC_COMPANY_COUNTRY || 'PT',
  areaServed: process.env.NEXT_PUBLIC_COMPANY_AREA_SERVED || 'Portugal',
};

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
