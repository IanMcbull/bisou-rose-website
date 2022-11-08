import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};
import nailBarImage from '../assets/images/nail-polish-image.jpg';
const serviceStyles = {
    backgroundImage: `url(${nailBarImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

}
function Services() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div className="container mx-auto min-h-[100vh] grid grid-cols-1 md:grid-cols-2 gap-24 items-center p-6" id="services"
    >
      <div className="flex flex-col justify-center text-justify gap-6">
        <h1 className="text-4xl lg:text-5xl font-Cinzel font-semibold">Our Services</h1>
        <p className="md:text-md font-Cinzel font-semibold">
        We offer a serene and tranquil beauty space with unrivalled access to exclusive treatments and must have products from the worlds most innovative beauty brands. Our services range from, nail care , hair care, barbering , an exclusive <a href="https://bisourose.co.uk/?ref=rgvlq8goclo5" className="text-lightBrown underline-offset-2" target="_blank">eyelash services</a> and more. Settle into your chair with a magazine in hand and a glass of champagne in the other-our treat . You're here to get pampered and beautified.So, lean back for that spa-worthy scalp massage, and let us do the rest .
        </p>
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <a href="https://instagram.com/officialbisourose?igshid=YmMyMTA2M2Y=" target="_blank"><span className="button-text">Instagram</span></a>
        </button>
      </div>
          <LazyLoadImage src={nailBarImage} alt="services image" className="h-[300px] w-[300px] lg:h-[600px] lg:w-[600px] shadow-2xl mx-auto rounded-full" effect="blur"/>
        
    </div>
  );
}

export default Services;
