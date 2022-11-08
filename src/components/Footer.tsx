import Logo from "../assets/images/logo.png";
import { FaTiktok, FaInstagram,FaMapPin, FaWhatsapp } from "react-icons/fa"
function Footer() {
  return (
    <footer className="min-h-[300px] bg-black w-full flex items-center p-6 mt-12" id="footer">
      <section className="container mx-auto flex flex-col space-y-6 md:flex-row items-center">
        <div className="w-1/4 flex flex-col space-y-16 items-center mb-8">
          <img src={Logo} alt="footer logo" className="w-24" />
          <div className="space-y-1 min-w-[200px]">
            <p className="text-white font-Cinzel text-md font-semibold">
              Copyright &#169;2022
            </p>
            <p className="text-white text-justify font-Cinzel text-sm ">
            Masterpiece to beauty
            </p>
          </div>
        </div>
        <div className="w-3/4 flex flex-col space-y-16">
          <div className="text-white font-Cinzel">
            <p className="mb-4 font-bold text-sm">
              Give us a call
              <span className="font-light ml-4"> +254-743-565-565</span>
            </p>
            <hr className="text-white font-bold" />
            <div className="flex flex-col justify-between mt-6 md:flex-row md:items-center gap-4">
              <div className="social-links flex space-x-4">
                    <a href="https://instagram.com/officialbisourose?igshid=YmMyMTA2M2Y=" target="_blank"><FaInstagram className="text-white text-2xl"/></a>
                    <a href="https://www.tiktok.com/@officialbisourose?_t=8Wxio4wNWRK&_r=1" target="_blank"><FaTiktok className="text-white text-2xl"/></a>
                    <a href="https://wa.me/+254713603866" target="_blank"><FaWhatsapp className="text-white text-2xl"/></a>
              </div>
              <div className="flex space-x-2">
              <FaMapPin className="text-white text-2xl"/>
              <p className="max-w-[400px] text-sm font-semibold">Nova Apartments, Waiyaki Way</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
