import Image from "next/image";

const Footer = () => {
    return (
      <div className="w-full bg-[#F6F6F7] ">
        <div className="flex gap-[360px] pt-[70px] justify-center  ">
          <div>
            <p className="font-[bold] text-[24px]">About</p>
            <p className="text-[16px] w-[280px] h-[120px] mb-[24px] mt-[24px] text-[#696A75]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p className="">Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
          <div className="text-[#3B3C4A]">
            <p>Home</p>
            <p className="mb-[10px] mt-[10px]">About</p>
            <p>Contact</p>
          </div>
          <div>
            <Image src="/Socialwrapper.png" width={144} height={16} />
          </div>
        </div>
        <div className="border-y mb-[20px] mt-[20px] w-[1216px] mx-auto"></div>
        <div className="flex gap-[620px] pb-[70px] justify-center">
          <div className="flex ">
            <div>
              <Image src="/Logo (3).png" width={48} height={48} />
            </div>
            <div>
              <Image src="/Text (1).png" width={173} height={54} />
            </div>
          </div>
          <div className="flex gap-[20px]">
            <p className="text-[16px] text-[#3B3C4A] ">Terms of Use</p>
            <div className="border-r h-[28px]"></div>
            <p className="text-[16px] text-[#3B3C4A] ">Privacy Policy</p>
            <div className="border-r h-[28px]"></div>
            <p className="text-[16px] text-[#3B3C4A] ">Cookie Policy</p>
    
          </div>
        </div>
      </div>
    );
  
}
export default Footer;