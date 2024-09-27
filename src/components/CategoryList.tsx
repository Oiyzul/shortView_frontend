import Image from "next/image";
import Link from "next/link";

const data = [
  {
    name: "React",
    link: "/react",
    img: "",
  },
  {
    name: "Next.js",
    link: "/react",
    img: "",
  },
  {
    name: "Mongoose",
    link: "/react",
    img: "",
  },
  {
    name: "MongoDB",
    link: "/react",
    img: "",
  },
];
const CategoryList = () => {
  return (
    <div>
      <div className="">
        <h1 className="my-12">Popular Categories</h1>
        <div className="flex flex-wrap justify-between gap-5">
          {data?.map((item) => (
            <Link
              href="/blog?cat=style"
              className="flex items-center gap-3 capitalize w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:[15%] h-20 justify-center rounded-md"
              key={item.name}
            >
              {item.img && (
                <Image
                  src={item.img}
                  alt=""
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
