import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <LazyLoadImage
          src="https://images.unsplash.com/photo-1509650382971-17f6cae19506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          className="w-full h-[35rem] relative"
        />
        <div className="h-[22rem] border-2 border-white absolute text-white top-[7rem] right-[10rem] p-8">
          <p className="text-sm underline mb-5">SKIN</p>
          <p className="font-new text-5xl mb-5">
            Six Hyaluronic Serums <br /> For Glowing Summer Skin <br /> Vivamus
            Placerat
          </p>
          <p className="mb-5">By Sarfraz Jasim - 29 July, 2023</p>
          <a href="" className="flex items-center gap-2 ">
            Continue Reading <FaArrowRight className="text-sm"></FaArrowRight>
          </a>
          <hr className="w-1/2 " />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage
          src="https://images.unsplash.com/photo-1509650382971-17f6cae19506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          className="w-full h-[35rem] relative"
        />
        <div className="h-[22rem] border-2 border-white absolute text-white top-[7rem] right-[10rem] p-8">
          <p className="text-sm underline mb-5">SKIN</p>
          <p className="font-new text-5xl mb-5">
            Six Hyaluronic Serums <br /> For Glowing Summer Skin <br /> Vivamus
            Placerat
          </p>
          <p className="mb-5">By Sarfraz Jasim - 29 July, 2023</p>
          <a href="" className="flex items-center gap-2 ">
            Continue Reading <FaArrowRight className="text-sm"></FaArrowRight>
          </a>
          <hr className="w-1/2 " />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <LazyLoadImage
          src="https://images.unsplash.com/photo-1509650382971-17f6cae19506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          className="w-full h-[35rem] relative"
        />
        <div className="h-[22rem] border-2 border-white absolute text-white top-[7rem] right-[10rem] p-8">
          <p className="text-sm underline mb-5">SKIN</p>
          <p className="font-new text-5xl mb-5">
            Six Hyaluronic Serums <br /> For Glowing Summer Skin <br /> Vivamus
            Placerat
          </p>
          <p className="mb-5">By Sarfraz Jasim - 29 July, 2023</p>
          <a href="" className="flex items-center gap-2 ">
            Continue Reading <FaArrowRight className="text-sm"></FaArrowRight>
          </a>
          <hr className="w-1/2 " />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
