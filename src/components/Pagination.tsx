"use client";

import { useRouter } from "next/navigation";

type PropsType = {
  page: number;
  hasPrev: boolean;
  hasNext: boolean;
};

const Pagination = ({ page, hasPrev, hasNext }: PropsType) => {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <button
        className="w-[100px] p-4 border-none bg-[rgb(220,20,60)] text-white cursor-pointer"
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className="w-[100px] p-4 border-none bg-[rgb(220,20,60)] disabled:bg-[rgba(220,20,60,0.5)] disabled:cursor-not-allowed text-white cursor-pointer"
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
