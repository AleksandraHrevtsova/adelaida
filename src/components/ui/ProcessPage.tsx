"use client";

import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';

// import { images } from '@/data/images';
import ResponsiveImage from '@/components/ui/ResponsiveImage';
import { CustomLink } from '@/components/ui/Link';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

type SectionId = "process" | "ideas" | "inspiration" | "actions";

const navKeys: SectionId[] = ['process', 'ideas', 'inspiration', 'actions'];

const tagKeys = ['recycled_paper', 'papier_mache', 'textiles', 'embroidery', 'natural_elements'] as const;
const paragraphs = {
  process: ['p_1', 'p_2', 'p_3'],
  ideas: ['p_1', 'p_2', 'p_3'],
  inspiration: ['p_1', 'p_2', 'p_3', 'p_4', 'p_5'],
  actions: ['p_1', 'p_2', 'p_3']
} as const;
const captions = ['c_1', 'c_2', 'c_3', 'c_4'] as const;
const stages = ['s_1', 's_2', 's_3'] as const;

const image = (name: string) => `/images/${name}.jpg`;

function Photo({
  name,
  alt,
  className = "",
  caption,
}: {
  name: string;
  alt: string;
  className?: string;
  caption?: string;
}) {
  return (
    <figure className={`group ${className}`}>
      <div className="relative h-full min-h-56 overflow-hidden bg-[#e6e0d6]">
        <ResponsiveImage
          src={image(name)}
          alt={alt}
          // loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
        {caption && (
          <figcaption className="absolute bottom-3 left-3 bg-[#f7f5f0]/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[#393630] backdrop-blur-sm">
            {caption}
          </figcaption>
        )}
      </div>
    </figure>
  );
}

