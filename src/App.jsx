import Banner from "./components/Banner";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import img1 from "./assets/category-images/1.jpg";
import img2 from "./assets/category-images/2.jpg";
import img3 from "./assets/category-images/3.jpg";
import img4 from "./assets/category-images/4.jpg";
import img5 from "./assets/category-images/5.jpg";
import SectionTitle from "./components/shared/SectionTitle";
import PostCard from "./components/shared/PostCard";

const App = () => {
  const categoryItems = [
    {
      id: 1,
      name: "SKIN",
      img: img1,
    },
    {
      id: 2,
      name: "HAIR",
      img: img2,
    },
    {
      id: 3,
      name: "MAKEUP",
      img: img3,
    },
    {
      id: 4,
      name: "TIPS",
      img: img4,
    },
    {
      id: 5,
      name: "SPA",
      img: img5,
    },
  ];
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="container mx-auto grid grid-cols-1 gap-5 md:grid md:grid-cols-5 md:gap-8 mt-12 w-full">
        {categoryItems.map((item) => (
          <Category key={item.id} item={item}></Category>
        ))}
      </div>
      {/* divider to latest post */}
      <SectionTitle title="Latest Post"></SectionTitle>
      <div className="container mx-auto">
        <PostCard></PostCard>
      </div>
    </div>
  );
};

export default App;
