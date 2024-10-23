import Footer from "./footer";

const { default: Allblog } = require("./allblog");
const { default: Allblogplus } = require("./allblogplus");
const { default: Content } = require("./content");
const { default: Header } = require("./header");
const { default: Middle } = require("./middle");
const { default: TrendingCard } = require("./trendingcard");

const Allitem = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <div className="mb-[64px] pt-[32px] ">
          <Header />
        </div>

        <Content />
        <Middle />
        <p className="font-bold text-[20px] flex justify-start w-[1216px] mt-[64px] mb-[20px] ">
          Trending
        </p>
        <div className="flex gap-[64px] w-[1216px]">
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
        </div>
        <Allblog />
    
      </div>
      <div className="flex justify-center ">
        <button className="bg-[#fff] h-[48px] w-[123px] flex justify-center items-center border-2 border-[#E8E8EA] mb-[40px] mt-[20px] rounded-xl">
          Load More...
        </button>
      </div>
      <Footer />
    </>
  );
};
export default Allitem;
