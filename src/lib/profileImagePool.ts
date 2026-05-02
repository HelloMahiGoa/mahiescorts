import fs from "node:fs";
import path from "node:path";

const FALLBACK_IMAGE = "/images/demo-profile.avif";

const IMAGE_EXT = /\.(jpe?g|jpeg|png|gif|webp|avif)$/i;

export type ProfileImageFolder =
  | "regular-profiles"
  | "featured-profiles"
  | "russian-profiles";

function publicUrlForFile(folder: ProfileImageFolder, filename: string): string {
  return `/images/${folder}/${encodeURIComponent(filename)}`;
}

function listImagesInFolder(folder: ProfileImageFolder): string[] {
  const dir = path.join(process.cwd(), "public", "images", folder);
  try {
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((d) => d.isFile() && IMAGE_EXT.test(d.name))
      .map((d) => publicUrlForFile(folder, d.name));
  } catch {
    return [];
  }
}

function shuffle<T>(items: T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

type ProfileSeed = {
  name: string;
  age: number;
  location: string;
  tag?: string;
};

export function assignProfileImagesFromPublicFolder<T extends ProfileSeed>(
  seeds: T[],
  folder: ProfileImageFolder
): Array<T & { image: string }> {
  const pool = shuffle(listImagesInFolder(folder));
  if (pool.length === 0) {
    return seeds.map((s) => ({ ...s, image: FALLBACK_IMAGE }));
  }
  return seeds.map((s, i) => ({
    ...s,
    image: pool[i % pool.length],
  }));
}
