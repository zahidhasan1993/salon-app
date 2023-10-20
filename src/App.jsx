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
import instaImg1 from "./assets/blog-image/instagram-feed/ethan-haddox-NTjSR3zYpsY-unsplash.jpg";
import instaImg2 from "./assets/blog-image/instagram-feed/pascal-brauer-kwiw8pjg9jw-unsplash.jpg";
import instaImg3 from "./assets/blog-image/instagram-feed/wesley-tingey-LpZvsGynEho-unsplash.jpg";
import instaImg4 from "./assets/blog-image/instagram-feed/zulmaury-saavedra-vh_pAs2FH_8-unsplash.jpg";
import randomImg1 from "./assets/blog-image/random-post/1.jpg";
import randomImg2 from "./assets/blog-image/random-post/2.jpg";
import randomImg3 from "./assets/blog-image/random-post/3.jpg";
import randomImg4 from "./assets/blog-image/random-post/4.jpg";
import randomImg5 from "./assets/blog-image/random-post/5.jpg";
import randomImg6 from "./assets/blog-image/random-post/6.jpg";
import SectionTitle from "./components/shared/SectionTitle";
import PostCard from "./components/shared/PostCard";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaConfluence } from "react-icons/fa";
import TopAuthor from "./components/TopAuthor";
import RandomPostCard from "./components/shared/RandomPostCard";
import RandomPostCard2 from "./components/shared/RandomPostCard2";
import SubscribeUs from "./components/SubscribeUs";
import Footer from "./components/Footer";

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
        <div className="container mx-auto md:grid md:grid-cols-3 gap-10 mb-52">
          {latest.map((item) => (
            <div key={item.id}>
              <div>
                <div className="md:relative w-full">
                  <LazyLoadImage
                    src={item.img}
                    alt="Image"
                    className="w-full h-72 rounded"
                  />
                  {/* adding black gradient on top of image*/}
                  <div className="md:absolute md:top-48 md:left-12 w-4/5 bg-white p-8 text-center border border-black">
                    <p className="text-gray-700 my-3 text-center underline">
                      {item.category}
                    </p>
                    <p className="text-4xl mb-5 font-new font-semibold">
                      {item.title}
                    </p>
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
              <FaConfluence className="font-bold md:text-xl"></FaConfluence>
              <p className="font-bold md:text-2xl">PostX</p>
            </div>
            <p className="font-bold md:text-5xl font-new ">
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
      <div className="container mx-auto my-16">
        <div className="container mx-auto md:grid md:grid-cols-3 gap-10 mb-52">
          {popular.map((item) => (
            <div key={item.id}>
              <div>
                <div className="md:relative w-full">
                  <LazyLoadImage
                    src={item.img}
                    alt="Image"
                    className="w-full h-72 rounded"
                  />
                  {/* adding black gradient on top of image*/}
                  <div className="md:absolute md:top-48 md:left-12 w-4/5 bg-white p-8 text-center border border-black">
                    <p className="text-gray-700 my-3 text-center underline">
                      {item.category}
                    </p>
                    <p className="text-4xl mb-5 font-new font-semibold">
                      {item.title}
                    </p>
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

        <div className="md:flex md:gap-10">
          <div className="md:relative w-full mb-40">
            <LazyLoadImage
              src={popularImg2}
              alt="Image"
              className="w-full md:h-96 rounded"
            />

            <div className="md:absolute md:top-72 md:left-20 md:w-4/5 bg-white p-8 text-center border border-black">
              <p className="text-gray-700 my-3 text-center underline">SKIN</p>
              <p className="text-4xl mb-5 font-new font-semibold">
                Vivamus placerat Luctus Neque nec Faucibus Vivamus ultricies
                arcu Vivamus
              </p>
              <p className="text-gray-700">By Sarfraz Jasim - 29 july 2023</p>
            </div>
          </div>
          <div className="relative w-full mb-4">
            <LazyLoadImage
              src={popularImg1}
              alt="Image"
              className="w-full h-96 rounded"
            />

            <div className="absolute top-72 left-20 w-4/5 bg-white p-8 text-center border border-black">
              <p className="text-gray-700 my-3 text-center underline">Tips</p>
              <p className="text-4xl mb-5 font-new font-semibold">
                Vivamus placerat Luctus Neque nec Faucibus Vivamus ultricies
                arcu Vivamus
              </p>
              <p className="text-gray-700">By Sarfraz Jasim - 25 sep 2023</p>
            </div>
          </div>
        </div>
      </div>
      {/* top author details section */}
      <TopAuthor></TopAuthor>
      {/* new download section */}
      <div className="mt-20 mb-20 relative container mx-auto">
        <LazyLoadImage src={img3} className="h-32 w-full object-cover " />
        {/* adding black gradient on top of image*/}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-full text-white px-8 py-5 flex justify-between items-center">
          <div className="">
            <p className="font-bold text-5xl font-new ">Best Gutenberg</p>
            <p className="font-bold text-5xl font-new ">Post Grid Plugins</p>
          </div>
          <button className="py-2 px-10 bg-white text-black rounded-3xl hover:bg-black hover:text-white hover:scale-125 duration-300 ease-in">
            Download Now
          </button>
        </div>
      </div>
      {/* random post section */}
      <SectionTitle title="Random Post"></SectionTitle>
      <RandomPostCard
        img={randomImg1}
        category="MAKEUP"
        title="Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla"
        author="By Sarfraz Jasim"
        date="29 July, 2023"
        discription="Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis….."
      ></RandomPostCard>

      <RandomPostCard2
        img={randomImg2}
        category="SPA"
        title="Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla"
        author="By Sarfraz Jasim"
        date="29 July, 2023"
        discription="Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis….."
      ></RandomPostCard2>

      <div className="mt-[43rem]"> </div>
      <div className=" container mx-auto w-full border-t border-dashed border-black mb-20"></div>
      <RandomPostCard
        img={randomImg3}
        category="MAKEUP"
        title="Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla"
        author="By Sarfraz Jasim"
        date="29 July, 2023"
        discription="Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis….."
      ></RandomPostCard>

      <RandomPostCard2
        img={randomImg4}
        category="Hair"
        title="Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla"
        author="By Sarfraz Jasim"
        date="29 July, 2023"
        discription="Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis….."
      ></RandomPostCard2>

      <div className="mt-[43rem]">
        <div className=" container mx-auto w-full border-t border-dashed border-black mb-20"></div>
        <RandomPostCard
          img={randomImg5}
          category="MAKEUP"
          title="Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla"
          author="By Sarfraz Jasim"
          date="29 July, 2023"
          discription="Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis….."
        ></RandomPostCard>
      </div>

      <RandomPostCard2
        img={randomImg6}
        category="Tips"
        title="Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla"
        author="By Sarfraz Jasim"
        date="29 July, 2023"
        discription="Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis….."
      ></RandomPostCard2>
      <div className=" mt-[43rem] container mx-auto w-full border-t border-dashed border-black mb-20"></div>

      <div className="text-center my-20">
        <button className="py-3 px-8 bg-black text-white rounded-3xl hover:bg-white hover:text-black hover:scale-125 duration-300 ease-in-out">
          Load More
        </button>
      </div>

      {/* instafeed section */}
      <SectionTitle title="Instagram Feed"></SectionTitle>
      <div className="container mx-auto my-20">
        <div className="flex justify-evenly">
          <LazyLoadImage src={instaImg1} className="w-80 h-80" />
          <LazyLoadImage src={instaImg2} className="w-80 h-80" />
          <LazyLoadImage src={instaImg3} className="w-80 h-80" />
          <LazyLoadImage src={instaImg4} className="w-80 h-80" />
        </div>
        <div className="w-full my-16">
          <button className="w-full py-3 px-8 bg-black text-white rounded-3xl hover:bg-white hover:text-black hover:scale-125 duration-300 ease-in-out">
            Follow Us
          </button>
        </div>
      </div>

      {/* subscribe section */}
      <SubscribeUs></SubscribeUs>
      <Footer></Footer>
    </div>
  );
};

export default App;
