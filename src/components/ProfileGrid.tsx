import type { Profile } from "@/data/profiles";
import ProfileCard from "./ProfileCard";

interface ProfileGridProps {
  profiles: Profile[];
  title?: string;
  label?: string;
  cardVariant?: "default" | "browse" | "featured";
}

export default function ProfileGrid({
  profiles,
  title = "Browse Goa Call Girls",
  label,
  cardVariant = "default",
}: ProfileGridProps) {
  const gridGap =
    cardVariant === "browse"
      ? "gap-6"
      : cardVariant === "featured"
        ? "gap-5"
        : "gap-4";

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8 text-center">
        {label && (
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
            {label}
          </span>
        )}
        <h2 className="font-handwriting mt-1 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
          <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        <div className="mx-auto mt-4 flex justify-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
        </div>
      </div>
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ${gridGap}`}
      >
        {profiles.map((profile, index) => (
          <ProfileCard
            key={`${profile.name}-${index}`}
            profile={profile}
            variant={cardVariant}
          />
        ))}
      </div>
    </section>
  );
}
