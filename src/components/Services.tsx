import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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
    <motion.section className="container mx-auto min-h-[100vh] grid grid-cols-1 md:grid-cols-2 gap-24 items-center p-6" id="services"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div className="flex flex-col justify-center text-justify gap-6">
        <h1 className="text-4xl lg:text-5xl font-Cinzel font-semibold">Our Services</h1>
        <p className="md:text-md font-Cinzel font-semibold">
          We provide a wide range of servcices, from nail care to hair care, to barbering to <a href="#" className="text-lightBrown underline-offset-2">eyelash services</a> and more. We have a team of professionals who are ready to serve you.

        </p>
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Instagram</span>
        </button>
      </div>
        <div className="flex flex-col justify-center items-center h-[300px] w-[300px] lg:h-[600px] lg:w-[600px] shadow-2xl mx-auto rounded-full" style={serviceStyles}>
        </div>
    </motion.section>
  );
}

export default Services;
