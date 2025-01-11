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
        className={`absolute left-0 top-0 bottom-0 w-64 sm:w-80 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Student Profile</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mb-4">
            <img
              src="https://placekitten.com/100/100"
              alt="Profile"
              className="rounded-full mb-2"
            />
            <div className="font-bold text-xl">Student Name</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              @studentname
            </div>
          </div>
          <div className="flex mb-4">
            <div className="mr-4">
              <span className="font-bold">15</span>{" "}
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Entries
              </span>
            </div>
            <div>
              <span className="font-bold">5</span>{" "}
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Achievements
              </span>
            </div>
          </div>
          <nav>
            {["Home", "My Entries", "Profile", "Logout"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-4 transition duration-200 text-base sm:text-lg"
              >
                {item}
              </a>
            ))}
          </nav>
          <hr className="border-gray-200 dark:border-gray-700 my-4" />
          <button className="text-left w-full py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-4 transition duration-200 text-base sm:text-lg">
            Settings
          </button>
          <button className="text-left w-full py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-4 transition duration-200 text-base sm:text-lg">
            Help Center
          </button>
          <button className="text-left w-full py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-4 transition duration-200 text-base sm:text-lg">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
