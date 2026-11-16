/** 兼容 GitHub Pages 的 /仓库名/ 子路径。 */
export function path(route = ""): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${route.replace(/^\/|\/$/g, "")}${route ? "/" : ""}`;
}
export function asset(source: string): string {
  if (/^https?:\/\//i.test(source)) return source;
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${source.replace(/^\//, "")}`;
}
export function safeLink(source?: string): string | undefined {
  if (!source) return undefined;
  try {
    const url = new URL(source);
    return ["https:", "http:", "mailto:"].includes(url.protocol)
      ? url.href
      : undefined;
  } catch {
    return undefined;
  }
}
export function emailLink(email?: string): string | undefined {
  return email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ? `mailto:${email}`
    : undefined;
}
export function displayDate(source: string): string {
  const date = new Date(`${source}T12:00:00Z`);
  return Number.isNaN(date.getTime())
    ? ""
    : date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      });
}
