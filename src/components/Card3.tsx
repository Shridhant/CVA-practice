import React from "react";
import { Card } from "../components/Card";
import {
  MoreHorizontal,
  LightbulbIcon,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

const InsightCard = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px] bg-slate-800 p-8">
      <Card className="relative max-w-md h-[400px] overflow-hidden rounded-3xl bg-black/90">
        {/* Gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/40 via-yellow-500/20 to-transparent" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/30 rounded-full mix-blend-screen filter blur-3xl" />
          <div className="absolute -top-24 -left-8 w-72 h-72 bg-yellow-200/20 rounded-full mix-blend-screen filter blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative h-full p-6 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-20">
            <div className="flex items-center gap-2">
              <div className=" rounded-lg p-1.5">
                <LightbulbIcon size={18} className="text-black" />
              </div>
              <span className="text-white text-lg font-medium">Insight</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-white/80 px-3 py-1 rounded-full border border-white/20 text-sm">
                This Week
              </button>
              <button className="text-white/80 p-1.5 hover:bg-white/10 rounded-full">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-start gap-1">
              <span className="text-6xl font-semibold text-white">89%</span>
              <ArrowUpRight className="text-emerald-400 mt-2" size={24} />
            </div>
            <p className="text-lg text-white mt-4">
              increase in your revenue{" "}
              <span className="text-white/60">
                by end of this month is forecasted.
              </span>
            </p>
            <p className="text-sm text-white/60 mt-4">
              Harver is about to recieve 15K new customers which results in 78%
              increase in revenue.
            </p>
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-between items-center mt-4">
            <button className="p-2 hover:bg-white/10 rounded-full">
              <ChevronLeft className="text-white/80" size={24} />
            </button>
            <div className="flex gap-1">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full ${
                    i === 1 ? "w-6 bg-white" : "w-4 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button className="p-2 hover:bg-white/10 rounded-full">
              <ChevronRight className="text-white/80" size={24} />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InsightCard;
