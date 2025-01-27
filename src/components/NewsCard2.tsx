import { cn } from "../utils/utils";

interface NewsPricingCardProps {
  variant: "standard" | "premium";
  className?: string;
}

export default function NewsCard2({
  variant,
  className,
}: NewsPricingCardProps) {
  const isPremium = variant === "premium";

  return (
    <div
      className={cn(
        "w-[300px] p-6 rounded-[24px] shadow-lg",
        isPremium
          ? "bg-gradient-to-b from-[#2C3ACF] via-[#1E2B8F] to-[#0A1145]"
          : "bg-gradient-to-b from-[#2C2C2C] via-[#1E1E1E] to-[#0A0A0A]",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <h3
          className={cn(
            "text-lg",
            isPremium ? "text-blue-400" : "text-zinc-400"
          )}
        >
          {isPremium ? "Premium News" : "Standard News"}
        </h3>
        {isPremium && (
          <span className="font-medium inline-flex items-center bg-black/20 border border-white/10 px-3 py-0.5 rounded-full text-white text-xs">
            Popular
          </span>
        )}
      </div>

      <p className="mt-3 text-sm text-white">
        {isPremium
          ? "Full access to premium articles and exclusive content"
          : "Access to daily news and basic features"}
      </p>

      <p className="mt-4 text-[28px] font-light text-white">
        ${isPremium ? "12.99" : "4.99"}
        <span className="text-sm text-zinc-400">/month</span>
      </p>

      <div className="mt-8">
        <button
          type="button"
          className={cn(
            "w-full py-3 px-4 font-medium rounded-full transition duration-200",
            isPremium
              ? "bg-white hover:bg-white/90 text-black"
              : "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700"
          )}
        >
          Subscribe now
        </button>
      </div>
    </div>
  );
}
