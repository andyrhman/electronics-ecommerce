export const categoryMenuList = [
  {
    id: 1,
    title: "Smart Phone",
    src: "/smart phone icon.png",
    href: "/shop/smart-phones"
  },
  {
    id: 2,
    title: "Tablet",
    src: "/tablet icon.png",
    href: "/shop/tablets"
  },
  {
    id: 3,
    title: "Mouse",
    src: "/mouse icon.png",
    href: "/shop/mouses"
  },
  {
    id: 4,
    title: "Kamera",
    src: "/camera icon.png",
    href: "/shop/cameras"
  },
  {
    id: 5,
    title: "Smart Watch",
    src: "/smart watch.png",
    href: "/shop/watches"
  },
  {
    id: 6,
    title: "Laptop",
    src: "/laptop icon.png",
    href: "/shop/laptops"
  },
  {
    id: 7,
    title: "Komputer",
    src: "/pc icon.png",
    href: "/shop/computers"
  },
  {
    id: 8,
    title: "Printer",
    src: "/printers icon.png",
    href: "/shop/printers"
  },
  {
    id: 9,
    title: "Earbuds",
    src: "/ear buds icon.png",
    href: "/shop/earbuds"
  },
  {
    id: 10,
    title: "Head Phones",
    src: "/headphone icon.png",
    href: "/shop/headphones"
  },
];

export const incentives = [
  {
    name: "Pengiriman Gratis",
    description:
      "Kami menyediakan pengiriman gratis untuk semua produk, memastikan Anda dapat berbelanja tanpa biaya tambahan.",
    imageSrc: "/shipping-icon.png",
  },
  {
    name: "Dukungan Pelanggan 24/7",
    description:
      "Tim dukungan kami siap membantu Anda setiap saat, 24 jam sehari, 7 hari seminggu, untuk menjawab semua pertanyaan Anda.",
    imageSrc: "/support-icon.png",
  },
  {
    name: "Keranjang Belanja Cepat",
    description:
      "Pengalaman berbelanja kami sangat cepat dan efisien, memastikan Anda dapat menyelesaikan transaksi dengan mudah dan cepat.",
    imageSrc: "/fast-shopping-icon.png",
  },
];

export const navigation = {
  sale: [
    { name: "Diskon", href: "#" },
    { name: "Berita", href: "#" },
    { name: "Daftar Diskon", href: "#" },
  ],
  about: [
    { name: "Tentang GadgetGalaxy", href: "#" },
    { name: "Bergabung dengan Kami", href: "#" },
    { name: "Profil Perusahaan", href: "#" },
  ],
  buy: [
    { name: "Kartu Loyalitas GadgetGalaxy", href: "#" },
    { name: "Syarat Penggunaan", href: "#" },
    { name: "Kebijakan Privasi", href: "#" },
    { name: "Keluhan", href: "#" },
    { name: "Mitra", href: "#" },
  ],
  help: [
    { name: "Kontak", href: "#" },
    { name: "Cara Berbelanja di GadgetGalaxy", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

export const isValidNameOrLastname = (input: string) => {
  // Simple name or lastname regex format check
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  // simple email address format check
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(input);
};

export const isValidCardNumber = (input: string) => {
  // Remove all non-digit characters
  const cleanedInput = input.replace(/[^0-9]/g, "");
  // test for credit card number between 13 and 19 characters
  const regex = /^\d{13,19}$/;
  return regex.test(cleanedInput);
}

export const isValidCreditCardExpirationDate = (input: string) => {
  // simple expiration date format check
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  // simple CVV or CVC format check
  const regex = /^[0-9]{3,4}$/;
  return regex.test(input);
};
