export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "https://meembakers.com";
  return raw.replace(/\/$/, "");
}
