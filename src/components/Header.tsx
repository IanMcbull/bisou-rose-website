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
    <header className="min-h-[100vh] kenburns-top-right" style={styles}>
        <nav className="container mx-auto flex justify-between items-center py-10">
          <img src={Logo} alt="Logo image for Bisou Rose" className="w-44"/>
          <div className="nav-links flex">
            <a href="#" className="text-white text-lg font-semibold">Home</a>
            <a href="#" className="text-white text-lg font-semibold ml-28">Home</a>
            <a href="#" className="text-white text-lg font-semibold ml-28">Home</a>
          </div>
        </nav>
    </header>
  )
}

export default Header