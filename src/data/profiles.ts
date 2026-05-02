import { assignProfileImagesFromPublicFolder } from "@/lib/profileImagePool";

export interface Profile {
  name: string;
  age: number;
  location: string;
  image: string;
  tag?: string;
}

export type ProfileSeed = Omit<Profile, "image">;

export const profileSeeds: ProfileSeed[] = [
  { name: "Priya", age: 20, location: "Goa", tag: "Goa Escorts" },
  { name: "Ananya", age: 22, location: "Goa", tag: "Call Girls Goa" },
  { name: "Kavya", age: 19, location: "Goa", tag: "Goa Call Girls" },
  { name: "Diya", age: 25, location: "Goa", tag: "Escorts in Goa" },
  { name: "Riya", age: 27, location: "Goa", tag: "Goa Escorts" },
  { name: "Sneha", age: 18, location: "Goa", tag: "Call Girls Goa" },
  { name: "Pooja", age: 23, location: "Goa", tag: "Goa Call Girls" },
  { name: "Neha", age: 29, location: "Goa", tag: "Escorts in Goa" },
  { name: "Shreya", age: 21, location: "Goa", tag: "Goa Escorts" },
  { name: "Anjali", age: 26, location: "Goa", tag: "Call Girls Goa" },
  { name: "Meera", age: 18, location: "Goa", tag: "Goa Call Girls" },
  { name: "Radhika", age: 24, location: "Goa", tag: "Escorts in Goa" },
  { name: "Simran", age: 28, location: "Goa", tag: "Goa Escorts" },
  { name: "Preeti", age: 19, location: "Goa", tag: "Call Girls Goa" },
  { name: "Kirti", age: 23, location: "Goa", tag: "Goa Call Girls" },
  { name: "Jyoti", age: 27, location: "Goa", tag: "Escorts in Goa" },
  { name: "Sunita", age: 20, location: "Goa", tag: "Goa Escorts" },
  { name: "Lata", age: 26, location: "Goa", tag: "Call Girls Goa" },
  { name: "Asha", age: 18, location: "Goa", tag: "Goa Call Girls" },
  { name: "Rekha", age: 29, location: "Goa", tag: "Escorts in Goa" },
];

/** Featured grid only — different names from `profileSeeds`. */
export const featuredProfileSeeds: ProfileSeed[] = [
  { name: "Aditi", age: 21, location: "Goa", tag: "Goa Escorts" },
  { name: "Ishita", age: 23, location: "Goa", tag: "Call Girls Goa" },
  { name: "Nisha", age: 20, location: "Goa", tag: "Goa Call Girls" },
  { name: "Tanvi", age: 24, location: "Goa", tag: "Escorts in Goa" },
  { name: "Swati", age: 26, location: "Goa", tag: "Goa Escorts" },
  { name: "Divya", age: 19, location: "Goa", tag: "Call Girls Goa" },
  { name: "Sakshi", age: 22, location: "Goa", tag: "Goa Call Girls" },
  { name: "Komal", age: 28, location: "Goa", tag: "Escorts in Goa" },
  { name: "Vandana", age: 25, location: "Goa", tag: "Goa Escorts" },
  { name: "Payal", age: 18, location: "Goa", tag: "Call Girls Goa" },
  { name: "Pallavi", age: 27, location: "Goa", tag: "Goa Call Girls" },
  { name: "Muskan", age: 20, location: "Goa", tag: "Escorts in Goa" },
  { name: "Bhavya", age: 23, location: "Goa", tag: "Goa Escorts" },
  { name: "Isha", age: 21, location: "Goa", tag: "Call Girls Goa" },
  { name: "Saloni", age: 24, location: "Goa", tag: "Goa Call Girls" },
  { name: "Karishma", age: 29, location: "Goa", tag: "Escorts in Goa" },
  { name: "Sonam", age: 22, location: "Goa", tag: "Goa Escorts" },
  { name: "Juhi", age: 26, location: "Goa", tag: "Call Girls Goa" },
  { name: "Ritu", age: 19, location: "Goa", tag: "Goa Call Girls" },
  { name: "Aarohi", age: 25, location: "Goa", tag: "Escorts in Goa" },
];

export const russianProfileSeeds: ProfileSeed[] = [
  { name: "Anastasia", age: 22, location: "Goa", tag: "Russian Escorts in Goa" },
  { name: "Maria", age: 24, location: "Goa", tag: "Goa Russian Escorts" },
  { name: "Olga", age: 21, location: "Goa", tag: "Russian Call Girls Goa" },
  { name: "Elena", age: 23, location: "Goa", tag: "Goa Russian Call Girls" },
  { name: "Irina", age: 25, location: "Goa", tag: "Russian Escorts Goa" },
  { name: "Natalia", age: 20, location: "Goa", tag: "Russian Escorts in Goa" },
  { name: "Svetlana", age: 26, location: "Goa", tag: "Goa Russian Escorts" },
  { name: "Yulia", age: 19, location: "Goa", tag: "Russian Call Girls Goa" },
  { name: "Ekaterina", age: 27, location: "Goa", tag: "Goa Russian Call Girls" },
  { name: "Tatiana", age: 22, location: "Goa", tag: "Russian Escorts Goa" },
  { name: "Anna", age: 21, location: "Goa", tag: "Russian Escorts in Goa" },
  { name: "Victoria", age: 24, location: "Goa", tag: "Goa Russian Escorts" },
  { name: "Daria", age: 23, location: "Goa", tag: "Russian Call Girls Goa" },
  { name: "Polina", age: 20, location: "Goa", tag: "Goa Russian Call Girls" },
  { name: "Ksenia", age: 25, location: "Goa", tag: "Russian Escorts Goa" },
  { name: "Alina", age: 19, location: "Goa", tag: "Russian Escorts in Goa" },
  { name: "Alexandra", age: 26, location: "Goa", tag: "Goa Russian Escorts" },
  { name: "Kristina", age: 22, location: "Goa", tag: "Russian Call Girls Goa" },
  { name: "Valeria", age: 21, location: "Goa", tag: "Goa Russian Call Girls" },
  { name: "Marina", age: 24, location: "Goa", tag: "Russian Escorts Goa" },
];

/** Area pages and any “browse” list: images from `public/images/regular-profiles`. */
export const profiles: Profile[] = assignProfileImagesFromPublicFolder(
  profileSeeds,
  "regular-profiles"
);
