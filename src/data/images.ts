import { cloudinaryImage } from '@/lib/cloudinary';
import { imageSizes } from '@/constants/imageSizes';

type ImageAsset = {
  src: string;
  alt: string;

  width?: number;
  height?: number;
};

export const images = {
  hero: cloudinaryImage(
    'hero-image_fdbzcd',
    'Adelaida Art Mask hero image',
    {
      width: imageSizes.hero.width,
      height: imageSizes.hero.height,
    }
  ),

  fashion: {
    look1: cloudinaryImage(
      '/images/look-1.jpg',
      'Fashion accessories look'
    ),

    look2: cloudinaryImage(
      '/images/look-2.jpg',
      'Organic dress fashion look'
    ),
  },

  states: {
    fire: {
      main: cloudinaryImage(
        'states_fire_desire_wzvezj',
        'Fire collection mask'
      ),
    },

    water: {
      main: cloudinaryImage(
        'states_fire_desire_wzvezj',
        'Fire collection mask'
      ),
    },

    air: {
      main: cloudinaryImage(
        'states_fire_desire_wzvezj',
        'Fire collection mask'
      ),
    },

    earth: {
      main: cloudinaryImage(
        'states_fire_desire_wzvezj',
        'Fire collection mask'
      ),
    },
  },

  process: {
    craft:  cloudinaryImage(
      'create_mask_process_craft_cojqed',
      'Crafting process of the mask',
      {
        width: 1200,
        height: 1600,
        crop: 'fill',
      } 
    ),

    painting: cloudinaryImage(
      'create_mask_process_paiting_tt7xuq',
      'Painting process of the mask',
      {
        width: 1200,
        height: 1600,
      } 
    ),
  },

  footer: cloudinaryImage(
    'sun-mask-footer_nwrbta',
    'Decorative footer mask',
    {
      width: 1600,
      height: 900,
    }
  ),
};