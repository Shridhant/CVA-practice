export default function NewsCard() {
  return (
    <div className="w-[300px] p-6 rounded-[24px] bg-gradient-to-b from-[#050a2c] via-[#2637b6] to-[#636ceb9c] shadow-xl">
      <div className="flex items-center gap-3">
        <h3 className="text-lg text-blue-400">Almost pro</h3>
        <span className="font-medium inline-flex items-center bg-black/20 border border-white/10 px-3 py-0.5 rounded-full text-white text-xs">
          Popular
        </span>
      </div>

      <p className="mt-3 text-sm text-white">
        50% off for the 3 first clients!
      </p>

      <p className="mt-4 text-[28px] font-light text-white">
        $1,999<span className="text-sm text-zinc-400">/month</span>
      </p>

      <div className="mt-8">
        <button
          type="button"
          className="w-full py-3 px-4 bg-white hover:bg-blue-500 text-black font-medium rounded-full transition duration-200"
        >
          Get started
        </button>
      </div>
    </div>
  );
}
