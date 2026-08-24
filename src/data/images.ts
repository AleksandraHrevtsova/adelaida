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
  key: StateName;
  artworks: Artwork[];
};

export const imagesIds = {
  hero: {
    main: 'v1779295421/hero-image_fdbzcd.jpg',
  },
  states: {
    fire: {
      main: {
        threshold: 'v1787442487/threshold_r9b02s.jpg',
      },
      artworks: {
        threshold: 'v1787442487/threshold_r9b02s.jpg',
        desire: 'v1787442481/desire_n6xpto.jpg',
        rage: 'v1787442485/rage_jplfne.jpg',
        witness: 'v1787442480/witness_fqsmv2.jpg',
        shame: 'v1787442477/shame_npt0es.jpg',
        illusion: 'v1787442479/illusion_ftaolb.jpg',
        emptiness: 'v1787442483/emptiness_smiuko.jpg',
      }
    },

    earth: {
      main: {
        saturation: 'v1781698296/earth-saturation_y38iyu.jpg',
      },
      artworks: {
        saturation: 'v1781698295/saturation_qdfr9r.jpg',
        return: 'v1781698296/return_uqpjan.jpg',
        germination: 'v1781698295/germination_uxomur.jpg',
        mineralization: 'v1781698295/mineralization_uglan5.jpg',
        cover: 'v1781698294/cover_ytsfzl.jpg',
        merger: 'v1781698294/merger_fehb42.jpg',
        weave: 'v1781698294/weave_uilz2d.jpg',
      }
    },

    water: {
      main: {
        descent: 'v1786478909/descent_suiaoe.jpg',
      },
      artworks: {
        descent: 'v1786478909/descent_suiaoe.jpg',
        adrift: 'v1786478908/adrift_xwhvym.jpg',
        compression: 'v1786478909/compression_ur7fcb.jpg',
        bioluminescence: 'v1786478909/bioluminescence_b6bqx5.jpg',
        undertow: 'v1786478909/undertow_uudbfq.jpg',
        abyss: 'v1786478910/abyss_bpbfam.jpg',
        surface_tension: 'v1786478910/surface_tension_lpwfqr.jpg',
      }
    },

    air: {
      main: {
        absence: 'v1787138794/absence_aepzlm.jpg',
      },
      artworks: {
        absence: 'v1787138794/absence_aepzlm.jpg',
        panic: 'v1787138795/panic_upxoxd.jpg',
        exhale: 'v1787138796/exhale_ww4kd0.jpg',
        white_noise: 'v1787138795/white_noise_ncgofj.jpg',
        first_breath: 'v1787138796/first_breath_mm2kvm.jpg',
        whisper: 'v1787138794/whisper_bxzsfg.jpg',
        suspension: 'v1787138796/suspension_eusa21.jpg',
      }
    },
  },
  process: {
    craft: 'v1778450558/create_mask_process_craft_cojqed.jpg',
    painting: 'v1778450549/create_mask_process_paiting_tt7xuq.jpg',
  },
  fashion: {
    accessories: 'v1787604478/accessories_oslz7p.jpg',
    patches: 'v1787604482/patches_a51u5t.jpg',
  },
  footer: {
    main: 'v1778930283/sun-mask-footer_nwrbta.jpg',
  }
} as const;

function generateArtworks(stateName: StateName) {
  return Object.entries(imagesIds.states[stateName].artworks).map(([key, id]): Artwork => {
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
    key: stateName,
    artworks: generateArtworks(stateName),
  }
}

function generateMainCollectionImage(stateName: StateName) {
  const mainImage = imagesIds.states[stateName].main;
  const artworks = imagesIds.states[stateName].artworks;
  
  const firstItem = Object.entries(mainImage)[0] || Object.entries(artworks)[0];

  if (!firstItem) {
    throw new Error(`Collection "${stateName}" is empty`);
  }

  const [key, publicId] = firstItem;
  return cloudinaryImage(publicId, key);
}

export function isStateName(value: string): value is StateName {
  return value in collections;
}

export const images = {
  hero: cloudinaryImage(
    imagesIds.hero.main,
    'main_img_alt',
    {
      width: imageSizes.hero.width,
      height: imageSizes.hero.height,
    }
  ),

  states: {
    fire: {
      main: generateMainCollectionImage('fire'),
      collection: generateCollection('fire'),
    },

    earth: {
      main: generateMainCollectionImage('earth'),
      collection: generateCollection('earth'),
    },

    water: {
      main: generateMainCollectionImage('water'),
      collection: generateCollection('water'),
    },

    air: {
      main: generateMainCollectionImage('air'),
      collection: generateCollection('air'),
    },
  },

  process: {
    craft:  cloudinaryImage(
      imagesIds.process.craft,
      'craft_img_alt',
      {
        width: 1200,
        height: 1600,
        crop: 'fill',
      } 
    ),

    painting: cloudinaryImage(
      imagesIds.process.painting,
      'paint_img_alt',
      {
        width: 1200,
        height: 1600,
      } 
    ),
  },

  fashion: {
    accessories: cloudinaryImage(
      imagesIds.fashion.accessories,
      'accessories_alt'
    ),

    patches: cloudinaryImage(
      imagesIds.fashion.patches,
      'patches_alt'
    ),
  },

  footer: cloudinaryImage(
    imagesIds.footer.main,
    'footer_img_alt',
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