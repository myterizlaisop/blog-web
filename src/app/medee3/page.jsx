import Footer from "@/components/footer";
import Image from "next/image";

const { default: Header } = require("@/components/header");

const AllItem = () => {
  return (
    <>
      <Header />
      <div className="w-[619px] mx-auto mb-[100px] mt-[100px]">
        <div>
          <p className="text-[28px] font-bold">Contact Us</p>
          <p className="text-[16px] text-[#696A75] mt-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="pt-[40px] pb-[40px] flex gap-12">
          <div className="w-[294px] h-[133px] border rounded-xl">
            <p className="font-bold text-[20px] ml-[15px] mt-[15px]">Address</p>
            <p className="text-[#696A75]  ml-[15px] mt-[15px] ">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="w-[294px] h-[133px] border rounded-xl">
            <p className="font-bold text-[20px] ml-[15px] mt-[15px]">Contact</p>
            <div className="w-[160px] h-[52px]">
              <p className="text-[#696A75]  ml-[15px] mt-[15px] ">
                313-332-8662 info@email.com
              </p>
            </div>
          </div>
        </div>
        <div className="w-[643px] h-[440px] bg-[#F6F6F7]">
          <div className="w-[478px] h-[385px] ml-[50px] pt-[20px]">
            <p className="mb-[20px] font-bold">Leave a Message</p>
            <div className="flex justify-between">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your Name"
                className="border w-[225px] h-[38px] pl-4"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="border  w-[225px] h-[38px] pl-4"
              />
            </div>
            <div className="mt-[30px] mb-[30px]">
              <input
                type="text"
                name=""
                id=""
                placeholder="Subject"
                className="border w-full h-[35px] pl-4"
              />
            </div>
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Write a message"
                className="border w-full h-[134px] pl-4 pb-[80px]"
              />
            </div>
            <div className="w-[130px] h-[40px] rounded-lg bg-[#4B6BFB] flex justify-center mt-[30px]">
              <button className="text-[#fff]">Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AllItem;
