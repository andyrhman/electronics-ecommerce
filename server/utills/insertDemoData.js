const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  {
    id: "1",
    title: "Ponsel Pintar",
    price: 3500000,
    rating: 5,
    description: "Ponsel pintar ini dilengkapi dengan layar AMOLED 6,5 inci yang tajam dan jernih, prosesor octa-core yang kuat, dan kapasitas baterai 5000mAh yang tahan lama. Kamera belakang 48MP memungkinkan Anda mengambil foto berkualitas tinggi, sementara kamera depan 16MP sempurna untuk selfie. Ponsel ini juga mendukung pengisian cepat dan memiliki ruang penyimpanan internal 128GB.",
    mainImage: "product1.webp",
    slug: "smart-phone-demo",
    manufacturer: "Samsung",
    categoryId: "3117a1b0-6369-491e-8b8b-9fdd5ad9912e",
    inStock: 0,
  },
  {
    id: "2",
    title: "Kamera SLR",
    price: 8500000, // Rp 8,500,000
    rating: 0,
    description: "Kamera SLR ini adalah pilihan sempurna untuk fotografer pemula maupun profesional. Dengan sensor 24MP, kamera ini mampu menangkap detail yang menakjubkan. Dilengkapi dengan lensa kit 18-55mm, Anda bisa memotret berbagai skenario dari landscape hingga potret. Fitur autofokus cepat dan stabilisasi gambar memastikan hasil foto yang tajam dan jernih.",
    mainImage: "product2.webp",
    slug: "slr-camera-demo",
    manufacturer: "Canon",
    categoryId: "659a91b9-3ff6-47d5-9830-5e7ac905b961",
    inStock: 0,
  },
  {
    id: "3",
    title: "Mixer Penggiling",
    price: 750000, // Rp 750,000
    rating: 4,
    description: "Mixer penggiling ini sangat serbaguna dan efisien untuk digunakan di dapur. Dilengkapi dengan motor 750W yang kuat, alat ini mampu menghaluskan bahan makanan dengan cepat dan mudah. Tiga kecepatan yang dapat disesuaikan memungkinkan Anda menggiling berbagai jenis bahan, dari bumbu hingga adonan kue. Termasuk 3 jar yang dapat dilepas dan dicuci.",
    mainImage: "product3.webp",
    slug: "mixed-grinder-demo",
    manufacturer: "ZunVolt",
    categoryId: "6c3b8591-b01e-4842-bce1-2f5585bf3a28",
    inStock: 1,
  },
  {
    id: "4",
    title: "Gimbal Ponsel",
    price: 1200000, // Rp 1,200,000
    rating: 5,
    description: "Gimbal ponsel ini adalah alat yang sempurna untuk videografer amatir maupun profesional. Dengan 3-axis stabilization, Anda bisa merekam video yang halus dan bebas guncangan. Gimbal ini dilengkapi dengan berbagai mode pengambilan gambar, termasuk panorama, time-lapse, dan follow mode. Baterai yang tahan lama memungkinkan penggunaan hingga 12 jam.",
    mainImage: "product4.webp",
    slug: "phone-gimbal-demo",
    manufacturer: "Samsung",
    categoryId: "d30b85e2-e544-4f48-8434-33fe0b591579",
    inStock: 1,
  },
  {
    id: "5",
    title: "Keyboard Tablet",
    price: 700000, // Rp 700,000
    rating: 4,
    description: "Keyboard tablet ini dirancang khusus untuk meningkatkan produktivitas Anda. Dengan desain ergonomis dan tombol-tombol yang responsif, mengetik menjadi lebih nyaman dan cepat. Keyboard ini juga dilengkapi dengan backlight yang memudahkan penggunaan di kondisi cahaya rendah. Kompatibel dengan berbagai jenis tablet, keyboard ini juga memiliki konektivitas Bluetooth yang stabil.",
    mainImage: "product5.webp",
    slug: "tablet-keyboard-demo",
    manufacturer: "Samsung",
    categoryId: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
    inStock: 1,
  },
  {
    id: "6",
    title: "Earbuds Nirkabel",
    price: 1500000, // Rp 1,500,000
    rating: 3,
    description: "Earbuds nirkabel ini memberikan kualitas suara yang luar biasa dengan bass yang mendalam dan treble yang jernih. Dengan fitur noise-cancellation aktif, Anda bisa menikmati musik tanpa gangguan dari suara sekitar. Earbuds ini juga tahan air, sehingga cocok digunakan saat berolahraga. Daya tahan baterai hingga 8 jam dan dilengkapi dengan case pengisi daya yang portabel.",
    mainImage: "product6.webp",
    slug: "wireless-earbuds-demo",
    manufacturer: "Samsung",
    categoryId: "1cb9439a-ea47-4a33-913b-e9bf935bcc0b",
    inStock: 1,
  },
  {
    id: "7",
    title: "Speaker Pesta",
    price: 2000000, // Rp 2,000,000
    rating: 5,
    description: "Speaker pesta ini siap memeriahkan setiap acara dengan suara yang kuat dan bass yang dalam. Dilengkapi dengan lampu LED yang dapat disinkronkan dengan musik, speaker ini menciptakan suasana yang meriah. Fitur Bluetooth memungkinkan Anda menghubungkan perangkat tanpa kabel, dan baterai yang tahan lama memastikan musik terus mengalun hingga 12 jam.",
    mainImage: "product7.webp",
    slug: "party-speakers-demo",
    manufacturer: "SOWO",
    categoryId: "7a241318-624f-48f7-9921-1818f6c20d85",
    inStock: 1,
  },
  {
    id: "8",
    title: "Juicer Lambat",
    price: 2500000, // Rp 2,500,000
    rating: 5,
    description: "Juicer lambat ini dirancang untuk menghasilkan jus yang kaya nutrisi dan enzim. Dengan kecepatan rendah 60 RPM, juicer ini mengurangi oksidasi dan menjaga kesegaran jus lebih lama. Bahan stainless steel berkualitas tinggi memastikan durabilitas, dan komponen yang mudah dibersihkan membuat penggunaan sehari-hari lebih praktis.",
    mainImage: "product8.webp",
    slug: "slow-juicer-demo",
    manufacturer: "Bosch",
    categoryId: "8d2a091c-4b90-4d60-b191-114b895f3e54",
    inStock: 1,
  },
  {
    id: "9",
    title: "Headphone Nirkabel",
    price: 3000000, // Rp 3,000,000
    rating: 3,
    description: "Headphone nirkabel ini memberikan kualitas suara yang superior dengan teknologi audio terbaru. Dilengkapi dengan fitur noise-cancellation, Anda bisa menikmati musik atau panggilan telepon tanpa gangguan. Desain yang ergonomis dan bantalan telinga yang empuk membuatnya nyaman digunakan dalam waktu lama. Baterai yang tahan lama memastikan penggunaan hingga 20 jam.",
    mainImage: "product9.webp",
    slug: "wireless-headphones-demo",
    manufacturer: "Sony",
    categoryId: "4c2cc9ec-7504-4b7c-8ecd-2379a854a423",
    inStock: 1,
  },
  {
    id: "10",
    title: "Jam Tangan Pintar",
    price: 3500000, // Rp 3,500,000
    rating: 3,
    description: "Jam tangan pintar ini adalah teman sempurna untuk gaya hidup aktif Anda. Dengan layar sentuh yang responsif, Anda bisa mengakses notifikasi, musik, dan aplikasi kesehatan dengan mudah. Jam tangan ini juga dilengkapi dengan sensor detak jantung, pelacak aktivitas, dan GPS. Tahan air hingga 50 meter, cocok digunakan saat berenang.",
    mainImage: "product10.webp",
    slug: "smart-watch-demo",
    manufacturer: "Samsung",
    categoryId: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
    inStock: 1,
  },
  {
    id: "11",
    title: "Notebook Horizon",
    price: 10000000, // Rp 10,000,000
    rating: 5,
    description: "Notebook Horizon ini menawarkan kinerja tinggi dengan prosesor Intel Core i7, RAM 16GB, dan penyimpanan SSD 512GB. Layar 15,6 inci Full HD memberikan visual yang tajam dan jernih. Desain yang ramping dan ringan membuatnya mudah dibawa kemana-mana. Baterai yang tahan lama memastikan produktivitas sepanjang hari.",
    mainImage: "product11.webp",
    slug: "notebook-horizon-demo",
    manufacturer: "HP",
    categoryId: "782e7829-806b-489f-8c3a-2689548d7153",
    inStock: 1,
  },
  {
    id: "12",
    title: "Pemangkas Pria",
    price: 400000, // Rp 400,000
    rating: 5,
    description: "Pemangkas pria ini menawarkan pemotongan yang presisi dengan berbagai pengaturan panjang. Dilengkapi dengan pisau stainless steel yang tajam dan tahan lama, pemangkas ini cocok untuk berbagai gaya rambut. Baterai yang tahan lama memungkinkan penggunaan hingga 90 menit tanpa kabel. Desain ergonomis memastikan kenyamanan saat digunakan.",
    mainImage: "product12.webp",
    slug: "mens-trimmer-demo",
    manufacturer: "Gillete",
    categoryId: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
    inStock: 0,
  }
];


