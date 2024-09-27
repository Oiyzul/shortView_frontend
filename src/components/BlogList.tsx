import BlogCard from "./BlogCard";
import Pagination from "./Pagination";

type PropsType = {
  page: number;
  category?: string;
};

const getBlogs = async(page:number, category: string) => {
  const res = await fetch(`http://localhost:5000/api/blogs`, {
    method: 'GET'
  })
  const data = await res.json();
  return data.data
}

// const postBlog = async() => {
//   const res = await fetch(`http://localhost:5000/api/blogs`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       title: "New Blog Post",
//       content: "This is a new blog post.",
//       author: "John Doe",
//       param: 'new blog post',
//       designation: "Software Engineer",
//       imgUrl: "string",
//       category: "Technology",
//       user: "615c8491509d1d518e6434a8"
//     }),
//   });
//   console.log(res);
//   return res.data;
// }

const BlogList = async ({ page, category = "" }: PropsType) => {
  const blogs = await getBlogs(page, category)
  // const blog = await postBlog()
  // console.log(blogs)
  const count = 10;
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div>
      <div className="col-span-5">
        <h1 className="my-12">Recent Posts</h1>
        <div className="">
          {blogs?.map((item) => (
            <BlogCard item={item} key={item._id} />
          ))}
        </div>
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
      </div>
    </div>
  );
};

export default BlogList;

const posts = [
  {
    _id: "1",
    title: "My First Post",
    desc: "This is my first blog post.",
    author: "John Doe",
    createdAt: "25-09-2024",
    img: "string",
    slug: "fghfgh",
    catSlug: "string",
  },
];
