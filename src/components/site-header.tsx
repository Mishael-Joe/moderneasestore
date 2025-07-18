import { siteConfig } from "@/config/site";
import Link from "next/link";

/**
 * Header component with responsive navigation
 *
 * Features:
 * - Logo and brand name
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="h-8 w-8 rounded-full bg-site-primary-color flex items-center justify-center text-white font-bold">
            {siteConfig.name[0]}
          </span>
          <span className="font-semibold text-xl text-site-primary-color">
            {siteConfig.name}
          </span>
        </Link>
      </div>
    </header>
  );
}
