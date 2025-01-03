import { cva } from "class-variance-authority";
import { cn } from "../utils/utils";

type buttonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
  children: React.ReactNode;
};

export default function Button({
  className,
  variant,
  children,
  ...props
}: buttonProps) {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants({ variant }),
        className,
        "relative group overflow-hidden"
      )}
    >
      <div className="inline-flex h-12 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
        {children}
      </div>
      <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
        <span className="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-blue-500 transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
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
        primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
        secondary:
          "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);
