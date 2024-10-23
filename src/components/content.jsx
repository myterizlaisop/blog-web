import Image from "next/image";
const Content = () => {
    return (
      <div className=" flex justify-center">
        <div className="relative ">
          <Image
            src="/blog.jpeg"
            width={1216}
            height={0}
            className="h-[600px] rounded-xl"
          />
          <div className="bg-white w-[598px] h-[252px] absolute left-5 bottom-5 rounded-xl">
            <p className="bg-[#4B6BFB] w-[120px] text-[#fff] h-[40px] items-center flex justify-center rounded-xl mt-[40px] ml-[20px]">
              Technology
            </p>
            <p className="font-[600] text-[30px] w-[400px] h-[80px] mt-[20px]  ml-[20px]">
              Grid system for better Design User Interface
            </p>
            <p className="text-[20px] text-[#808080] mt-[20px]  ml-[20px]">
              August 20, 2022
            </p>
          </div>
        </div>
      </div>
    )
};
export default Content;
