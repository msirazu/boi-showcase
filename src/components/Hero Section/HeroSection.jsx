const HeroSection = () => {
    return (
        <section className="">
            <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div>
      <h1 className="text-5xl playfair-display font-bold">Books to freshen up your bookshelf</h1>
      <button className="btn btn-primary capitalize mt-5 bg-[#14A70B] border-none work-sans rounded-md">view the last</button>
    </div>
    <img
      src="https://i.ibb.co.com/0cv102J/To-Kill-a-Mockingbird.webp"
      className="max-w-sm rounded-lg shadow-2xl w-50"
    />
  </div>
</div>
        </section>
    );
};

export default HeroSection;