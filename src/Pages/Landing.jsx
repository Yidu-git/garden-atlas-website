const LandingPage = () => {
  return (
    <div>
      <section
        id="hero"
        className="img-hero flex h-120 flex-row justify-center border-b bg-fixed"
      >
        <div className="flex w-full flex-col bg-transparent px-10 py-20 text-white backdrop-blur-lg">
          <h1 className="text-4xl font-bold">
            The all in one gardening toolkit
          </h1>
          <h2 className="text-md mt-5 text-neutral-200">
            Whether you're an absolute beginner or a seasoned gardener,
            GardenAtlas gives you the tools to cultivate smarter — and keep
            everything in one place.
          </h2>
          <div className="flex w-full justify-start">
            <button className="button mt-5 w-50">Get started</button>
          </div>
        </div>
        <div className="flex w-full"></div>
      </section>
      <section id="features" className="mt-10 flex flex-col">
        <div className="flex w-full justify-center">
          <h1 className="font-md text-3xl">Why Garden Atlas?</h1>
        </div>
        <div className="flex flex-row items-center p-10">
          <div className="flex w-full flex-col items-start justify-start">
            <div className="flex flex-row items-center gap-3 rounded-full px-10">
              <div className="flex items-center justify-center rounded-full border border-[#6CC48F] bg-[#6CC48F] px-3 py-1 text-white">
                <p className="">1</p>
              </div>
              <p className="text-xl font-medium">Never forget</p>
            </div>
            <p>
              GardenAtlas allows you to track and remember when to water and
              feed your plants. So youll never have to loose another plant
              again!
            </p>
          </div>
          <div className="w-full"></div>
        </div>
      </section>
      <div className="h-1000"></div>
    </div>
  );
};

export default LandingPage;
