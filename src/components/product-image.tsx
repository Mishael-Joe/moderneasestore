"use client";

import { useState } from "react";
import Image from "next/image";
import { shimmer, toBase64 } from "@/lib/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  src: string[];
  alt: string;
}

export function ProductImage({ src, alt }: Props) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % src.length);
  const prev = () => setCurrent((prev) => (prev - 1 + src.length) % src.length);

  return (
    <div className="space-y-4">
      {/* Main image with hover controls */}
      <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 group">
        <Image
          src={src[current]}
          alt={alt}
          width={500}
          height={500}
          className="object-cover w-full h-full"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(500, 500)
          )}`}
          priority
        />

        <div className="absolute inset-0 hidden group-hover:flex justify-between items-center px-2">
          <Button
            onClick={prev}
            size="icon"
            variant="ghost"
            className="bg-white/80 dark:bg-black/40"
          >
            <ChevronLeft className="w-5 h-5 text-site-primary-color" />
          </Button>
          <Button
            onClick={next}
            size="icon"
            variant="ghost"
            className="bg-white/80 dark:bg-black/40"
          >
            <ChevronRight className="w-5 h-5 text-site-primary-color" />
          </Button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto">
        {src.map((image, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-20 w-20 rounded border-2 overflow-hidden ${
              current === i
                ? "border-site-primary-color"
                : "border-gray-300 dark:border-gray-700"
            }`}
          >
            <Image
              src={image}
              alt={`${alt} - ${i + 1}`}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
