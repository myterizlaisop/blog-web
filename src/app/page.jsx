
import { Blogs } from "@/components/card";
import { Carousels1 } from "@/components/carousel1";
import TrendingCard from "@/components/trendingcard";

export default function Home() {
  return (
    <>
      <section className="container">
        <Carousels1/>
        <h2 className="font-bold text-[20px] flex justify-start w-[1216px] mt-[64px] mb-[20px]">
          Trending
        </h2>
        <div className="grid grid-cols-4 gap-5">
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
          <TrendingCard />
        </div>
      </section>

      <Blogs />

      <div className="flex justify-center ">
        <button className="bg-[#fff] h-[48px] w-[123px] flex justify-center items-center border-2 border-[#E8E8EA] mb-[40px] mt-[20px] rounded-xl">
          Load More...
        </button>
      </div>
    </>
  );
}
