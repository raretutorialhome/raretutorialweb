import Image from "next/image";
import type { ImageAsset } from "@/content/assets";
import { cn } from "@/lib/utils/cn";

/**
 * Thin wrapper around next/image that takes one of the typed entries from
 * content/assets.ts, so callers never juggle width/height/alt by hand and a
 * missing asset fails at compile time rather than as a broken <img>.
 */
export function ResponsiveImage({
  asset,
  className,
  sizes,
  priority,
  fill,
}: {
  asset: ImageAsset;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
}) {
  if (fill) {
    return (
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        priority={priority}
        sizes={sizes ?? "100vw"}
        className={cn("object-cover", className)}
      />
    );
  }
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      sizes={sizes}
      className={cn("h-auto w-full object-cover", className)}
    />
  );
}
