import { LazyLoadImage } from "react-lazy-load-image-component";
import blogImg1 from "../assets/blog-image/1.jpg"
import blogImg2 from "../assets/blog-image/2.jpg"
import blogImg3 from "../assets/blog-image/3.jpg"

const Footer = () => {
  return (
    <div className="bg-black py-16 px-32 text-white">
      <div className=" grid grid-cols-3 gap-32">
        <div className="">
          <p className="text-2xl uppercase">categories</p>
          <div className="mt-10 flex justify-between">
            <p>Beauty</p>
            <p>(4)</p>
          </div>
          <hr className="mt-3" />
          <div className="mt-3 flex justify-between">
            <p>Fashion</p>
            <p>(4)</p>
          </div>
          <hr className="mt-3" />
          <div className="mt-3 flex justify-between">
            <p>Makeup</p>
            <p>(4)</p>
          </div>
          <hr className="mt-3" />
          <div className="mt-3 flex justify-between">
            <p>Body</p>
            <p>(4)</p>
          </div>
          <hr className="mt-3" />
          <div className="mt-3 flex justify-between">
            <p>Lifestyle</p>
            <p>(4)</p>
          </div>
          <hr className="mt-3" />
          <div className="relative mt-10">
            <input
              type="text"
              className="w-full py-2 pr-10 pl-4 text-gray-800 bg-gray-800  border border-gray-300"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="">
            <p className="uppercase text-2xl mb-10">Popular post</p>
            <div className="flex items-center gap-5 mb-6">
                <LazyLoadImage src={blogImg1} className="w-28 h-28"/>
                <div>
                <p>Vivamus placerat Luctus Neque nec Faucibus</p>
                <p className="text-gray-500">7 Days ago</p>
                </div>
            </div>
            <div className="flex items-center gap-5 mb-6">
                <LazyLoadImage src={blogImg2} className="w-28 h-28"/>
                <div>
                <p>Vivamus placerat Luctus Neque nec Faucibus</p>
                <p className="text-gray-500">4 Days ago</p>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <LazyLoadImage src={blogImg3} className="w-28 h-28"/>
                <div>
                <p>Vivamus placerat Luctus Neque nec Faucibus</p>
                <p className="text-gray-500">12 Days ago</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
