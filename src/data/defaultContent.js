import { products as legacyProducts } from './products.js';
import { galleryItems as legacyGallery } from './gallery.js';

export const DEFAULT_CONTENT = {
  site: {
    brandName: 'Durga Foods',
    shortBrand: 'Durga Pickles',
    announcement: 'Durga Foods • Since 1996 • Pazhayannur, Thrissur, Kerala',
    heroEyebrow: 'DURGA FOODS • SINCE 1996',
    heroTitleLine1: 'Made for',
    heroTitleLine2: 'the table.',
    heroDescription: 'Explore the current Durga collection of pickles, kondattam and traditional food products.',
    heroMainImage: '/products/originals/collection-wide-1.jpg',
    homeCollectionImage: '/products/originals/collection-wide-2.jpg',
    footerDescription: 'Durga Pickles · Sree Durga Food Products',
    phone: '04884 225174',
    consumerCare: '90206 54578',
    whatsapp: '919020654578',
    locationLine1: 'Thekkethara, Pazhayannur',
    locationLine2: 'Thrissur, Kerala — 680 587',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Thekkethara%20Pazhayannur%20Thrissur%20Kerala%20680587',
    metaTitle: 'Durga Foods — Since 1996',
    metaDescription: 'Durga Pickles — Sree Durga Food Products, Pazhayannur, Thrissur, Kerala. Since 1996.',
    marqueeItems: ['DURGA FOODS','SINCE 1996','PAZHAYANNUR · THRISSUR','TRADITIONAL FAVOURITES','SREE DURGA FOOD PRODUCTS'],
    featuredProductIds: legacyProducts.slice(0, 6).map((p) => p.id),
  },
  products: legacyProducts.map((p, index) => ({
    ...p,
    price: p.price ?? '',
    mrp: p.mrp ?? '',
    featured: index < 6,
    order: index,
  })),
  gallery: legacyGallery.map(([src, label, type], index) => ({
    id: `gallery-${index + 1}`,
    src,
    label,
    type,
    order: index,
  })),
};
