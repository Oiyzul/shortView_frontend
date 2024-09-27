import Menu from "@/components/Menu";
import Image from "next/image";

const data = {
  title: "title",
  desc: "description",
  img: "",
  user: {
    image: "",
    name: "name",
  },
};

const SinglePage = () => {
  return (
    <div>
      <div className="">
        <div className="flex items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-12">
              {data?.title}
            </h1>
            <div className="flex items-center gap-5">
              {data?.user?.image && (
                <div className="w-[50px] h-[50px] relative">
                  <Image
                    src={data.user.image}
                    alt=""
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col gap-1">
                <span className="text-xl font-medium">{data?.user.name}</span>
                <span className="text-gray-700">01.01.2024</span>
              </div>
            </div>
          </div>
          {data?.img && (
            <div className="flex-1 h-[350px] relative">
              <Image src={data.img} alt="" fill className="object-cover" />
            </div>
          )}
        </div>
        <div className="flex gap-12">
          <div className="flex-[5]mt-12">
            <div
              className="text-xl font-light mb-5"
              dangerouslySetInnerHTML={{ __html: data?.desc }}
            />
            <div className="">{/* <Comments postSlug={slug}/> */}</div>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
