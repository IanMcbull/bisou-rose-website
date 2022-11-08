import CardOne from "../assets/images/seats-image.jpg"
import CardTwo from "../assets/images/nail-bar-wide-2-image.jpg"
import CardThree from "../assets/images/mirrors-image.jpg"
import CardFour from "../assets/images/macbook-table-image.jpg"
import CardFive from "../assets/images/nail-polish-image.jpg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
function Gallery() {
  return (
      <section className="my-44 p-4" id="gallery">
          <h2 className="text-center text-6xl font-Cinzel font-semibold mb-24">Gallery</h2>
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
      </div>
      </section>
  );
}

export default Gallery