import { Music, Image, Paperclip, MessageCircle, Heart } from "lucide-react";
import { useState } from "react";
import Journal from "./Journal";

const MainContent = () => {
  const [text, setText] = useState<string>("");
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <main className="flex-grow border-r border-gray-200 overflow-y-auto">
      <img
        src="/logo.webp"
        alt="Company Logo"
        className="size-16 hidden md:block mt-2 mx-auto"
      />
      <div className="p-4">
        <div className="bg-gray-100 border border-blue-400 p-4 rounded-lg mb-4">
          <textarea
            className="w-full border rounded-lg p-3 border-gray-300 text-black placeholder-gray-500 text-base sm:text-lg leading-relaxed focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="What did you practice today?"
            rows={3}
            value={text}
            onChange={handleTextChange}
            disabled={false}
          ></textarea>

          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-4">
              <button className="text-gray-500 hover:text-blue-500">
                <Music className="h-6 w-6" />
              </button>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-200 text-sm sm:text-base">
              Post Entry
            </button>
          </div>
        </div>
        {/* Sample journal entries */}
        <Journal />
      </div>
    </main>
  );
};

export default MainContent;
