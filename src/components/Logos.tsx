import type React from "react";
import { ArrowRight } from "lucide-react";

export default function Logos({
  href,
  logo,
}: {
  href: string;
  logo: React.ReactNode;
}) {
  return (
    <a href={href} className="group relative h-32 max-w-32 w-full">
      <div className="absolute inset-0 flex items-center justify-center rounded-sm bg-zinc-50 p-2 text-center transition-all duration-200 group-hover:opacity-50 group-hover:blur-[10px]">
        {logo}
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-transparent p-2 text-center">
        <div className="inline-flex translate-y-4 items-center text-black opacity-0 transition-[transform,opacity] duration-200 group-hover:translate-y-0 group-hover:opacity-100">
          Visit Site <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </a>
  );
}
