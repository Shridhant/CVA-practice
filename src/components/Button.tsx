import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: React.ReactNode;
    bgColor?: string;
  };

export default function Button({
  className,
  variant = "primary",
  children,
  bgColor = "bg-blue-600",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants({ variant }),
        className,
        "relative group overflow-hidden "
      )}
    >
      <div className="inline-flex h-10 items-center justify-center px-6 text-white transition-all duration-500 group-hover:-translate-y-[150%]">
        {children}
      </div>

      <div className="absolute inline-flex h-10 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
        <span
          className={cn(
            "absolute h-full w-full translate-y-full skew-y-10 scale-y-0 transition duration-500 group-hover:translate-y-0 group-hover:scale-150",
            bgColor
          )}
        ></span>
        <span className="z-10">{children}</span>
      </div>
    </button>
  );
}

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-blue-400 text-white focus:ring-blue-500",
        secondary: "bg-gray-500 text-white focus:ring-gray-500",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
