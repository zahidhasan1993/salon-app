import Banner from "./components/Banner";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import img1 from "./assets/category-images/1.jpg"
import img2 from "./assets/category-images/2.jpg"
import img3 from "./assets/category-images/3.jpg"
import img4 from "./assets/category-images/4.jpg"
import img5 from "./assets/category-images/5.jpg"


const App = () => {
  const categoryItems = [
    {
      name: "SKIN",
      img : img1
    },
    {
      name: "HAIR",
      img : img2
    },
    {
      name: "MAKEUP",
      img : img3
    },
    {
      name: "TIPS",
      img : img4
    },
    {
      name: "SPA",
      img : img5
    },
  ]
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <Category></Category>
      
    </div>
  );
};

export default App;