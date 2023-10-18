import { LazyLoadImage } from "react-lazy-load-image-component";
import img from "../../assets/blog-image/1.jpg";
const PostCard = ({ item }) => {
  console.log(item);
  return (
    <div className="relative">
      <LazyLoadImage src={img} alt="Image" className="w-full h-[35rem] rounded" />
      {/* adding black gradient on top of image*/}
      <div className="absolute top-96 left-96 w-1/2 bg-white px-20 py-12 text-center">
        <p className="text-gray-700 my-3 text-lg underline">topic</p>
        <p className="text-3xl mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
          obcaecati?
        </p>
        <p className="mb-3 text-gray-700">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          laudantium aliquam accusantium numquam voluptas at cum temporibus
          asperiores suscipit eius.
        </p>
        <p className="text-gray-700">author name - 29 july 2023</p>
      </div>
      {/* adding text on top of image */}
    </div>
  );
};

export default PostCard;
