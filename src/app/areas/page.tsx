import Link from "next/link";
import { goaAreas } from "@/data/goaAreas";

export const metadata = {
  title: "Goa Escorts by Area | Panjim, Calangute, Baga, Anjuna & More",
  description: "Find escorts and call girls in Goa by area: Panjim, Calangute, Baga, Anjuna, Candolim, Vagator, Margao, Colva and more.",
};

export default function AreasPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-4 text-3xl font-bold text-zinc-800">Escorts in Goa — By Area</h1>
      <p className="mb-10 text-zinc-600">
        Choose your location in Goa. We offer in-call and out-call service across all major tourist areas.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {goaAreas.map((area) => (
          <Link
            key={area.slug}
            href={`/areas/${area.slug}`}
            className="block rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-rose-200 hover:shadow-md"
          >
            <h2 className="font-semibold text-zinc-800">{area.name} Escorts</h2>
            <p className="mt-1 text-sm text-zinc-500">{area.description}</p>
            <span className="mt-3 inline-block text-sm font-medium text-rose-600">View profiles →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
