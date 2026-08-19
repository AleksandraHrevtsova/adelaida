import Image from 'next/image';

type ResponsiveImageProps = {
  src: string;
  alt: string;
  aspect?: string; // aspect-square | aspect-video | aspect-[4/5] | aspect-[3/4]
  fill?: boolean;
  objectFit?: 'cover' | 'contain';
  sizes?: string;
  priority?: boolean;
  className?: string;
  width?: number;
  height?: number;
};

export default function ResponsiveImage({
  src,
  alt,
  aspect = 'aspect-[4/5]',
  fill = false,
  objectFit = 'cover',
  sizes = '100vw',
  priority = false,
  className = '',
  width = 1400,
  height = 1800,
}: ResponsiveImageProps) {
  const imageClass = `
    ${fill ? 'absolute inset-0' : 'h-auto w-full'}
    transition-transform duration-700
    ${objectFit === 'cover'
      ? 'object-cover'
      : 'object-contain'}
  `;

  return (
    <div
      className={`
        ${fill ? `relative ${aspect}` : ''}
        ${className}
      `}
    >
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={imageClass}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={imageClass}
        />
      )}
    </div>
  );
}