const demoCategories = [
  {
    id: "7a241318-624f-48f7-9921-1818f6c20d85",
    name: "speakers",
  },
  {
    id: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
    name: "trimmers",
  },
  {
    id: "782e7829-806b-489f-8c3a-2689548d7153",
    name: "laptops",
  },
  {
    id: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
    name: "watches",
  },
  {
    id: "4c2cc9ec-7504-4b7c-8ecd-2379a854a423",
    name: "headphones",
  },
  {
    id: "8d2a091c-4b90-4d60-b191-114b895f3e54",
    name: "juicers",
  },
  {
    id: "1cb9439a-ea47-4a33-913b-e9bf935bcc0b",
    name: "earbuds",
  },
  {
    id: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
    name: "tablets",
  },
  {
    id: "d30b85e2-e544-4f48-8434-33fe0b591579",
    name: "phone-gimbals",
  },
  {
    id: "6c3b8591-b01e-4842-bce1-2f5585bf3a28",
    name: "mixer-grinders",
  },
  {
    id: "659a91b9-3ff6-47d5-9830-5e7ac905b961",
    name: "cameras",
  },
  {
    id: "3117a1b0-6369-491e-8b8b-9fdd5ad9912e",
    name: "smart-phones",
  },
  {
    id: "da6413b4-22fd-4fbb-9741-d77580dfdcd5",
    name: "mouses"
  },
  {
    id: "ss6412b4-22fd-4fbb-9741-d77580dfdcd2",
    name: "computers"
  },
  {
    id: "fs6412b4-22fd-4fbb-9741-d77512dfdfa3",
    name: "printers"
  }
];

for (const product of demoProducts) {
  if (product.description.length > 191) {
    product.description = product.description.substring(0, 188) + '...';
  }
}

async function insertDemoData() {
  
  for (const category of demoCategories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log("Demo categories inserted successfully!");
  
  for (const product of demoProducts) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Demo products inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
