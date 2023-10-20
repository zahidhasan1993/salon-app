import { LazyLoadImage } from "react-lazy-load-image-component";
import img from "../../assets/blog-image/1.jpg";
const PostCard = () => {
  return (
    <div className="md:relative w-full">
      <LazyLoadImage
        src={img}
        alt="Image"
        className="w-full h-[35rem] rounded"
      />

      <div className="md:absolute md:top-96 md:left-96 md:w-1/2 bg-white px-20 border border-black py-12 text-center">
        <p className="text-gray-700 my-3 text-lg underline">SKIN</p>
        <p className="text-6xl mb-3 font-new font-semibold">
          Sed dignissim quam nulla, at sodales elit venenatis at. In in
          fringilla
        </p>
        <p className="mb-3 text-gray-700">
          Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar
          felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a
          interdum facilisis…..
        </p>
        <p className="text-gray-700">By Sarfraz Jasim - 29 july 2023</p>
      </div>
    </div>
  );
};

export default PostCard;
