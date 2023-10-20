const SectionTitle = ({title}) => {
  return (
    <div className="my-20 container mx-auto flex justify-center items-center gap-0">
      <div className="h-1 bg-black md:w-[40rem] mx-auto my-4"></div>
      <p className="text-3xl ">{title}</p>
      <div className="h-1 bg-black md:w-[40rem] mx-auto my-4"></div>
    </div>
  );
};

export default SectionTitle;
