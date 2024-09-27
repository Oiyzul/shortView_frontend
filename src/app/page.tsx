import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

export default function Home({ searchParams }: { searchParams: string }) {
  const page = parseInt(searchParams) || 1;
  
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="grid grid-cols-7">
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
