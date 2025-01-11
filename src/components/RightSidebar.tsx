const RightSidebar = () => {
  return (
    <div className="hidden lg:block w-80 p-4 overflow-y-auto">
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
        <h2 className="text-lg sm:text-xl font-semibold leading-snug mb-4">
          News
        </h2>
        {[1, 2].map((item) => (
          <div key={item} className="mb-4">
            <div className="font-bold text-base sm:text-lg">News {item}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Focus on rhythm and timing
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;
