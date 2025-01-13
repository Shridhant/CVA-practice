import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XIcon } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  subject: string;
  content: string;
}

interface MorphingDialogProps {
  news: NewsItem;
}

export function Dialog({ news }: MorphingDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.div
        layout
        onClick={toggleDialog}
        className="w-full cursor-pointer group"
      >
        <motion.div layout className="mb-4">
          <motion.h2
            layout
            className="font-bold text-base sm:text-lg text-gray-600 mt-2 group-hover:text-violet-500 group-hover:translate-x-2 duration-200 ease-in transition-all"
          >
            {news.title}
          </motion.h2>

          <motion.p layout className="text-sm text-gray-600 dark:text-gray-400">
            {news.subject}
          </motion.p>
        </motion.div>
      </motion.div>
      <hr />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={toggleDialog}
          >
            <motion.div
              layout
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-2xl bg-white rounded-xl shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-[80vh] overflow-y-auto">
                {/* Sticky Header */}
                <div className="sticky top-0 bg-violet-200 z-10">
                  <div className="p-6 flex items-center justify-between border-b border-gray-200">
                    <motion.h2
                      layout
                      className="text-2xl font-bold text-black text-center mx-auto"
                    >
                      {news.title}
                    </motion.h2>
                    <button
                      onClick={toggleDialog}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full p-1"
                    >
                      <XIcon className="h-6 w-6" />
                      <span className="sr-only">Close</span>
                    </button>
                  </div>
                </div>

                {/* Scrollable Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-6 text-black space-y-4"
                >
                  {news.content.split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
