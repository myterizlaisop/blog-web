import Link from "next/link";
import { BlogCard } from "./blog-card";

const Allblog = async () => {
  const response = await fetch(
    "https://next-mock-api.vercel.app/api/posts?size=9"
  );
  const data = await response.json();
  return (
    <section className="container">
      <div>
        <div className="w-[1216px]  mb-[25px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <Link href={`/blog/${item.id}`} key={item.id}>
              <BlogCard post={item} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Allblog;
