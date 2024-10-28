import Footer from "@/components/footer";

const { default: Header } = require("@/components/header");

const AllItem = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="font-bold text-[72px]">404</div>
        <div className="border-r ml-[40px] mr-[40px]"></div>
      </div>
      <Footer />
    </>
  );
};
export default AllItem;
