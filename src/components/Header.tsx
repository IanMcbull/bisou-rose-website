import background from "../assets/images/corousel-1.jpg";
const styles = {
  backgroundImage: `linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.6)),url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}
function Header() {
  return (
    <header className="min-h-[100vh] w-full kenburns-bottom" style={styles}>
        <nav>

        </nav>
    </header>
  )
}

export default Header