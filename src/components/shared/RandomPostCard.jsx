import { LazyLoadImage } from "react-lazy-load-image-component";
const RandomPostCard = ({
  img,
  category,
  title,
  author,
  discription,
  date,
}) => {
  return (
    <div className="container mx-auto w-full mb-20 relative border-b border-black pb-20 border-dashed">
      <LazyLoadImage src={img} className="w-1/2" />
      <div className="absolute top-16 right-20 bg-white border border-black w-1/2 py-14 px-24">
        <p className="mb-3 text-gray-600 underline">{category}</p>
        <p className="font-new font-semibold text-6xl mb-5">{title}</p>
        <p className="text-gray-600 mb-3">{discription}</p>
        <p className="text-gray-600">
          {author} - {date}
        </p>
      </div>
    </div>
  );
};

export default RandomPostCard;
