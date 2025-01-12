import { FC } from "react";
import { X } from "lucide-react";

interface ProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileMenu: FC<ProfileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div
        className={`absolute left-0 top-0 bottom-0 w-64 sm:w-80 bg-gray-200 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <img
              src="/logo.webp"
              alt="Company Logo"
              className="size-14 md:hidden mt-2 mx-auto"
            />
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mb-4">
            <img
              src="https://i.waifu.pics/HNEg0-Q.png"
              alt="Profile"
              className="size-8 rounded-full mb-2"
            />
            <div className="font-bold text-xl">Shridhant</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              @Shri
            </div>
          </div>
          <div className="flex mb-4">
            <div className="mr-4">
              <span className="font-bold">15</span>{" "}
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Entries
              </span>
            </div>
          </div>
          <nav>
            {["Home", "My Entries", "Profile", "Logout"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block py-3 hover:bg-gray-100 hover:translate-x-2 transition-all rounded-lg px-4 duration-200 text-base sm:text-lg"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
