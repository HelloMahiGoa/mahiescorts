import Link from "next/link";

export type AreaEscortsBreadcrumbProps = {
  /** Area label as in `goaAreas`, e.g. `Panjim` */
  areaName: string;
  /** When false, render only the `<nav>` (e.g. nested inside another shell). Default: full top band. */
  withShell?: boolean;
};

function BreadcrumbNav({ areaName }: { areaName: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-zinc-600">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        <li>
          <Link
            href="/"
            className="font-medium text-pink-700 underline-offset-2 hover:text-pink-800 hover:underline"
          >
            Home
          </Link>
        </li>
        <li className="text-zinc-400 select-none" aria-hidden>
          /
        </li>
        <li>
          <Link
            href="/areas"
            className="font-medium text-pink-700 underline-offset-2 hover:text-pink-800 hover:underline"
          >
            Areas
          </Link>
        </li>
        <li className="text-zinc-400 select-none" aria-hidden>
          /
        </li>
        <li>
          <span className="font-medium text-zinc-900" aria-current="page">
            {areaName} escorts
          </span>
        </li>
      </ol>
    </nav>
  );
}

/**
 * Visible breadcrumb: Home → Areas → {area} escorts.
 * Align with BreadcrumbList JSON-LD on the same route.
 */
export default function AreaEscortsBreadcrumb({ areaName, withShell = true }: AreaEscortsBreadcrumbProps) {
  if (!withShell) {
    return <BreadcrumbNav areaName={areaName} />;
  }
  return (
    <div className="border-b border-zinc-200/90 bg-zinc-50/90">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        <BreadcrumbNav areaName={areaName} />
      </div>
    </div>
  );
}
