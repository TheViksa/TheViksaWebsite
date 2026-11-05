// PRIVREMENA naslovnica dok je stranica u izradi.
// Za povratak originalne naslovnice: obriši folder app/[locale]/(construction)
// i vrati app/[locale]/(root)/(routes)/_home/page.tsx na app/[locale]/(root)/(routes)/page.tsx
import Image from "next/image";
import { ArrowUpRight, Facebook, Home, Instagram, Mail, Phone } from "lucide-react";
import { CONTACT_DATA } from "@/static";

const LINKS = {
  airbnb: "https://hr.airbnb.com/rooms/1488952777229151383",
  facebook:
    "https://www.facebook.com/p/The-Vixa-ku%C4%87a-za-odmor-61555660566331/",
  instagram: "https://www.instagram.com/the__vixa/reels/",
};

const TEXT = {
  hr: {
    badge: "Stranica u izradi",
    title: "Uskoro nova web stranica",
    subtitle:
      "Pripremamo nešto posebno. Do tada nas pronađite na Airbnbu i društvenim mrežama — rezervirajte svoj termin i pratite što je novo u The Vixa kući za odmor.",
    airbnb: "Rezerviraj na Airbnbu",
    follow: "Pratite nas",
  },
  en: {
    badge: "Under construction",
    title: "New website coming soon",
    subtitle:
      "We're preparing something special. Until then, find us on Airbnb and social media — book your stay and follow what's new at The Vixa holiday house.",
    airbnb: "Book on Airbnb",
    follow: "Follow us",
  },
};

export default function UnderConstructionPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = TEXT[params.locale === "en" ? "en" : "hr"];

  return (
    <main className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center px-4 py-10">
      {/* Pozadinska fotografija */}
      <Image
        src="/assets/images/17.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105 motion-safe:animate-[slowzoom_30s_ease-in-out_infinite_alternate]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      {/* Kartica */}
      <section className="relative z-20 w-full max-w-[560px] rounded-3xl bg-white shadow-2xl ring-1 ring-white/50 px-6 py-10 sm:px-12 sm:py-12 text-center animate-in fade-in slide-in-from-bottom-6 duration-1000">
        <Image
          src="/assets/images/logo.png"
          alt="The Vixa House — kuća za odmor"
          width={380}
          height={150}
          priority
          className="mx-auto w-[240px] sm:w-[300px] h-auto"
        />

        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {t.badge}
        </div>

        <h1
          className="mt-5 text-[34px] leading-[40px] sm:text-[44px] sm:leading-[50px] font-semibold text-gray-900"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {t.title}
        </h1>

        <p className="mt-4 text-bodyMMobile sm:text-bodyM text-gray-600">
          {t.subtitle}
        </p>

        <a
          href={LINKS.airbnb}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-accent px-6 py-4 text-base font-semibold text-white shadow-lg shadow-accent/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40 hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <Home className="h-5 w-5" />
          {t.airbnb}
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <div className="mt-8 flex items-center gap-4">
          <span className="h-px flex-1 bg-gray-200" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            {t.follow}
          </span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <a
            href={LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Facebook className="h-5 w-5" />
            Facebook
          </a>
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Instagram className="h-5 w-5" />
            Instagram
          </a>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-gray-500">
          <a
            href={`${CONTACT_DATA.phone.aPrefix}${CONTACT_DATA.phone.value}`}
            className="inline-flex items-center gap-2 hover:text-accent transition"
          >
            <Phone className="h-4 w-4" />
            {CONTACT_DATA.phone.label}
          </a>
          <a
            href={`${CONTACT_DATA.email.aPrefix}${CONTACT_DATA.email.value}`}
            className="inline-flex items-center gap-2 hover:text-accent transition"
          >
            <Mail className="h-4 w-4" />
            {CONTACT_DATA.email.label}
          </a>
        </div>
      </section>

      <p className="absolute bottom-4 left-0 right-0 z-20 text-center text-xs text-white/70">
        © {new Date().getFullYear()} The Vixa House
      </p>
    </main>
  );
}
