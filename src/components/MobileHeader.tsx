import { FC } from "react";
import { User } from "lucide-react";

interface MobileHeaderProps {
  onProfileClick: () => void;
}

const MobileHeader: FC<MobileHeaderProps> = ({ onProfileClick }) => {
  return (
    <header className="md:hidden flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
      <button onClick={onProfileClick}>
        <User className="h-6 w-6" />
      </button>
      <img
        src="/logo.webp"
        alt="Company Logo"
        className="size-16 mt-2 mx-auto"
      />
      <div className="w-6"></div> {/* Placeholder for balance */}
    </header>
  );
};

export default MobileHeader;
