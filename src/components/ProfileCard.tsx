import Image from "next/image";
import { MessageCircle, Star } from "lucide-react";
import type { Profile } from "@/data/profiles";

interface ProfileCardProps {
  profile: Profile;
  variant?: "default" | "browse" | "featured" | "compact";
}

const WHATSAPP = "918121426651";

export default function ProfileCard({ profile, variant = "default" }: ProfileCardProps) {
  if (variant === "browse") {
    return (
      <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-zinc-200/80 ring-1 ring-zinc-200/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-rose-200/40 hover:ring-2 hover:ring-rose-300/60">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={profile.image}
            alt={profile.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent" />
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-zinc-800 backdrop-blur-sm">
            {profile.age} years
          </span>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-handwriting text-2xl font-bold tracking-wide text-white drop-shadow-lg">
              {profile.name}
            </h3>
            <p className="mt-0.5 text-xs font-medium text-white/90">{profile.tag ?? "Goa Call Girls"}</p>
          </div>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-3.5 text-sm font-semibold text-white shadow-md transition hover:from-emerald-600 hover:to-teal-600 hover:shadow-lg"
        >
          <MessageCircle className="h-5 w-5" />
          Chat on WhatsApp
        </a>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-amber-200/80 bg-white shadow-lg shadow-amber-900/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-900/10">
        <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl bg-stone-100">
          <Image
            src={profile.image}
            alt={profile.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="absolute right-0 top-0">
            <span className="flex items-center gap-1 rounded-bl-lg bg-amber-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-md">
              <Star className="h-3 w-3 fill-current" />
              Premium
            </span>
          </div>
        </div>
        <div className="border-t-2 border-amber-100 bg-amber-50/30 px-4 py-3">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-handwriting text-lg font-bold text-zinc-800">{profile.name}</h3>
            <span className="text-xs font-medium text-amber-700">{profile.age} yrs</span>
          </div>
          <p className="mt-0.5 text-xs text-zinc-500">{profile.tag ?? "Russian Escorts"}</p>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          className="m-3 mx-4 mb-4 flex items-center justify-center gap-2 rounded-xl border-2 border-amber-500/60 bg-white py-3 text-sm font-semibold text-amber-700 transition hover:bg-amber-50 hover:border-amber-500"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </article>
    );
  }

  if (variant === "featured") {
    return (
      <article className="group relative flex flex-col overflow-hidden rounded-2xl border-l-4 border-l-rose-500 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-rose-100 hover:border-l-rose-400">
        <div className="relative aspect-[4/5] overflow-hidden rounded-tr-2xl bg-zinc-100">
          <Image
            src={profile.image}
            alt={profile.name}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <span className="absolute bottom-3 right-3 rounded-lg bg-zinc-900/80 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {profile.age} yrs
          </span>
        </div>
        <div className="flex flex-1 flex-col border-t border-zinc-100 p-4">
          <h3 className="text-lg font-bold text-zinc-800">{profile.name}</h3>
          <p className="mb-3 text-xs text-zinc-500">{profile.tag ?? "Goa Call Girls"}</p>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:from-rose-600 hover:to-pink-600 hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:border-rose-200 hover:shadow-md">
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-100">
        <Image
          src={profile.image}
          alt={profile.name}
          fill
          className="object-cover transition group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <span className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-0.5 text-xs text-white">
          {profile.age} years
        </span>
      </div>
      <div className="flex flex-1 flex-col p-3">
        <h3 className="font-semibold text-zinc-800">{profile.name}</h3>
        <p className="mb-3 text-xs text-zinc-500">{profile.tag ?? "Goa Call Girls"}</p>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-1.5 rounded-lg border border-emerald-500 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-500/20"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </article>
  );
}
