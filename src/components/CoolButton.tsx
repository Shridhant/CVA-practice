import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";

interface CoolButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  text?: string;
}

export default function CoolButton({
  text = "Button",
  variant = "default",
  className,
  ...props
}: CoolButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      {...props}
      className={cn(
        buttonVariants({ variant }),
        className,
        "relative overflow-hidden group rounded-full px-3 py-2 flex items-center justify-center"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Animation */}
      <div
        className={cn(
          "absolute left-0 top-0 h-full w-full rounded-full bg-blue-700 transition-transform duration-300",
          isHovered ? "scale-100" : "scale-0"
        )}
      ></div>

      {/* Content Wrapper */}
      <div className="relative text-center z-10 flex items-center justify-center space-x-2">
        {/* Text */}
        <p
          className={cn(
            "text-sm text-center font-medium transition-all duration-300",
            isHovered ? "text-white" : ""
          )}
        >
          {text}
        </p>

        {/* Arrow Icon */}
        <div
          className={cn(
            "transition-all duration-300 overflow-hidden",
            isHovered ? "w-5 opacity-100" : "w-0 opacity-0"
          )}
        >
          <ArrowUpRight className="w-5 h-5 text-white" />
        </div>
      </div>
    </button>
  );
}

// Variants using class-variance-authority
const buttonVariants = cva(
  "inline-flex items-center justify-center border border-gray-300 transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        primary: "bg-white text-blue-500 ",
        secondary: "bg-green-500 text-white ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
