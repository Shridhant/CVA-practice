import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface CoolButtonProps {
  text?: string;
}

export default function CoolButton({ text = "Button" }: CoolButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full transition-all duration-300 ease-in-out ${
          isHovered ? "pr-10" : "pr-4"
        }`}
      >
        <div
          className={`w-full h-full bg-blue-700 rounded-full absolute left-0 top-0 transition-all duration-300 ease-in-out ${
            isHovered ? "scale-100" : "scale-0"
          }`}
        ></div>

        <p
          className={`text-sm font-medium relative z-10 transition-colors duration-300 ${
            isHovered ? "text-white" : "text-black"
          } ${text.length > 10 ? "max-w-[120px] truncate" : ""}`}
        >
          {text}
        </p>

        <ArrowUpRight
          className={`w-5 h-5 absolute right-3 z-10 transition-all duration-300 ${
            isHovered
              ? "opacity-100 translate-x-0 text-white"
              : "opacity-0 -translate-x-2 text-gray-700"
          }`}
        />
      </div>
    </button>
  );
}
