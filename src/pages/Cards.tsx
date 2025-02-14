import NewsCard2 from "../components/NewsCard2";
import NewsCard from "../components/NewsCard";
import News from "../components/News";
import SpotlightCard from "../components/SpotlightCard";

function Cards() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-400">Subscription</span>
          <h2 className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
            Choose your news plan
            <span className="block text-zinc-400">
              stay informed, stay ahead
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <NewsCard2 variant="standard" />
          <NewsCard2 variant="premium" />
          <NewsCard />
          <News
            type="bullish"
            date="December 5, 2024"
            headline="Hong Kong Expands Cryptocurrency Market with New Exchange Approvals."
          />
          <News
            type="bearish"
            date="December 19, 2024"
            headline="Solana Price Faces Potential Dip Below $200 After Federal Reserve Cut."
          />
          import SpotlightCard from './SpotlightCard';
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            As basic as it can get.
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
}

export default Cards;
