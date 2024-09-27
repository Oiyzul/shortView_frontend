const LoginPage = () => {
  return <div>
    <div className='flex items-center justify-center mt-12'>
      <div className='bg-gray-300 p-8 md:px-[100px] md:py-[50px]  lg:px-[200px] lg:py-[150px] flex flex-col gap-12 rounded-md'>
        <div className='p-5 rounded-[5px] border-none font-bold cursor-pointer flex items-center justify-center bg-[#ff5555]'>
          Sign in with Google
        </div>
        <div className='p-5 rounded-[5px] border-none font-bold cursor-pointer flex items-center justify-center bg-[#111]'>Sign in with Github</div>
        <div className='p-5 rounded-[5px] border-none font-bold cursor-pointer flex items-center justify-center bg-[#087bea]'>Sign in with Facebook</div>
      </div>
    </div>
  </div>;
};

export default LoginPage;
