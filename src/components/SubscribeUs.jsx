const SubscribeUs = () => {
  return (
    <div className="h-96 w-full bg-[#DDD] py-20 px-80">
      <div className="text-center">
        <p className="font-new text-6xl font-semibold">
          Subscribe For Best <br /> Beauty Tips
        </p>
        <div className="relative w-3/4 mt-10 text-center ml-32">
          <input
            type="email"
            className="w-full border border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:ring focus:border-blue-500 rounded-3xl"
            placeholder="Enter your email address"
          />

          <button className="absolute inset-y-0 right-0 px-20 py-2 bg-black text-white rounded-3xl">
            Subscribe
          </button>
        </div>
        <div className="flex items-center text-center mt-10 ml-52">
          <input
            type="checkbox"
            id="agree"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label htmlFor="agree" className="ml-2">
            I agree that my submitted data is being collected and stored.
          </label>
        </div>
      </div>
    </div>
  );
};

export default SubscribeUs;
