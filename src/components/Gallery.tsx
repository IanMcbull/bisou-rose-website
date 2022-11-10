function Gallery() {
  return (
      <section className="min-h-[100vh]">
         <div className="container mx-auto gallery font-Cinzel">
            <div className="content flex flex-col justify-evenly">
                 <h2 className="text-7xl">Bisou <span className="text-[rgb(129,77,42)]">Gallery</span></h2>
                 <p className="text-justify font-semibold text-md">We are excited to welcome you to our beauty salon, bringing a touch of London to Nairobi! 🥂</p> 
            </div>
            <div className="image-one rounded-md"></div>
            <div className="image-two rounded-md"></div>
            <div className="image-three rounded-md"></div>
            <div className="image-four rounded-md"></div>
            <div className="image-five rounded-md"></div>
         </div>

          {/* <h2 className="text-center text-6xl font-Cinzel font-semibold mb-24">Gallery</h2>
          <div className="min-h-[50vh] container mx-auto grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2 gap-10">
          <div className="row-span-1 md:row-span-2">
              <LazyLoadImage src={CardOne} alt="" className="w-full h-full object-cover rounded-md" effect="blur"/>
          </div>
          <div className="row-span-2 flex basis-1 flex-wrap gap-8">
              <div className="w-400px md:max-w-[300px]">
                  <LazyLoadImage src={CardTwo} alt="image one" className="w-full h-full object-cover rounded-md" effect="blur"/>
              </div>
              <div className="w-400px md:max-w-[300px]">
                  <LazyLoadImage src={CardThree} alt="" className="w-full h-full object-cover rounded-md" effect="blur"/>
              </div>
              <div className="w-400px md:max-w-[300px]">
                  <LazyLoadImage src={CardFour} alt="" className="w-full h-full object-cover rounded-md" effect="blur"/>
              </div>
              <div className="w-400px md:max-w-[300px]">
                  <LazyLoadImage src={CardFive} alt="" className="w-full h-full object-cover rounded-md" effect="blur"/>
              </div>
          </div>
      </div> */}
      </section>
  );
}

export default Gallery