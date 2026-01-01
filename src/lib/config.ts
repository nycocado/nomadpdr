export const CONTACT_INFO = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contato@nomadpdr.com",
  phone: {
    ddi: process.env.NEXT_PUBLIC_CONTACT_PHONE_DDI || "351",
    ddd: process.env.NEXT_PUBLIC_CONTACT_PHONE_DDD || "",
    number: process.env.NEXT_PUBLIC_CONTACT_PHONE_NUMBER || "999999999",
    // Helper getters
    get fullNumber() {
      if (process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY) {
        return process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY;
      }
      return `+${this.ddi} ${this.ddd ? this.ddd + ' ' : ''}${this.number}`;
    },
    get whatsappLink() {
      return `https://wa.me/${this.ddi}${this.ddd}${this.number}`;
    }
  },
  instagram: {
    handle: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE || "nomadpdrsystem",
    get url() {
        return `https://instagram.com/${this.handle}`
    },
    get display() {
        return `@${this.handle}`
    }
  }
};
