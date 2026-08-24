'use client';

import Image from 'next/image';
import { CustomLink } from '@/components/ui/Link';
import { useTranslations } from 'next-intl';
import { images, type StateName } from '@/data/images';
import type { CloudinaryImage } from '@/lib/cloudinary';
import { routes } from '@/constants/routes';

type CardItem = {
  state: StateName;
  image: CloudinaryImage;
  href: string;
};

const items: CardItem[] = (Object.keys(images.states) as StateName[]).map((state) => ({
    state,
    image: images.states[state].main,
    href: `${routes.collections}/${state}`,
  }),
);

const overlayStyles: Record<StateName, string> = {
  fire: 'bg-red-200/35',
  water: 'bg-cyan-200/35',
  air: 'bg-sky-200/35',
  earth: 'bg-black/20',
};

function CardOverlay({
  state,
}: {
  state: StateName;
}) {
  const t = useTranslations();
  const title = t(`states.${state}_title`);
  const description = t(`states.${state}_description`);

  return (
    <div
      className="
        absolute inset-4
        flex flex-col justify-end
        border border-white/20
        bg-white/10
        p-6
        backdrop-blur-sm

        opacity-100
        transition-opacity duration-500

        lg:opacity-0
        lg:group-hover:opacity-100
      "
    >
      <h3 className="mb-4 text-3xl font-semibold text-white">
        {title}
      </h3>

      <p className="max-w-72 text-sm leading-7 text-white/90">
        {description}
      </p>

      <span
        className="
          mt-6
          w-fit
          border-b border-white/40
          pb-1
          text-sm
          text-white
          transition-colors
          duration-300
          lg:group-hover:border-white
        "
      >
        {t('more')}
      </span>
    </div>
  );
}

function StateCard({ item }: { item: CardItem }) {
  const overlay = overlayStyles[item.state];

  return (
    <CustomLink
      path={item.href}
      className="
        group
        relative
        block
        cursor-pointer
        overflow-hidden
      "
    >
      {/* Image */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          bg-black
        "
      >
        <Image
          src={item.image.src}
          alt={item.image.alt}
          width={item.image.width}
          height={item.image.height}
          className="
            block
            h-auto
            w-full
            object-contain
            transition-transform
            duration-700
            lg:group-hover:scale-105
          "
          sizes="
            (max-width: 767px) 100vw,
            (max-width: 1279px) 50vw,
            25vw
          "
        />
      </div>

      {/* Dark/color overlay */}
      <div
        className={`
          absolute
          inset-0
          ${overlay}

          opacity-100
          transition-opacity
          duration-500

          lg:opacity-0
          lg:group-hover:opacity-100
        `}
      />

      {/* Text overlay */}
      <CardOverlay state={item.state} />
    </CustomLink>
  );
}

export default function EditorialGrid() {
  const t = useTranslations('states');

  return (
    <section className="bg-[#e9e9e9] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section title */}
        <div className="mb-14">
          <h2 className="text-center text-5xl font-semibold tracking-tight text-black md:text-7xl">
            {t('title')}
          </h2>
          <p className="text-center text-xl font-semibold tracking-tight text-black md:text-2xl">
            {t('description_top')}
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-2">
          {items.map((item) => (
            <StateCard
              key={item.state}
              item={item}
            />
          ))}
        </div>

        {/* Tablet */}
        <div className="hidden md:grid md:grid-cols-2 lg:hidden">
          {items.map((item) => (
            <StateCard
              key={item.state}
              item={item}
            />
          ))}
        </div>

        {/* Mobile */}
        <div className="flex flex-col gap-6 md:hidden">
          {items.map((item) => (
            <StateCard
              key={item.state}
              item={item}
            />
          ))}
        </div>
        <div className="mt-14">
          <p className="text-center text-xl font-semibold tracking-tight text-black md:text-2xl">
            {t('description_bottom')}
          </p>
        </div>
      </div>
    </section>
  );
}