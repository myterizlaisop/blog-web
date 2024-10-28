import Footer from "@/components/footer";
import Image from "next/image";

const { default: Header } = require("@/components/header");

const AllItem = () => {
  return (
    <>
      <Header />
      <div className="w-[800px] mx-auto mt-[120px] mb-[60px]">
        <div className="text-[36px] font-bold">
          <p>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </p>
        </div>
        <div className="flex pt-[16px]">
          <Image src="/image (6).png" width={28} height={28} />
          <p className="ml-[15px] mr-[25px] text-[#696A75]">Tracey Wilson</p>
          <p className="text-[#696A75]">August 20, 2022</p>
        </div>
        <div className="mt-[26px] mb-[26px]">
          <Image src="/image (7).png" width={800} height={462} />
        </div>
        <div>
          <div className="mb-[20px]">
            <p className="text-[20px]">
              Traveling is an enriching experience that opens up new horizons,
              exposes us to different cultures, and creates memories that last a
              lifetime. However, traveling can also be stressful and
              overwhelming, especially if you don't plan and prepare adequately.
              In this blog article, we'll explore tips and tricks for a
              memorable journey and how to make the most of your travels.
            </p>
          </div>
          <div>
            <p className="text-[20px]">
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[24px] font-bold mb-[25px] mt-[25px]">
            Research Your Destination
          </p>
        </div>
        <div>
          <div className="mb-[20px]">
            <p className="text-[20px]">
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
            </p>
          </div>
          <div>
            <p className="text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[24px] mb-[20px] mt-[20px] font-bold">
            Plan Your Itinerary
          </p>
        </div>
        <div>
          <div className="mb-[20px]">
            <p className="text-[20px]">
              Traveling is an enriching experience that opens up new horizons,
              exposes us to different cultures, and creates memories that last a
              lifetime. However, traveling can also be stressful and
              overwhelming, especially if you don't plan and prepare adequately.
              In this blog article, we'll explore tips and tricks for a
              memorable journey and how to make the most of your travels.
            </p>
          </div>
          <div>
            <p className="text-[20px]">
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AllItem;
