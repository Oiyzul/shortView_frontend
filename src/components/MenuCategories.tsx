import Link from "next/link";

const MenuCategories = () => {
  return <div>
    <div className='m-9 mb-12 flex flex-wrap gap-5 text-sm'>
      <Link
        href="/blog?cat=style"
        className='py-2 px-6 bg-[#57c4ff31]'
      >
        Style
      </Link>
      <Link href="/blog" className='py-2 px-6 bg-[#da85c731]'>
        Fashion
      </Link>
      <Link href="/blog" className='py-2 px-6 bg-[#7fb88133]'>
        Food
      </Link>
      <Link href="/blog" className='py-2 px-6 bg-[#ff795736]'>
        Travel
      </Link>
      <Link href="/blog" className='py-2 px-6 bg-[#ffb04f45'>
        Culture
      </Link>
      <Link href="/blog" className='py-2 px-6 bg-[#5e4fff31]'>
        Coding
      </Link>
    </div>
  </div>;
};

export default MenuCategories;
