import { cva } from "class-variance-authority";
import { cn } from "../utils/utils";

type buttonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
  children: string;
};

export default function Button({ className, variant, ...props }: buttonProps) {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
}

const buttonVariants = cva(
  " py-2 px-4 rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-opacity-50  transition duration-300 ease-in-out",
  {
    variants: {
      variant: {
        primary:
          "py-2 px-4 rounded-xl font-semibold bg-blue-500 text-blue hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50  transition duration-300 ease-in-out ",
        secondary:
          " bg-gray-500 text-white py-2 px-4 rounded-xl font-semibold hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50  transition duration-300 ease-in-out ",
      },
      defaultVariants: { variant: "primary" },
    },
  }
);
