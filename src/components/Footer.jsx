import { LazyLoadImage } from "react-lazy-load-image-component";
import blogImg1 from "../assets/blog-image/1.jpg";
import blogImg2 from "../assets/blog-image/2.jpg";
import blogImg3 from "../assets/blog-image/3.jpg";
import galleryImg1 from "../assets/blog-image/footer-blog/1.jpg";
import galleryImg2 from "../assets/blog-image/footer-blog/2.jpg";
import galleryImg3 from "../assets/blog-image/footer-blog/3.jpg";
import galleryImg4 from "../assets/blog-image/footer-blog/4.jpg";
import galleryImg5 from "../assets/blog-image/footer-blog/5.jpg";
import galleryImg6 from "../assets/blog-image/footer-blog/6.jpg";
import {
  FaFacebook,
  FaInnosoft,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const newDate = new Date().getFullYear();
  console.log(newDate);
  return (
    <div className="bg-black py-16 px-32 text-white">
      <div className="container mx-auto">
        {/* top content */}
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
              <LazyLoadImage src={blogImg1} className="w-28 h-28" />
              <div>
                <p>Vivamus placerat Luctus Neque nec Faucibus</p>
                <p className="text-gray-500">7 Days ago</p>
              </div>
            </div>
            <div className="flex items-center gap-5 mb-6">
              <LazyLoadImage src={blogImg2} className="w-28 h-28" />
              <div>
                <p>Vivamus placerat Luctus Neque nec Faucibus</p>
                <p className="text-gray-500">4 Days ago</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <LazyLoadImage src={blogImg3} className="w-28 h-28" />
              <div>
                <p>Vivamus placerat Luctus Neque nec Faucibus</p>
                <p className="text-gray-500">12 Days ago</p>
              </div>
            </div>
          </div>
          <div>
            <p className="uppercase text-2xl mb-10">Gallery</p>
            <div className="md:grid md:grid-cols-3 gap-5">
              <LazyLoadImage src={galleryImg1} className="w-28 h-20" />
              <LazyLoadImage src={galleryImg2} className="w-28 h-20" />
              <LazyLoadImage src={galleryImg3} className="w-28 h-20" />
              <LazyLoadImage src={galleryImg4} className="w-28 h-20" />
              <LazyLoadImage src={galleryImg5} className="w-28 h-20" />
              <LazyLoadImage src={galleryImg6} className="w-28 h-20" />
            </div>
            <div className="mt-10">
              <p className="uppercase text-2xl mb-10">tags</p>
              <div className="md:grid md:grid-cols-3 md:gap-3 text-center">
                <p className="uppercase py-2 px-5 rounded-3xl  bg-[#535353] text-[#CFCFCF]">
                  Beauty
                </p>
                <p className="uppercase py-2 px-5 rounded-3xl  bg-[#535353] text-[#CFCFCF]">
                  Tips
                </p>
                <p className="uppercase py-2 px-5 rounded-3xl bg-[#535353] text-[#CFCFCF]">
                  makeup
                </p>
                <p className="uppercase py-2 px-5 rounded-3xl bg-[#535353] text-[#CFCFCF]">
                  skin
                </p>
                <p className="uppercase py-2 px-5 rounded-3xl bg-[#535353] text-[#CFCFCF]">
                  eye
                </p>
                <p className="uppercase py-2 px-5 rounded-3xl bg-[#535353] text-[#CFCFCF]">
                  fashion
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-white my-10" />
        {/* bottom content */}
        <div className="">
          <header className="container mx-auto w-full bg-base text-white body-font mb-4 shadow-sm">
            <div className="container mx-auto flex justify-between items-center py-5 px-2">
              <div className="flex gap-[44rem]">
                {/* Site logo and Name */}
                <a
                  href="#link"
                  className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
                >
                  <span className="ml-3 font-new text-6xl text-white font-semibold antialiased">
                    Blushlly
                  </span>
                </a>
                {/* Navbar */}
                <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
                  <a href="#link" className="mr-5 hover:text-gray-300">
                    Home
                  </a>
                  <a href="#link" className="mr-5 hover:text-gray-300">
                    Category
                  </a>
                  <a href="#link" className="mr-5 hover:text-gray-300">
                    Makeup
                  </a>
                  <a href="#link" className="mr-5 hover:text-gray-300">
                    Blog
                  </a>
                  <a href="#link" className="mr-5 hover:text-gray-300">
                    About
                  </a>
                  <a href="#link" className="mr-5 hover:text-gray-300">
                    Contact Us
                  </a>
                </nav>
              </div>
            </div>
            <hr />
            <div className="hidden py-5 md:flex md:justify-between md:items-center">
              <div className="flex gap-2 ml-5">
                <a href="">
                  <FaFacebook className="text-3xl hover:opacity-60"></FaFacebook>
                </a>
                <a href="">
                  <FaInstagram className="text-3xl hover:opacity-60"></FaInstagram>
                </a>
                <a href="">
                  <FaInnosoft className="text-3xl hover:opacity-60"></FaInnosoft>
                </a>
                <a href="">
                  <FaTwitter className="text-3xl hover:opacity-60"></FaTwitter>
                </a>
                <a href="">
                  <FaPinterest className="text-3xl hover:opacity-60"></FaPinterest>
                </a>
                <a href="">
                  <FaLinkedin className="text-3xl hover:opacity-60"></FaLinkedin>
                </a>
              </div>
              <p className="md:mr-8">© {newDate} PostX. Designed By WPXPO</p>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Footer;
