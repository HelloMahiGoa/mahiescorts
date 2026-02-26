export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  image: string;
  tag?: string;
}

export const profiles: Profile[] = [
  { id: "1", name: "Aarohi", age: 20, location: "Goa", image: "/profiles/1.jpg", tag: "Goa Escorts" },
  { id: "2", name: "Bhoomi", age: 22, location: "Goa", image: "/profiles/2.jpg", tag: "Call Girls Goa" },
  { id: "3", name: "Chandni", age: 19, location: "Goa", image: "/profiles/3.jpg", tag: "Goa Call Girls" },
  { id: "4", name: "Disha", age: 25, location: "Goa", image: "/profiles/4.jpg", tag: "Escorts in Goa" },
  { id: "5", name: "Ekta", age: 27, location: "Goa", image: "/profiles/5.jpg", tag: "Goa Escorts" },
  { id: "6", name: "Falak", age: 18, location: "Goa", image: "/profiles/6.jpg", tag: "Call Girls Goa" },
  { id: "7", name: "Gaurika", age: 23, location: "Goa", image: "/profiles/7.jpg", tag: "Goa Call Girls" },
  { id: "8", name: "Harini", age: 29, location: "Goa", image: "/profiles/8.jpg", tag: "Escorts in Goa" },
  { id: "9", name: "Ipsita", age: 21, location: "Goa", image: "/profiles/9.jpg", tag: "Goa Escorts" },
  { id: "10", name: "Jivika", age: 26, location: "Goa", image: "/profiles/10.jpg", tag: "Call Girls Goa" },
  { id: "11", name: "Kashika", age: 18, location: "Goa", image: "/profiles/11.jpg", tag: "Goa Call Girls" },
  { id: "12", name: "Leena", age: 24, location: "Goa", image: "/profiles/12.jpg", tag: "Escorts in Goa" },
  { id: "13", name: "Mahika", age: 28, location: "Goa", image: "/profiles/13.jpg", tag: "Goa Escorts" },
  { id: "14", name: "Nandini", age: 19, location: "Goa", image: "/profiles/14.jpg", tag: "Call Girls Goa" },
  { id: "15", name: "Ojal", age: 23, location: "Goa", image: "/profiles/15.jpg", tag: "Goa Call Girls" },
  { id: "16", name: "Poonam", age: 27, location: "Goa", image: "/profiles/16.jpg", tag: "Escorts in Goa" },
  { id: "17", name: "Riddhi", age: 20, location: "Goa", image: "/profiles/17.jpg", tag: "Goa Escorts" },
  { id: "18", name: "Sanya", age: 26, location: "Goa", image: "/profiles/18.jpg", tag: "Call Girls Goa" },
  { id: "19", name: "Tanvi", age: 18, location: "Goa", image: "/profiles/19.jpg", tag: "Goa Call Girls" },
  { id: "20", name: "Urvi", age: 29, location: "Goa", image: "/profiles/20.jpg", tag: "Escorts in Goa" },
].map((p) => ({ ...p, image: `https://placehold.co/400x500/1a1a2e/eaeaea?text=${p.name}` }));
