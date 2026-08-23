import { cloudinaryImage, type CloudinaryImage } from '@/lib/cloudinary';
import { imageSizes } from '@/constants/imageSizes';

export type StateName = keyof typeof imagesIds.states;

export type Artwork = {
  id: string;
  key: string;
  image: CloudinaryImage;
};

export type Collection = {
  slug: StateName;
  translationKey: StateName;
  artworks: Artwork[];
};

export const imagesIds = {
  states: {
    fire: {
      threshold: 'v1787442487/threshold_r9b02s.jpg',
      desire: 'v1787442481/desire_n6xpto.jpg',
      rage: 'v1787442485/rage_jplfne.jpg',
      witness: 'v1787442480/witness_fqsmv2.jpg',
      shame: 'v1787442477/shame_npt0es.jpg',
      illusion: 'v1787442479/illusion_ftaolb.jpg',
      emptiness: 'v1787442483/emptiness_smiuko.jpg',
    },

    air: {
      first_breath: 'v1787138796/first_breath_mm2kvm.jpg',
      suspension: 'v1787138796/suspension_eusa21.jpg',
      exhale: 'v1787138796/exhale_ww4kd0.jpg',
      white_noise: 'v1787138795/white_noise_ncgofj.jpg',
      panic: 'v1787138795/panic_upxoxd.jpg',
      absence: 'v1787138794/absence_aepzlm.jpg',
      whisper: 'v1787138794/whisper_bxzsfg.jpg',
    },

    water: {
      surface_tension: 'v1786478910/surface_tension_lpwfqr.jpg',
      abyss: 'v1786478910/abyss_bpbfam.jpg',
      undertow: 'v1786478909/undertow_uudbfq.jpg',
      bioluminescence: 'v1786478909/bioluminescence_b6bqx5.jpg',
      compression: 'v1786478909/compression_ur7fcb.jpg',
      descent: 'v1786478909/descent_suiaoe.jpg',
      adrift: 'v1786478908/adrift_xwhvym.jpg',
    },

    earth: {
      return: 'v1781698296/return_uqpjan.jpg',
      germination: 'v1781698295/germination_uxomur.jpg',
      saturation: 'v1781698295/saturation_qdfr9r.jpg',
      mineralization: 'v1781698295/mineralization_uglan5.jpg',
      cover: 'v1781698294/cover_ytsfzl.jpg',
      merger: 'v1781698294/merger_fehb42.jpg',
      weave: 'v1781698294/weave_uilz2d.jpg',
    },
  },
} as const;

function generateArtworks(stateName: StateName) {
  return Object.entries(imagesIds.states[stateName]).map(([key, id]): Artwork => {
    return {
      id,
      key,
      image: cloudinaryImage(id, key)
    }
  })
}

function generateCollection(stateName: StateName) {
  return {
    slug: stateName,
    translationKey: stateName,
    artworks: generateArtworks(stateName),
  }
}

function generateMainCollectionImage(stateName: StateName) {
  const collection = imagesIds.states[stateName];
  const firыtItem = Object.entries(collection)[0];

  if (!firыtItem) {
    throw new Error(`Collection "${stateName}" is empty`);
  }

  const [key, publicId] = firыtItem;
  return cloudinaryImage(publicId, key);
}

export function isStateName(value: string): value is StateName {
  return value in collections;
}

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
      main: generateMainCollectionImage('fire'),
      collection: generateCollection('fire'),
    },

    water: {
      main: generateMainCollectionImage('water'),
      collection: generateCollection('water'),
    },

    air: {
      main: generateMainCollectionImage('air'),
      collection: generateCollection('air'),
    },

    earth: {
      main: generateMainCollectionImage('earth'),
      collection: generateCollection('earth'),
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

export const collections: Record<StateName, Collection> = {
  air: images.states.air.collection,
  water: images.states.water.collection,
  earth: images.states.earth.collection,
  fire: images.states.fire.collection,
};