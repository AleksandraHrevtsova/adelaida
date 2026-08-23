type CloudinaryOptions = {
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'crop';
  quality?: string | number;
};

export type CloudinaryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const cloudinaryBase = 'https://res.cloudinary.com/dbiudjxuw/image/upload/';

export function cloudinaryImage(
  publicId: string,
  alt: string,
  options: CloudinaryOptions = {},
): CloudinaryImage {
  const {
    width = 1200,
    height = 1800,
    crop = 'fill',
    quality = 'auto',
  } = options;

  return {
    src: `${cloudinaryBase}/f_auto,q_${quality},w_${width},h_${height},c_${crop}/${publicId}`,
    alt,
    width,
    height,
  };
}