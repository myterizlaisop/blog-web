import dayjs from "dayjs";
import Image from "next/image";

const Card = async ({post}) => {
    return (
      <div className=" flex  bg-[#FFFFFF] ">
        <div className="flex gap-[13px]">
          <div className="h-[420px] w-[392px] border pl-[16px] pt-[16px] rounded-xl">
            <Image
              alt={post.title}
              src={post.image}
              className="rounded-xl"
              width={360}
              height={240}
            />
            <div className="flex">
              {post.categories.map((category) => (
                <div
                  key={category}
                  className="bg-[#4B6BFB0D] w-[66px] h-[28px] rounded-lg flex justify-center items-center mt-[20px] mb-[20px]"
                >
                  <p className="text-[#4B6BFB] text-[14px] ">{category}</p>
                </div>
              ))}
            </div>
            <div>
              <p className=" text-[24px] font-bold">{post.title}</p>
            </div>
            <div className="flex items-center gap-5 mt-[25px]">
              <div className="flex items-center">
                <Image
                  src={post.authorImage}
                  width={36}
                  height={36}
                  alt={post.authorImage}
                  className="object-cover aspect-square mr-[15px] rounded-full"
                />
                <p className="text-[#97989F]  font-medium">{post.authorName}</p>
              </div>
              <p className="text-[#97989F]">{dayjs(post.createdAt).format("MMMM DD, YYYY")}</p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Card;