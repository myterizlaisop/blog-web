import Link from "next/link";
import { BlogCard } from "./blog-card";

export const Blogs = async () => {
  const response = await fetch(
    "https://next-mock-api.vercel.app/api/posts?size=9"
  );
  const data = await response.json();

  const categoriesResponse = await fetch(
    "https://next-mock-api.vercel.app/api/posts/categories"
  );
  const categoriesData = await categoriesResponse.json();

  return (
    <section className="container">
      <h2 className="text-[#181A2A] font-bold text-2xl mt-[100px] mb-7">All Blog Post</h2>
      <div className="flex justify-between mb-8">
        <div className="flex gap-5">
          <Link href={"/blog"} className="text-xs font-bold text-[#D4A373]">
            All
          </Link>
          {categoriesData.map((category, index) => (
            <Link
              key={index}
              href={"/category/" + category}
              className="text-xs font-bold text-[#495057]"
            >
              {category}
            </Link>
          ))}
        </div>
        <div>
          <Link href={"/blog"} className="text-xs font-bold text-[#495057]">
            View All
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((item) => (
          <Link key={item.id} className="block" href={`/blog/${item.id}`}>
            <BlogCard post={item} />
          </Link>
        ))}
      </div>
    </section>
  );
};
