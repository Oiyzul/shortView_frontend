import Card from "./Card";
import Pagination from "./Pagination";

type PropsType = {
  page: number;
  cat?: string;
};

const CardList = async ({ page, cat = "" }: PropsType) => {
  const count = 10;
  const POST_PER_PAGE = 2;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div>
      <div className="col-span-5">
        <h1 className="my-12">Recent Posts</h1>
        <div className="">
          {posts?.map((item) => (
            <Card item={item} key={item._id} />
          ))}
        </div>
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
      </div>
    </div>
  );
};

export default CardList;

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
