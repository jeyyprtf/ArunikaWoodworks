
import heroImage from './images/heroImage.webp';
import product1Image from './images/product-img-1.webp';
import product2Image from './images/product-img-2.webp';
import product3Image from './images/product-img-3.webp';
import sustainableImage from './images/sustainable.webp';
import customDesignImage from './images/customDesign.webp';
import handcraftedQualityImage from './images/handcraft.webp';
import japaneseCoasterImage from './images/japanese-coaster.webp';
import mejaKerjaImage from './images/meja-kerja.webp';
import rakImage from './images/rak.webp';

export const siteMetadata = {
    brand: "Arunika Woodworks", 
    title: "Furniture Kayu Custom Malang | KayuAsli",
    description: "Furniture kayu custom buatan tangan pengrajin lokal Malang. Desain minimalis, kualitas ekspor, harga gak bikin tekor.",
}

export const heroSection = {
    title: "Hadirkan Kehangatan Alam ke Rumahmu",
    description: "Furniture kayu custom buatan tangan pengrajin lokal Malang. Desain minimalis, kualitas ekspor, harga gak bikin tekor.",
    image: heroImage,
    buttonText: "Lihat Koleksi"
}

export const products = {
    image: [
        product1Image,
        product2Image,
        product3Image
    ],
    title: [
        "Workspace",
        "Living",
        "Decor"
    ],
    description: [
        "Meja kerja, monitor stand, pegboard kayu",
        "Coffee table, rak TV, stool bar",
        "Frame foto, vas bunga, hiasan dinding"
    ]
}

export const whyUs = {
    tittle: [
        "Sustainable Material",
        "Custom Designs",
        "Handcrafted Quality"
    ],
    description: [
        "Menggunakan kayu legal dan daur ulang berkualitas",
        "Desain sesuai kebutuhan dan selera pelanggan",
        "Dibuat dengan teliti oleh pengrajin berpengalaman"
    ],
    image: [
        sustainableImage,
        customDesignImage,
        handcraftedQualityImage
    ]
}

export const topProducts = {
    image: [
        japaneseCoasterImage,
        mejaKerjaImage,
        rakImage
    ],
    title: [
        "Japanese Coaster Set",
        "Meja Kerja Arunika",
        "Floating Shelves Set"
    ],
    description: [
        "Set tatakan gelas kayu jati dengan desain minimalis Jepang.",
        "Meja kerja kayu solid dengan desain yang minimalis.",
        "Set rak dinding mengambang untuk dekorasi dan penyimpanan."
    ]
}