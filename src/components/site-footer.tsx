import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const linkStyles =
    "text-sm hover:text-site-primary-color transition-colors duration-200 text-sm leading-6";

  return (
    <footer className="bg-[#252830] text-sm text-[#afb6cd]">
      <div className="mx-auto max-w-7xl flex flex-col justify-center md:items-center py-12 px-6 lg:px-8 gap- md:gap-8">
        <div className="grid grid-cols-1 gap-x-4 space-y-4 md:gap-8 md:flex justify-evenly">
          {siteConfig.footer.map((item) => (
            <Link key={item.href} href={item.href} className={linkStyles}>
              {item.name}
            </Link>
          ))}
        </div>

        <Copyright currentYear={currentYear} />
      </div>
    </footer>
  );
}

// Copyright Component
const Copyright = ({ currentYear }: { currentYear: number }) => (
  <p className="pt-4 text-xs">
    &copy; {currentYear}{" "}
    <a
      href="https://mishael-joe.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-site-primary-color"
    >
      {siteConfig.name} LLC
    </a>
    . All rights reserved.
  </p>
);
