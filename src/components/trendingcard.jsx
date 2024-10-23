import Image from "next/image";


const TrendingCard =  () => {

  return (
    <div className="bg-white w-[293px] h-[320px]  relative">
      <Image
        src="/card.png"
        width={293}
        height={0}
        className="absolute h-[320px] rounded-xl"
      />
      <div className="absolute bg-black/30 w-full h-full rounded-xl">
        <p className="bg-[#4B6BFB] w-[120px] text-[#fff] h-[30px] items-center flex justify-center rounded-xl mt-[170px] ml-[20px]">
          Technology
        </p>
        <p className="font-[600] text-[15px] w-[230px] text-[#fff] h-[80px] mt-[20px]  ml-[20px]">
          The Impact of Technology on the Workplace: How Technology is Changing
        </p>
      </div>
    </div>
  );
};

export default TrendingCard;
