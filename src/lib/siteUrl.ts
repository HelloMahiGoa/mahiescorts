const FALLBACK_ORIGIN = "https://mahiescorts.in";

/**
 * Canonical site origin for metadata, sitemap, and JSON-LD.
 * Guards against bad `NEXT_PUBLIC_SITE_URL` values (e.g. typos like `https://js`) that cause ERR_NAME_NOT_RESOLVED.
 */
export function getSiteOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return FALLBACK_ORIGIN;

  try {
    const withProto = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
    const u = new URL(withProto);
    const host = u.hostname.toLowerCase();
    if (!host) return FALLBACK_ORIGIN;
    // Hostnames without a dot are almost always mistakes (e.g. "js") except localhost.
    if (!host.includes(".") && host !== "localhost") return FALLBACK_ORIGIN;
    return `${u.protocol}//${u.host}`;
  } catch {
    return FALLBACK_ORIGIN;
  }
}
