import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import img1 from "../assets/banner-images/1.jpg";
import img2 from "../assets/banner-images/2.jpg";
import img3 from "../assets/banner-images/3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper h-[50rem]"
    >
      <SwiperSlide>
        <LazyLoadImage src={img2} className="w-full relative" />
        <div className="absolute text-white top-[7rem] right-[10rem]  border-2 border-white px-20 py-14">
          <div className="h-[22rem]">
            <p className="text-sm underline mb-5">SKIN</p>
            <p className="font-new text-5xl mb-5">
              Six Hyaluronic Serums <br /> For Glowing Summer Skin <br />{" "}
              Vivamus Placerat
            </p>
            <p className="mb-5">By Sarfraz Jasim - 29 July, 2023</p>
            <a href="" className="flex items-center gap-2 ">
              Continue Reading <FaArrowRight className="text-sm"></FaArrowRight>
            </a>
            <hr className="w-1/2" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage src={img3} className="w-full relative" />
        <div className="absolute text-white top-[7rem] right-[10rem]  border-2 border-white px-20 py-14">
          <div className="h-[22rem]">
            <p className="text-sm underline mb-5">SKIN</p>
            <p className="font-new text-5xl mb-5">
              Six Hyaluronic Serums <br /> For Glowing Summer Skin <br />{" "}
              Vivamus Placerat
            </p>
            <p className="mb-5">By Sarfraz Jasim - 29 July, 2023</p>
            <a href="" className="flex items-center gap-2 ">
              Continue Reading <FaArrowRight className="text-sm"></FaArrowRight>
            </a>
            <hr className="w-1/2" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage src={img1} className="w-full relative " />
        <div className="absolute text-white top-[7rem] right-[10rem]  border-2 border-white px-20 py-14">
          <div className="h-[22rem]">
            <p className="text-sm underline mb-5">SKIN</p>
            <p className="font-new text-5xl mb-5">
              Six Hyaluronic Serums <br /> For Glowing Summer Skin <br />{" "}
              Vivamus Placerat
            </p>
            <p className="mb-5">By Sarfraz Jasim - 29 July, 2023</p>
            <a href="" className="flex items-center gap-2 ">
              Continue Reading <FaArrowRight className="text-sm"></FaArrowRight>
            </a>
            <hr className="w-1/2" />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
