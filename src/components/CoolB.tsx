import React from "react";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";

// Define button variants using cva
const buttonVariants = cva(
  "group relative cursor-pointer overflow-hidden rounded-full border transition-all duration-300 text-center font-semibold",
  {
    variants: {
      variant: {
        default: "bg-white text-black border-gray-300",
        primary: "bg-blue-500 text-white border-blue-500",
        secondary: "bg-green-500 text-white border-green-500",
        danger: "bg-red-500 text-white border-red-500",
      },
      size: {
        sm: "w-24 p-2 text-sm",
        md: "w-32 p-3 text-base",
        lg: "w-40 p-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonVariants> {
  text?: string; // Button text
  icon?: React.ComponentType<{ className?: string }>; // Custom icon component
}

export function CoolB({
  text = "Button",
  icon: Icon = ArrowRight,
  variant,
  size,
  className,
  ...props
}: InteractiveHoverButtonProps) {
  return (
    <div
      {...props}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {/* Static Text */}
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>

      {/* Hover Text + Icon */}
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        {Icon && <Icon className="w-5 h-5" />}
      </div>

      {/* Background Animation */}
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-black transition-all duration-300 group-hover:left-0 group-hover:top-0 group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-fuchsia-500 dark:group-hover:bg-fuchsia-700"></div>
    </div>
  );
}
