import { ArrowUpRight } from "lucide-react";

interface NewsCardProps {
  type: "bullish" | "bearish";
  date: string;
  headline: string;
}

export default function News({ type, date, headline }: NewsCardProps) {
  return (
    <div className="relative overflow-hidden w-full max-w-md sm:max-w-lg md:max-w-lg lg:max-w-xl aspect-[1.2] rounded-2xl border-4 border-gradient-to-r from-black to-emerald-500 group">
      {/* Background Image */}
      <img
        src={type === "bullish" ? "/gray.jpg" : "/bg.jpg"}
        alt="img"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 h-full flex flex-col p-6 sm:p-8 md:p-10 items-start justify-center space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between w-full">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl font-medium text-white">
              Today's News
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              The market is <span className="font-semibold">{type}</span> today
            </p>
          </div>

          {type === "bullish" && (
            <ArrowUpRight
              className="text-gray-400 transition-transform duration-300 ease-in-out transform group-hover:scale-125 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1"
              size={24}
            />
          )}
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
          {headline}
        </h1>

        {/* Date & Progress Bar */}
        <div className="w-full">
          <p className="text-gray-400 text-sm sm:text-base">{date}</p>
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-2">
            <div
              className={`h-full w-1/4 ${
                type === "bullish" ? "bg-emerald-500" : "bg-red-500"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
