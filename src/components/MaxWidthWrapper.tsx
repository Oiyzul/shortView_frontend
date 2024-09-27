import { cn } from "@/lib/utils";

type PropsType = {
  className?: string;
  children: React.ReactNode;
};

const MaxWidthWrapper = ({ className, children }: PropsType) => {
  return (
    <div className={cn("px-2 md:px-4 lg:px-8 w-full max-w-screen-2xl mx-auto", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
