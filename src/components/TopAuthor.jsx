import { LazyLoadImage } from "react-lazy-load-image-component";
import authorImg from "../assets/blog-image/author.jpg";
import {
  FaFacebook,
  FaInnosoft,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
const TopAuthor = () => {
  return (
    <div className="hidden md:block h-96 w-full bg-[#DDD] py-20 px-80">
      <div className="md:flex md:justify-center md:items-center md:gap-10">
        <LazyLoadImage src={authorImg} className="md:w-52 md:h-52 rounded-full" />
        <div>
          <p className="text-6xl font-new font-bold">Morbi Porttitor</p>
          <p>
            Onvallis porttitor ligula leo a lectus. Donec id venenatis magna.
            Vivamus placerat luctus neque nec faucibus. Aliquam Gravida eu
            Tortor vitae tempor. . Mauris condimentum scelerisque ante nec
            ultricies. Vivamus tincidunt nibh velit!
          </p>
          <div className="flex gap-3 mt-5">
            <a href="">
              <FaFacebook className="text-xl opacity-60"></FaFacebook>
            </a>
            <a href="">
              <FaInstagram className="text-xl opacity-60"></FaInstagram>
            </a>
            <a href="">
              <FaInnosoft className="text-xl opacity-60"></FaInnosoft>
            </a>
            <a href="">
              <FaTwitter className="text-xl opacity-60"></FaTwitter>
            </a>
            <a href="">
              <FaPinterest className="text-xl opacity-60"></FaPinterest>
            </a>
            <a href="">
              <FaLinkedin className="text-xl opacity-60"></FaLinkedin>
            </a>
            <p className="ml-[25rem]">(18 post)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAuthor;
