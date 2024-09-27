import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

const BlogPage = () => {
  const cat = "blog",
    page = 1;
  return (
    <div>
      <div className="">
        <h1 className="text-white py-1 px-2.5 text-center capitalize bg-[rgb(255,127,80)]">
          {cat} Blog
        </h1>
        <div className="flex gap-12">
          <CardList page={page} cat={cat} />
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