export default function ProcessPageUI() {
  const [activeSection, setActiveSection] = useState<SectionId>("process");
  const [stage, setStage] = useState(0);
  const t = useTranslations();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.getAttribute("data-section") as SectionId);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.15, 0.4] }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const jumpTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f5f0] text-[#282722] selection:bg-[#c9b9a4] selection:text-[#282722]">
      <header className="mx-auto flex max-w-360 items-center justify-between px-5 py-5 sm:px-10 lg:px-16">
        <CustomLink path="#" className="text-[11px] font-medium uppercase tracking-[0.22em]">
          Studio / Objects
        </CustomLink>
        <LanguageSwitcher />
      </header>

      <section className="mx-auto grid max-w-360 items-center gap-9 px-5 pb-16 pt-10 sm:px-10 md:grid-cols-[0.92fr_1.08fr] md:gap-12 md:pb-28 md:pt-16 lg:px-16">
        <div className="relative z-10 md:py-10">
          <p className="mb-7 text-[10px] uppercase tracking-[0.24em] text-[#827c70]">{t('process.eyebrow')}</p>
          <h1 className="whitespace-pre-line font-serif text-[clamp(3.5rem,8vw,7.8rem)] leading-[0.91] tracking-[-0.055em]">
            {t('process.heroTitle')}
          </h1>
          <p className="mt-8 max-w-110 text-[14px] leading-[1.9] text-[#69665e] md:text-[15px]">
            {t('process.heroText')}
          </p>
          <div className="mt-10 flex items-center gap-4 text-[10px] uppercase tracking-[0.18em] text-[#827c70]">
            <span className="h-px w-12 bg-[#a9a194]" />
            Scroll to explore
          </div>
        </div>
        <div className="relative md:pl-5">
          <div className="aspect-4/5 max-h-180 overflow-hidden bg-[#e6e0d6] md:aspect-5/6">
            <ResponsiveImage
              src={image("hero-workshop")}
              alt="Hands shaping a handmade papier-mâché art object"
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <span className="absolute -bottom-5 left-0 bg-[#f7f5f0] py-2 pr-5 font-serif text-[17px] italic text-[#6d675d] md:-left-8 md:bottom-8">
            Handmade, slowly.
          </span>
          <span className="absolute right-0 top-4 text-[9px] uppercase tracking-[0.2em] text-[#77736a] [writing-mode:vertical-rl]">
            48° / 24° — Ukraine
          </span>
        </div>
      </section>

      <nav
        aria-label="Section navigation"
        className="sticky top-0 z-30 border-y border-[#e4dfd6] bg-[#f7f5f0]/90 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-360 gap-7 overflow-x-auto px-5 py-4 scrollbar-none sm:justify-center sm:px-10 lg:px-16">
          {navKeys.map((key, idx) => {
            return (
              <button
                key={idx}
                onClick={() => jumpTo(key)}
                className={`shrink-0 text-[10px] uppercase tracking-[0.15em] transition-colors ${
                  activeSection === key ? "text-[#282722]" : "text-[#969084] hover:text-[#4c4942]"
                }`}
              >
                <span className="mr-2 text-[#b0a99d]">0{idx + 1}</span>
                <span className={activeSection === key ? "border-b border-[#6e675c] pb-1" : ""}>{t(`process.${key}`)}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <section id="process" data-section="process" className="scroll-mt-20 border-b border-[#e4dfd6] py-20 md:py-32">
        <div className="mx-auto grid max-w-360 gap-12 px-5 sm:px-10 md:grid-cols-[0.78fr_1.22fr] md:gap-20 lg:px-16">
          <div className="md:sticky md:top-32 md:h-fit">
            <p className="mb-5 text-[10px] tracking-[0.2em] text-[#9a9285]">{t('process.blocks.process.number')} / {t('process.blocks.count')} </p>
            <h2 className="font-serif text-5xl tracking-[-0.04em] md:text-7xl">{t('process.blocks.process.title')}</h2>
            <div className="mt-9 flex max-w-97.5 flex-wrap gap-2">
              {tagKeys.map((key, idx) => (
                <span key={idx} className="rounded-full border border-[#dcd6cc] px-3 py-2 text-[9px] uppercase tracking-widest text-[#777166]">
                  {t(`process.blocks.process.${key}`)}
                </span>
              ))}
            </div>
            <p className="mt-12 hidden max-w-85 font-serif text-2xl italic leading-snug text-[#82796d] md:block">
              “{t('process.blocks.process.quote')}”
            </p>
          </div>
          <div>
            <div className="max-w-162.5 space-y-6 text-[14px] leading-[1.95] text-[#68655d] md:text-[15px]">
              {paragraphs.process.map((key, idx) => <p key={idx}>{t(`process.blocks.process.${key}`)}</p>)}
            </div>
            <div className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-6 md:gap-4">
              <Photo name="process-paper-pulp" alt="Recycled paper pulp" caption={t(`process.blocks.process.${captions[0]}`)} className="col-span-2 aspect-[1/1.1] md:col-span-3" />
              <Photo name="process-sculpting" alt="Hands shaping a sculptural form" caption={t(`process.blocks.process.${captions[1]}`)} className="col-span-1 aspect-[0.78] md:col-span-3 md:mt-16" />
              <Photo name="process-embroidery" alt="Embroidery and textile detail" caption={t(`process.blocks.process.${captions[2]}`)} className="col-span-1 aspect-[0.78] md:col-span-2 md:-mt-10" />
              <Photo name="process-texture" alt="Close-up of a textured handmade surface" caption={t(`process.blocks.process.${captions[3]}`)} className="col-span-2 aspect-[1.5] md:col-span-4" />
            </div>
            <p className="mt-8 font-serif text-xl italic leading-snug text-[#82796d] md:hidden">“{t('process.blocks.process.quote')}”</p>
          </div>
        </div>
      </section>

      <section id="ideas" data-section="ideas" className="scroll-mt-20 border-b border-[#e4dfd6] py-20 md:py-32">
        <div className="mx-auto max-w-360 px-5 sm:px-10 lg:px-16">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <p className="mb-5 text-[10px] tracking-[0.2em] text-[#9a9285]">{t('process.blocks.ideas.number')} / 04</p>
              <h2 className="font-serif text-5xl tracking-[-0.04em] md:text-7xl">{t('process.blocks.ideas.title')}</h2>
            </div>
            <blockquote className="max-w-205 border-y border-[#dcd6cc] py-7 font-serif text-[clamp(1.8rem,4vw,3.7rem)] leading-[1.12] tracking-[-0.035em] text-[#555047]">
              “{t('process.blocks.ideas.quote')}”
            </blockquote>
          </div>
          <div className="mt-12 grid gap-10 md:mt-20 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div className="max-w-130 space-y-5 text-[14px] leading-[1.95] text-[#68655d] md:text-[15px]">
              {paragraphs.ideas.map((key, idx) => <p key={idx}>{t(`process.blocks.ideas.${key}`)}</p>)}
            </div>
            <div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#999184]">{t('process.blocks.ideas.stageNote')}</span>
                <div className="flex gap-1">
                  {stages.map((key, idx) => {
                    return (
                      <button
                        key={idx}
                        onClick={() => setStage(idx)}
                        aria-pressed={stage === idx}
                        className={`px-3 py-2 text-[9px] uppercase tracking-widest transition ${
                          stage === idx ? "bg-[#302e28] text-[#f7f5f0]" : "border border-[#dcd6cc] text-[#777166] hover:border-[#8e877a]"
                        }`}
                      >
                        0{idx + 1} <span className="hidden sm:inline">· {t(`process.blocks.ideas.${key}`)}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
              <div className="relative aspect-5/3 overflow-hidden bg-[#e6e0d6]">
                {["ideas-stage-01", "ideas-stage-02", "ideas-stage-03"].map((src, index) => (
                  <ResponsiveImage
                    key={src}
                    src={image(src)}
                    alt={`${t(`process.blocks.ideas.${stages[index]}`)} — artwork development stage`}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${stage === index ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
                <span className="absolute bottom-4 left-4 bg-[#f7f5f0]/90 px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-[#393630]">
                  0{stage + 1} / 03 — {t(`process.blocks.ideas.${stages[stage]}`)}
                </span>
              </div>
              <p className="mt-3 text-right text-[9px] tracking-[0.12em] text-[#999184]">Select a stage to explore</p>
            </div>
          </div>
        </div>
      </section>

      <section id="inspiration" data-section="inspiration" className="scroll-mt-20 border-b border-[#e4dfd6] py-20 md:py-32">
        <div className="mx-auto max-w-360 px-5 sm:px-10 lg:px-16">
          <div className="mb-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-20">
            <div>
              <p className="mb-5 text-[10px] tracking-[0.2em] text-[#9a9285]">{t('process.blocks.inspiration.number')} / 04</p>
              <h2 className="font-serif text-5xl tracking-[-0.04em] md:text-7xl">{t('process.blocks.inspiration.title')}</h2>
            </div>
            <p className="max-w-160 text-[14px] leading-[1.95] text-[#68655d] md:text-[15px]">{t(`process.blocks.inspiration.${paragraphs.inspiration[0]}`)}</p>
          </div>
          <div className="grid gap-7 md:grid-cols-12 md:gap-8">
            <div className="space-y-7 md:col-span-4 md:pt-24">
              <Photo name="inspiration-stones" alt="Stones and organic forms collected in nature" className="aspect-4/5" />
              <p className="text-[14px] leading-[1.95] text-[#68655d]">{t(`process.blocks.inspiration.${paragraphs.inspiration[2]}`)}</p>
              <Photo name="inspiration-textile" alt="Textile and embroidery detail" className="aspect-4/5" />
            </div>
            <div className="space-y-7 md:col-span-4">
              <Photo name="inspiration-carpathians" alt="Landscape of the Carpathian Mountains" className="aspect-3/4" />
              <p className="text-[14px] leading-[1.95] text-[#68655d]">{t(`process.blocks.inspiration.${paragraphs.inspiration[1]}`)}</p>
              <Photo name="inspiration-natural-finds" alt="Dried plants and natural finds" className="aspect-4/5" />
            </div>
            <div className="space-y-7 md:col-span-4 md:pt-16">
              <p className="text-[14px] leading-[1.95] text-[#68655d]">{t(`process.blocks.inspiration.${paragraphs.inspiration[3]}`)}</p>
              <Photo name="inspiration-mask-detail" alt="Sculptural mask inspired by natural textures" className="aspect-4/5" />
              <p className="border-l border-[#c9bca9] pl-5 font-serif text-2xl italic leading-snug text-[#82796d]">“{t('process.blocks.inspiration.quote')}”</p>
            </div>
          </div>
          <p className="mt-10 max-w-180 text-[14px] leading-[1.95] text-[#68655d]">{t(`process.blocks.inspiration.${paragraphs.inspiration[4]}`)}</p>
        </div>
      </section>

      <section id="actions" data-section="actions" className="scroll-mt-20 py-20 md:py-32">
        <div className="mx-auto max-w-360 px-5 sm:px-10 lg:px-16">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <p className="mb-5 text-[10px] tracking-[0.2em] text-[#9a9285]">{t('process.blocks.actions.number')} / 04</p>
              <h2 className="font-serif text-5xl tracking-[-0.04em] md:text-7xl">{t('process.blocks.actions.title')}</h2>
            </div>
            <div className="max-w-170 space-y-5 text-[14px] leading-[1.95] text-[#68655d] md:text-[15px]">
              {paragraphs.actions.map((key, idx) => <p key={idx}>{t(`process.blocks.actions.${key}`)}</p>)}
            </div>
          </div>
          <div className="mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-5 md:mt-20 md:gap-5">
            <Photo name="moments-travel" alt="A quiet moment from a journey" className="h-60 w-[72vw] shrink-0 snap-start sm:h-80 sm:w-[42vw] md:h-97.5 md:w-[32%]" />
            <Photo name="moments-studio" alt="An atmospheric view of the artist's studio" className="h-60 w-[62vw] shrink-0 snap-start sm:h-80 sm:w-[34vw] md:h-97.5 md:w-[25%]" />
            <Photo name="moments-details" alt="Details and collected objects" className="h-60 w-[72vw] shrink-0 snap-start sm:h-80 sm:w-[42vw] md:h-97.5 md:w-[32%]" />
            <Photo name="moments-landscape" alt="A landscape remembered from a trip" className="h-60 w-[62vw] shrink-0 snap-start sm:h-80 sm:w-[34vw] md:h-97.5 md:w-[25%]" />
          </div>
          <p className="mx-auto mt-14 max-w-225 text-center font-serif text-[clamp(2rem,5vw,4.5rem)] italic leading-[1.12] tracking-[-0.035em] text-[#625b50] md:mt-24">
            “{t('process.blocks.actions.quote')}”
          </p>
        </div>
      </section>
    </main>
  );
}
