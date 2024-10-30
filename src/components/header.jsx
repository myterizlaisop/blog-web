import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-8 mb-24">
      <div className="container flex justify-between">
        <div>
          <Link href="/">
            <Image src="/logo.png" width={158} height={36} alt="/" />
          </Link>
        </div>
        <div>
          <nav>
            <ul className="flex gap-10 text-[#3B3C4A]">
              <li>
                <Link className="hover:underline" href={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href={"/blog"}>
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <form action={"/blog"} className="relative">
            <input
              type="text"
              placeholder="Search"
              name="q"
              className="bg-[#F4F4F5] w-40 h-9 pl-4 pr-9 rounded-md"
            />
            <button className="absolute top-0 right-0 flex items-center justify-center h-9 w-9">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
                  stroke="#52525B"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M10.5715 10.5716L14 14"
                  stroke="#52525B"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};
export default Header;