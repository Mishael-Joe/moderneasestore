"use client";

import Image from "next/image";
import { shimmer, toBase64 } from "@/lib/image";

interface Props {
  src: string;
  alt: string;
}

export function ProductImage({ src, alt }: Props) {
  return (
    <div className="w-full aspect-square rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="w-full h-full object-cover"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(500, 500))}`}
        priority
      />
    </div>
  );
}
