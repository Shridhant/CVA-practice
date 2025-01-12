import { Music, Image, Paperclip, MessageCircle, Heart } from "lucide-react";
import { useState } from "react";

const MainContent = () => {
  const [text, setText] = useState<string>("");
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <main className="flex-grow border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
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
        {[1].map((entry) => (
          <div
            key={entry}
            className="border-b border-gray-200 dark:border-gray-700 py-4"
          >
            <div className="flex items-start mb-2">
              <img
                src={`https://i.waifu.pics/HNEg0-Q.png`}
                alt="User Avatar"
                className="size-6 rounded-full mr-3"
              />
              <div>
                <span className="font-bold mr-2">Shridhant</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  @Shridhant
                </span>
              </div>
            </div>
            <p className="mb-2 text-base sm:text-lg leading-relaxed">
              Practiced Chopin's Nocturne in E-flat major for an hour today.
              Focusing on the left-hand arpeggios and overall dynamics.
            </p>

            <div className="flex justify-around text-sm text-gray-600 dark:text-gray-400">
              <button className="hover:text-blue-500 flex items-center">
                <MessageCircle className="h-4 w-4 mr-1" /> Comment
              </button>

              <button className="hover:text-red-500 flex items-center">
                <Heart className="h-4 w-4 mr-1" /> Appreciate
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
