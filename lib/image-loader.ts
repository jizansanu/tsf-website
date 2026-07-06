/**
 * Image loader for static export: serves original files, prefixed with the
 * base path (unoptimized next/image does not apply basePath on its own).
 */
export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return src.startsWith("/") ? `${base}${src}` : src;
}
