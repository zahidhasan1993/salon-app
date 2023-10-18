const Category = ({ item }) => {
  return (
    <div className="relative">
      <img src={item.img} alt="Image" className="w-full h-[200px] opacity-70" />
      {/* adding black gradient on top of image*/}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      {/* adding text on top of image */}
      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 text-white py-3 px-5 rounded-3xl">
        {item.name}
      </p>
    </div>
  );
};

export default Category;
