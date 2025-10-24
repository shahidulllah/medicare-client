const Banner = () => {
  return (
    <div className="mb-16">
      <div className="carousel w-full rounded-b-xl h-[40vh] lg:h-[85vh]">
        <div id="slide1" className="carousel-item relative w-full  ">
          {/* title */}
          <div className=" absolute  w-full h-full flex flex-col justify-center items-center lg:items-start text-white P-8 space-y-10 lg:pl-16">
            <h1 className="text-3xl lg:text-6xl font-serif font-bold text-center animate__slow animate__animated animate__fadeInUp "></h1>
            <h1 className="lg:text-3xl text-center hidden lg:block animate__slow animate__animated animate__fadeInUp lg:ml-32 p-6 rounded-2xl bg-slate-200 text-indigo-900 "></h1>
          </div>
          <img src="https://i.ibb.co/PmSq1HJ/b-2.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className=" absolute w-full h-full flex flex-col justify-center items-center text-white P-8 space-y-5">
            <h1 className="animate__animated animate__fadeInDown animate__slow text-3xl lg:text-6xl font-serif font-bold text-center "></h1>
            <h1 className="lg:text-3xl text-center animate__slow animate__animated animate__fadeInUp rounded-2xl"></h1>
          </div>
          <img src="https://i.ibb.co/827VwTW/b-1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className=" absolute w-full h-full flex flex-col justify-center items-center text-white P-8 space-y-5">
            <h1 className="text-3xl lg:text-6xl font-serif font-bold text-center animate__animated animate__rubberBand animate__slow"></h1>
            <h1 className="lg:text-3xl text-center animate__animated animate__fadeInUp animate__slow rounded-2xl  "></h1>
          </div>
          <img src="https://i.ibb.co/jLKykFR/b-3.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className=" absolute w-full h-full flex flex-col justify-center items-center text-white P-8 space-y-5">
            <h1 className="text-3xl lg:text-6xl font-serif font-bold text-center animate__animated animate__rubberBand animate__slow"></h1>
            <h1 className="lg:text-3xl text-center animate__animated animate__fadeInUp animate__slow rounded-2xl  "></h1>
          </div>
          <img src="https://i.ibb.co/rcrVw4t/b-4.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
