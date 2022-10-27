import background from "../assets/images/corousel-1.jpg";
import Logo from "../assets/images/logo.png";
const styles = {
  backgroundImage: `linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.6)),url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}
function Header() {
  return (
    <header className="min-h-[100vh] kenburns-top-right flex flex-col font-Cinzel" style={styles}>
        <nav className="container mx-auto flex justify-between items-center py-10">
          <img src={Logo} alt="Logo image for Bisou Rose" className="w-44"/>
          <div className="nav-links hidden lg:flex font-Cinzel">
            <a href="#" className="text-white text-xl font-semibold">Home</a>
            <a href="#" className="text-white text-xl font-semibold ml-28">Services</a>
            <a href="#" className="text-white text-xl font-semibold ml-28">Gallery</a>
            <a href="#" className="text-white text-xl font-semibold ml-28">Contact</a>
          </div>
          <div className="lg:hidden flex">
            <label htmlFor="check" className="bar">
              <input id="check" type="checkbox"/>
              <span className="top"></span>
              <span className="middle"></span>
              <span className="bottom"></span>
            </label>
          </div>
        </nav>
        <div className="flex flex-col h-96 justify-center container mx-auto gap-5 items-center">
          <h1 className="text-white text-6xl font-Cinzel font-semibold text-center">Bisou Rose</h1>
          <p className="text-white text-2xl font-Cinzel font-semibold text-center">The best place for your wedding</p>
         <button className="bg-red-500 p-4 text-white font-bold">Book an Appointment</button>
        </div>
    </header>
  )
}

export default Header