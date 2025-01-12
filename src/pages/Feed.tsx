import { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import MainContent from "../components/MainContent";
import RightSidebar from "../components/RightSidebar";
import ProfileMenu from "../components/ProfileMenu";
import MobileHeader from "../components/MobileHeader";

export default function Feed() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white text-black font-sans">
      <LeftSidebar onProfileClick={() => setIsProfileMenuOpen(true)} />
      <div className="flex-grow flex flex-col">
        <MobileHeader onProfileClick={() => setIsProfileMenuOpen(true)} />
        <div className="flex flex-grow">
          <MainContent />
          <RightSidebar />
        </div>
      </div>
      <ProfileMenu
        isOpen={isProfileMenuOpen}
        onClose={() => setIsProfileMenuOpen(false)}
      />
    </div>
  );
}
