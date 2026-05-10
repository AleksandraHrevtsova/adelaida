"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between bg-[#3f3f3f] px-6 py-8 text-white sm:px-10 sm:py-10 lg:px-16 lg:py-14">
          {/* TOP NAV */}
          <div className="flex flex-col gap-2 text-sm sm:text-base">
            <Link
              href="/details"
              className="transition-opacity duration-300 hover:opacity-70"
            >
              Details
            </Link>

            <Link
              href="/journal"
              className="transition-opacity duration-300 hover:opacity-70"
            >
              Journal
            </Link>
          </div>

          {/* MAIN TEXT */}
          <div className="max-w-130 py-16 lg:py-0">
            <h1 className="text-[44px] font-medium leading-[0.95] tracking-[-0.04em] sm:text-[64px] md:text-[72px] lg:text-[84px]">
              Adelaida Art Mask is an art director and designer specializing in holistic
              brand design.
            </h1>
          </div>

          {/* FOOTER LINKS */}
          <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between sm:text-base">
            <div className="flex gap-3">
              <Link
                href="https://instagram.com"
                className="transition-opacity duration-300 hover:opacity-70"
              >
                Instagram
              </Link>

              <span>/</span>

              <Link
                href="https://tiktok.com"
                className="transition-opacity duration-300 hover:opacity-70"
              >
                TikTok
              </Link>

              <span>/</span>

              <Link
                href="https://x.com"
                className="transition-opacity duration-300 hover:opacity-70"
              >
                X
              </Link>
            </div>

            <Link
              href="/blog"
              className="transition-opacity duration-300 hover:opacity-70"
            >
              Blog
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative min-h-[70vh] lg:min-h-screen">
          <Image
            src="/images/hero-image-lg.jpg"
            alt="Hero artwork"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* NAME */}
          <div className="absolute bottom-6 left-6 z-10 sm:bottom-10 sm:left-10 lg:bottom-14 lg:left-14">
            <h2 className="text-[56px] font-black uppercase leading-[0.9] tracking-tighter text-white sm:text-[90px] md:text-[110px] lg:text-[120px] xl:text-[140px]">
              Alla
              <br />
              Efremova
            </h2>
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </section>
  );
}