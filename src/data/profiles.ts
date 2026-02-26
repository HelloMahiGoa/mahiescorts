export interface Profile {
  name: string;
  age: number;
  location: string;
  image: string;
  tag?: string;
}

export const profiles: Profile[] = [
  { name: "Priya", age: 20, location: "Goa", image: "/profiles/1.jpg", tag: "Goa Escorts" },
  { name: "Ananya", age: 22, location: "Goa", image: "/profiles/2.jpg", tag: "Call Girls Goa" },
  { name: "Kavya", age: 19, location: "Goa", image: "/profiles/3.jpg", tag: "Goa Call Girls" },
  { name: "Diya", age: 25, location: "Goa", image: "/profiles/4.jpg", tag: "Escorts in Goa" },
  { name: "Riya", age: 27, location: "Goa", image: "/profiles/5.jpg", tag: "Goa Escorts" },
  { name: "Sneha", age: 18, location: "Goa", image: "/profiles/6.jpg", tag: "Call Girls Goa" },
  { name: "Pooja", age: 23, location: "Goa", image: "/profiles/7.jpg", tag: "Goa Call Girls" },
  { name: "Neha", age: 29, location: "Goa", image: "/profiles/8.jpg", tag: "Escorts in Goa" },
  { name: "Shreya", age: 21, location: "Goa", image: "/profiles/9.jpg", tag: "Goa Escorts" },
  { name: "Anjali", age: 26, location: "Goa", image: "/profiles/10.jpg", tag: "Call Girls Goa" },
  { name: "Meera", age: 18, location: "Goa", image: "/profiles/11.jpg", tag: "Goa Call Girls" },
  { name: "Radhika", age: 24, location: "Goa", image: "/profiles/12.jpg", tag: "Escorts in Goa" },
  { name: "Simran", age: 28, location: "Goa", image: "/profiles/13.jpg", tag: "Goa Escorts" },
  { name: "Preeti", age: 19, location: "Goa", image: "/profiles/14.jpg", tag: "Call Girls Goa" },
  { name: "Kirti", age: 23, location: "Goa", image: "/profiles/15.jpg", tag: "Goa Call Girls" },
  { name: "Jyoti", age: 27, location: "Goa", image: "/profiles/16.jpg", tag: "Escorts in Goa" },
  { name: "Sunita", age: 20, location: "Goa", image: "/profiles/17.jpg", tag: "Goa Escorts" },
  { name: "Lata", age: 26, location: "Goa", image: "/profiles/18.jpg", tag: "Call Girls Goa" },
  { name: "Asha", age: 18, location: "Goa", image: "/profiles/19.jpg", tag: "Goa Call Girls" },
  { name: "Rekha", age: 29, location: "Goa", image: "/profiles/20.jpg", tag: "Escorts in Goa" },
].map((p) => ({ ...p, image: "/images/demo-profile.avif" }));
