import bookImg from '../../assets/images/books.jpg';

const HeroSection = () => {
    return (
        <div className="hero bg-gray-50 h-138.5 border border-gray-200 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookImg}
      className="max-w-75 rounded-lg shadow-2xl"
    />
    <div className='max-w-131.5'>
      <h1 className="text-3xl lg:text-5xl font-bold font-play leading-15">Books to freshen up your bookshelf</h1>
      <button className="btn btn-primary capitalize bg-[#23BE0A] border-0 font-work rounded-md mt-10">view the list</button>
    </div>
  </div>
</div>
    );
};

export default HeroSection;