import Image from "next/image";
import Link from "next/link";

const MenuPosts = ({ withImage }: { withImage: boolean }) => {
  return (
    <div className="mt-9 mb-12 flex flex-col gap-9">
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="flex-[1] aspect-square relative">
            <Image src="/p1.jpeg" alt="" fill className="rounded-full border-gray-50 object-cover" />
          </div>
        )}
        <div className="flex-[4] flex flex-col gap-1">
          <span className="px-2 py-1 rounded-[10px] text-xs text-white w-max bg-[#ff7857]">Travel</span>
          <h3 className="text-lg font-medium text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-xs">
            <span className="">John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="">
        {withImage && (
          <div className="">
            {/* <Image src="/p1.jpeg" alt="" fill className="" /> */}
          </div>
        )}
        <div className="">
          <span className='bg-[#ffb14f]'>Culture</span>
          <h3 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="">
            <span className="">John Doe</span>
            <span className=""> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="">
        {withImage && (
          <div className="">
            {/* <Image src="/p1.jpeg" alt="" fill className="" /> */}
          </div>
        )}
        <div className="">
          <span className='bg-[#7fb881]'>Food</span>
          <h3 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="">
            <span className="">John Doe</span>
            <span className=""> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="">
        {withImage && (
          <div className="">
            {/* <Image src="/p1.jpeg" alt="" fill className="" /> */}
          </div>
        )}
        <div className="">
          <span className="bg-[#ff7887]">Fashion</span>
          <h3 className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="">
            <span className="">John Doe</span>
            <span className=""> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
