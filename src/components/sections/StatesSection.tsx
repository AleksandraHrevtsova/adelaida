'use client';

import Image from 'next/image';
import Link from 'next/link';

type CardItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;

  overlay: string;
  cardBg: string;
  cardHover: string;
};

const items: CardItem[] = [
  {
    id: 1,
    title: 'Вогонь',
    description:
      'Just a short sentence. Write your own copy text here.',
    image: 'https://res.cloudinary.com/dbiudjxuw/image/upload/f_auto,q_auto/states_fire_desire_wzvezj',
      // 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
    href: '/gallery/fire',

    overlay: 'bg-red-700/35',
    cardBg: 'bg-red-500/20',
    cardHover: 'hover:bg-red-700/85',
  },

  {
    id: 2,
    title: 'Вода',
    description:
      'Just a short sentence. Write your own copy text here.',
    image: 'https://res.cloudinary.com/dbiudjxuw/image/upload/f_auto,q_auto/states_fire_desire_wzvezj',
      // 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    href: '/gallery/water',

    overlay: 'bg-cyan-600/35',
    cardBg: 'bg-cyan-400/20',
    cardHover: 'hover:bg-cyan-600/85',
  },

  {
    id: 3,
    title: 'Повітря',
    description:
      'Just a short sentence. Write your own copy text here.',
    image: 'https://res.cloudinary.com/dbiudjxuw/image/upload/f_auto,q_auto/states_fire_desire_wzvezj',
      // 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1200&auto=format&fit=crop',
    href: '/gallery/air',

    overlay: 'bg-sky-300/35',
    cardBg: 'bg-sky-300/20',
    cardHover: 'hover:bg-sky-300/85',
  },

  {
    id: 4,
    title: 'Земля',
    description:
      'Just a short sentence. Write your own copy text here.',
    image: 'https://res.cloudinary.com/dbiudjxuw/image/upload/f_auto,q_auto/states_fire_desire_wzvezj',
      // 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop',
    href: '/gallery/earth',

    overlay: 'bg-black/45',
    cardBg: 'bg-black/20',
    cardHover: 'hover:bg-black/75',
  },
];

function TextCard({
  title,
  description,
  href,
  cardBg,
  cardHover,
}: {
  title: string;
  description: string;
  href: string;

  cardBg: string;
  cardHover: string;
}) {
  return (
    <Link
      href={href}
      className={`
        group flex h-full cursor-pointer flex-col justify-center
        p-8 md:p-10
        transition-all duration-500
        ${cardBg}
        ${cardHover}
      `}
    >
      <h3 className="mb-6 text-3xl font-semibold tracking-tight text-black transition duration-300">
        {title}
      </h3>

      <p className="max-w-60 text-base leading-8 text-black/80 transition duration-300">
        {description}
      </p>

      <span className="mt-10 w-fit border-b border-black/30 pb-1 text-lg text-black transition duration-300 group-hover:border-black">
        Read More
      </span>
    </Link>
  );
}

function MobileOverlayCard({
  item,
}: {
  item: CardItem;
}) {
  return (
    <Link
      href={item.href}
      className="group relative block cursor-pointer overflow-hidden"
    >
      <div className="relative h-130 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="100vw"
        />

        <div className={`absolute inset-0 ${item.overlay}`} />

        {/* overlay card */}
        <div className="absolute inset-4 flex flex-col justify-end border border-white/20 bg-white/10 p-6 backdrop-blur-md">
          <h3 className="mb-4 text-3xl font-semibold text-white">
            {item.title}
          </h3>

          <p className="max-w-72 text-sm leading-7 text-white/90">
            {item.description}
          </p>

          <span className="mt-6 w-fit border-b border-white/40 pb-1 text-sm text-white transition duration-300 group-hover:border-white">
            Read More
          </span>
        </div>
      </div>
    </Link>
  );
}

function DesktopCard({
  item,
}: {
  item: CardItem;
}) {
  return (
    <div className="grid grid-cols-2">
      <Link
        href={item.href}
        className="group relative block h-105 cursor-pointer overflow-hidden"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 1200px) 50vw, 25vw"
        />
      </Link>

      <TextCard
        title={item.title}
        description={item.description}
        href={item.href}
        cardBg={item.cardBg}
        cardHover={item.cardHover}
      />
    </div>
  );
}

export default function EditorialGrid() {
  return (
    <section className="bg-[#f3f3f3] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* SECTION TITLE */}
        <div className="mb-14">
          <h2 className="text-center text-5xl font-semibold tracking-tight text-black md:text-7xl">
            Стани
          </h2>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:grid lg:grid-cols-2">
          {items.map((item) => (
            <DesktopCard key={item.id} item={item} />
          ))}
        </div>

        {/* TABLET */}
        <div className="hidden gap-0 md:flex md:flex-col lg:hidden">
          {items.map((item) => (
            <div key={item.id} className="grid grid-cols-2">
              <Link
                href={item.href}
                className="group relative block h-105 cursor-pointer overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="50vw"
                />
              </Link>

              <TextCard
                title={item.title}
                description={item.description}
                href={item.href}
                cardBg={item.cardBg}
                cardHover={item.cardHover}
              />
            </div>
          ))}
        </div>

        {/* MOBILE */}
        <div className="flex flex-col gap-6 md:hidden">
          {items.map((item) => (
            <MobileOverlayCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}