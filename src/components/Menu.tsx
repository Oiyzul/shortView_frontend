import MenuCategories from "./MenuCategories";
import MenuPosts from "./MenuPosts";

const Menu = () => {
  return (
    <div className="col-span-2 mt-14">
      <h2 className="text-gray-500 font-[400]">{"What's hot"}</h2>
      <h1 className="text-3xl">Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className="text-gray-500 font-[400]">Discover by topic</h2>
      <h1 className="text-3xl">Categories</h1>
      <MenuCategories />
      <h2 className="text-gray-500 font-[400]">Chosen by the editor</h2>
      <h1 className="text-3xl">Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
