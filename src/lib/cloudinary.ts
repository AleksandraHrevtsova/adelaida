type CloudinaryOptions = {
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'crop';
  quality?: string | number;
};

const cloudinaryBase = 'https://res.cloudinary.com/dbiudjxuw/image/upload/';

export function cloudinaryImage(
  publicId: string,
  alt: string,
  options: CloudinaryOptions = {},
) {
  const {
    width = 1400,
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