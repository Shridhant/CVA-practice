import { FC } from "react";
import { Home, Music, User, LogOut } from "lucide-react";

interface LeftSidebarProps {
  onProfileClick: () => void;
}

const LeftSidebar: FC<LeftSidebarProps> = ({ onProfileClick }) => {
  return (
    <div className="hidden md:flex w-20 xl:w-64 h-screen flex-col justify-between border-r border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <nav>
          {[
            { icon: Home, text: "Home" },
            { icon: Music, text: "My Entries" },

            { icon: User, text: "Profile" },
            { icon: LogOut, text: "Logout" },
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center mb-6 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full p-3 transition duration-200"
            >
              <item.icon className="size-6 mr-4" />
              <span className="text-base sm:text-lg hidden xl:inline">
                {item.text}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default LeftSidebar;
