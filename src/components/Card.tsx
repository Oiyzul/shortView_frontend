import Image from "next/image";
import Link from "next/link";

type PropsType = {
  key: string;
  item: {
    _id: string;
    title: string;
    desc: string;
    author: string;
    createdAt: string;
    imgUrl: string
    slug: string;
    catSlug: string;
  };
};
const Card = ({ key, item }: PropsType) => {
  return (
    <div>
      <div className="mb-12 flex items-center gap-12" key={key}>
        {item.imgUrl && (
          <div className="flex-1 hidden lg:block h-[350px] relative">
            <Image src={item.imgUrl} alt="" fill className="object-cover" />
          </div>
        )}
        <div className="flex-1 flex flex-col gap-7">
          <div className="">
            <span className="text-gray-500">
              {item.createdAt.substring(0, 10)} -{" "}
            </span>
            <span className="">{item.catSlug}</span>
          </div>
          {/* <Link href={`/posts/${item.slug}`}>
            <h1>{item.title}</h1>
          </Link>
          <p className=''>{item.content.substring(0, 60)}</p> */}
          {/* <div
            className="text-lg font-light text-gray-700"
            dangerouslySetInnerHTML={{ __html: item?.content.substring(0, 60) }}
          /> */}
          <Link
            href={`/posts/${item.slug}`}
            className="border-b-[1px] w-max py-0.5"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
