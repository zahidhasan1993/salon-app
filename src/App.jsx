import Banner from "./components/Banner";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import img1 from "./assets/category-images/1.jpg";
import img2 from "./assets/category-images/2.jpg";
import img3 from "./assets/category-images/3.jpg";
import img4 from "./assets/category-images/4.jpg";
import img5 from "./assets/category-images/5.jpg";
import popularImg1 from "./assets/blog-image/2.jpg";
import popularImg2 from "./assets/blog-image/3.jpg";
import SectionTitle from "./components/shared/SectionTitle";
import PostCard from "./components/shared/PostCard";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaConfluence } from "react-icons/fa";
import TopAuthor from "./components/TopAuthor";

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
  const [latest, setLatest] = useState([]);
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch("latest.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setLatest(data);
      });
  }, []);
  useEffect(() => {
    fetch("popular.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPopular(data);
      });
  }, []);

  console.log(latest);
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
      {/* latest post section */}
      <div className="container mx-auto">
        <div className="container mx-auto md:grid md:grid-cols-3 gap-10 mb-40">
          {latest.map((item) => (
            <div key={item.id}>
              <div>
                <div className="relative w-full">
                  <LazyLoadImage
                    src={item.img}
                    alt="Image"
                    className="w-full h-72 rounded"
                  />
                  {/* adding black gradient on top of image*/}
                  <div className="absolute top-48 left-12 w-4/5 bg-white p-8 text-center border border-black">
                    <p className="text-gray-700 my-3 text-center underline">
                      {item.category}
                    </p>
                    <p className="text-2xl mb-5">{item.title}</p>
                    <p className="text-gray-700">
                      by {item.author_name} - {item.date}
                    </p>
                  </div>
                  {/* adding text on top of image */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto">
        <PostCard></PostCard>
      </div>
      {/* download section */}
      <div className="mt-60 mb-20 relative container mx-auto">
        <LazyLoadImage src={img2} className="h-32 w-full object-cover " />
        {/* adding black gradient on top of image*/}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-full text-white px-8 py-5 flex justify-between items-center">
          <div className="">
            <div className="flex items-center gap-2 pb-2">
              <FaConfluence className="font-bold text-xl"></FaConfluence>
              <p className="font-bold text-2xl">PostX</p>
            </div>
            <p className="font-bold text-5xl font-new ">
              #1 Gutenberg Post Blocks
            </p>
          </div>
          <button className="py-2 px-10 bg-white text-black rounded-3xl hover:bg-black hover:text-white hover:scale-125 duration-300 ease-in">
            Download Now
          </button>
        </div>
      </div>
      <SectionTitle title="Popular Post"></SectionTitle>
      {/* popular posts */}
      <div className="container mx-auto">
        <div className="container mx-auto md:grid md:grid-cols-3 gap-10 mb-40">
          {popular.map((item) => (
            <div key={item.id}>
              <div>
                <div className="relative w-full">
                  <LazyLoadImage
                    src={item.img}
                    alt="Image"
                    className="w-full h-72 rounded"
                  />
                  {/* adding black gradient on top of image*/}
                  <div className="absolute top-48 left-12 w-4/5 bg-white p-8 text-center border border-black">
                    <p className="text-gray-700 my-3 text-center underline">
                      {item.category}
                    </p>
                    <p className="text-2xl mb-5">{item.title}</p>
                    <p className="text-gray-700">
                      by {item.author_name} - {item.date}
                    </p>
                  </div>
                  {/* adding text on top of image */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-10">
          <div className="relative w-full mb-40">
            <LazyLoadImage
              src={popularImg2}
              alt="Image"
              className="w-full h-96 rounded"
            />

            <div className="absolute top-72 left-20 w-4/5 bg-white p-8 text-center border border-black">
              <p className="text-gray-700 my-3 text-center underline">SKIN</p>
              <p className="text-2xl mb-5">
                Vivamus placerat Luctus Neque nec Faucibus Vivamus ultricies
                arcu Vivamus
              </p>
              <p className="text-gray-700">By Sarfraz Jasim - 29 july 2023</p>
            </div>
          </div>
          <div className="relative w-full mb-40">
            <LazyLoadImage
              src={popularImg1}
              alt="Image"
              className="w-full h-96 rounded"
            />

            <div className="absolute top-72 left-20 w-4/5 bg-white p-8 text-center border border-black">
              <p className="text-gray-700 my-3 text-center underline">Tips</p>
              <p className="text-2xl mb-5">Vivamus placerat Luctus Neque nec Faucibus Vivamus ultricies arcu Vivamus</p>
              <p className="text-gray-700">By Sarfraz Jasim - 25 sep 2023</p>
            </div>
          </div>
        </div>
      </div>
      {/* top author details section */}
      <TopAuthor></TopAuthor>
    </div>
  );
};

export default App;
