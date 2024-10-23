
import Card from "./card";


const Allblog = async ()=> {
      const response = await fetch(
        "https://next-mock-api.vercel.app/api/posts?size=9"
      );
      const data = await response.json();
    return (
      <>
        <div>
          <div>
            <p className="font-bold text-[24px] mt-[100px]">All Blog Post</p>
          </div>
          <div className=" flex gap-5 pt-[25px] pb-[25px]">
            <p className="text-[16px] text-[#D4A373]">All</p>
            <p className="text-[16px]">Design</p>
            <p className="text-[16px]">Travel</p>
            <p className="text-[16px]">Fashion</p>
            <p className="text-[16px]">Technology</p>
            <p className="text-[16px]">Branding</p>
          </div>
         
          <div className="w-[1216px]  mb-[25px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.items.map((item) => (
              <div key={item.id}>
                <Card post={item} />
              </div>
            ))}
          </div>
        </div>
      </>
    );

}
export default Allblog;
