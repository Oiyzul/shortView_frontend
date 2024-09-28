import Menu from "@/components/Menu";
import Image from "next/image";

const getData = async (param: string) => {
  const res = await fetch(`http://localhost:5000/api/blogs/${param}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`);
  }

  const data = await res.json();
  return await data.data;
};

const SingleBlogPage = async ({
  params,
}: {
  params: { paramName: string };
}) => {
  const { paramName } = params;

  const data = await getData(paramName);
  if (!data) {
    throw new Error(`No blog post found for param: ${paramName}`);
  }
  const {
    title,
    imgUrl,
    content,
    author,
    designation,
    views,
    likes,
    dislikes,
  } = data;
  // console.log(title, imgUrl, content, author, designation, data);
  return (
    <div>
      <div className="">
        <div className="flex items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-12">{title}</h1>
            <div className="flex items-center gap-5">
              {data?.user?.imgUrl ? (
                <div className="w-[50px] h-[50px] relative">
                  <Image
                    src={data.imgUrl}
                    alt=""
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-[50px] h-[50px] bg-gray-500 rounded-full flex items-center justify-center text-white font-bold text-3xl">
                  {author.substring(0, 1)}
                </div>
              )}
              <div className="flex flex-col gap-1">
                <span className="text-xl font-medium">{author}</span>
                <span>{designation}</span>
                <span className="text-gray-700">01.01.2024</span>
              </div>
            </div>
          </div>
          {imgUrl && (
            <div className="flex-1 h-[350px] relative">
              <Image src={imgUrl} alt="" fill className="object-cover" />
            </div>
          )}
        </div>
        <div className="flex gap-12">
          <div className="flex-[5] mt-12">
            <p>{content}</p>
            <div>
              <span className="text-gray-700 text-xs">
                {views} views | {likes} likes | {dislikes} dislikes
              </span>
            </div>
            {/* <div
              className="text-xl font-light mb-5"
              dangerouslySetInnerHTML={{ __html: data?.desc }}
            /> */}
            <div className="">{/* <Comments postSlug={slug}/> */}</div>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
