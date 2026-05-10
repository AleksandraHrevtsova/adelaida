"use client";
// import { CldImage } from 'next-cloudinary';
import Image from "next/image";

export default function StickySplitHero() {
  return (
    <section className="relative">
      {/* Высота области скролла */}
      <div className="relative h-[220vh]">
        {/* Приклеенный экран */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Две картинки */}
          <div className="grid h-full grid-cols-2">
            <div className="relative">
              {/* <CldImage
                src="create_mask_process_craft_cojqed"
                alt="Left image"
                fill
                className="object-cover"
                sizes="50vw"
              /> */}
              <Image
                src="https://res.cloudinary.com/dbiudjxuw/image/upload/f_auto,q_auto/create_mask_process_craft_cojqed"
                alt="craft"
                fill
                className="object-cover"
                priority
                sizes="50vw"
              />
            </div>

            <div className="relative">
              {/* <CldImage
                src="create_mask_process_paiting_tt7xuq"
                alt="Right image"
                fill
                className="object-cover"
                sizes="50vw"
              /> */}
              <Image
                src="https://res.cloudinary.com/dbiudjxuw/image/upload/f_auto,q_auto/create_mask_process_paiting_tt7xuq"
                alt="painting"
                fill
                className="object-cover"
                priority
                sizes="50vw"
              />
            </div>
          </div>

          {/* Затемнение */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Текст поверх */}
          <div className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-s">
            <div className="text-center text-white">
              <h1 className="mb-6 text-5xl md:text-7xl font-light tracking-wide">
                СТВОРЕННЯ
              </h1>

              {/* <p className="mb-10 text-2xl md:text-4xl">ISSUE 2</p> */}

              <div className="space-y-2 text-2xl md:text-5xl font-light uppercase">
                <p>Ідеї</p>
                <p>Натхнення</p>
                <p>Події</p>
                <p>Вплив</p>
              </div>

              <button className="mt-10 border-b border-white text-2xl md:text-4xl">
                Більше
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}