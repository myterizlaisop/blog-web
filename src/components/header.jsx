import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div className="container flex items-center justify-between py-8 mb-[100px]">
      <div>
        <Image className="" src="/Logo.png" alt="" width={158} height={36} />
      </div>
      <div className="flex gap-10">
        <Link href={"/"} className="text-[#3B3C4A] text-[20px] hover:underline">
          Home
        </Link>
        <Link
          href={"/blog"}
          className=" text-[#3B3C4A] text-[20px] hover:underline"
        >
          Blog
        </Link>
        <Link
          href={"/contact"}
          className=" text-[#3B3C4A] text-[20px] hover:underline"
        >
          Contact
        </Link>
      </div>
      {/* <div className="w-[166px] h-[36px] bg-[#F4F4F5] rounded-lg flex justify-around">
          <p className="mt-[4px]">Search</p>
          <div className="flex items-center">
            <Image
              className=""
              src="/search-outline.png"
              alt=""
              width={16}
              height={16}
            />
          </div>
        </div> */}
      <div className="relative flex">
        <div className="">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search"
            className="w-[166px]  pl-4 h-[36px] bg-[#F4F4F5] rounded-lg"
          />
        </div>
        <div className="absolute right-3 top-3">
          <Image
            className=""
            src="/search-outline.png"
            alt=""
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
