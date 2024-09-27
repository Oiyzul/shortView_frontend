import Image from "next/image";

const Featured = async() => {
  const blog = await fetch(`http://localhost:5000/api/blogs`)
   .then((res) => res.json())
   console.log(blog.data[0])
   const {title, content, imgUrl} = blog.data[0]

  return <div className='mt-8'>
  <h1 className='text-3xl md:text-5xl lg:text-7xl '>
    <b>Hey, here!</b> Discover my stories and creative ideas.
  </h1>
  <div className='mt-14 flex items-center gap-12'>
    <div className='hidden md:block flex-1 relative h-[400px] lg:h-[500px]'>
      <Image src={imgUrl} alt="" fill className='object-cover' />
    </div>
    <div className='flex-1 flex flex-col gap-5'>
      <h1 className='text-xl md:2xl lg:text-4xl'>{title}</h1>
      <p className='text-normal md:text-lg lg:text-xl font-light text-gray-900'>
        {content}
      </p>
      <button className='px-5 py-4 rounded-[5px] w-max'>Read More</button>
    </div>
  </div>
</div>
};

export default Featured;
