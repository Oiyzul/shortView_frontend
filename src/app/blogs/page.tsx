import BlogList from "@/components/BlogList";
import Menu from "@/components/Menu";

const BlogPage = () => {
  const category = "blog",
    page = 1;
  return (
    <div>
      <div className="">
        <h1 className="text-white py-1 px-2.5 text-center capitalize bg-[rgb(255,127,80)]">
          {category} Blog
        </h1>
        <div className="flex gap-12">
          <BlogList page={page} category={category} />
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
