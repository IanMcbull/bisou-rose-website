import background from "../assets/images/corousel-2.jpg";
import Logo from "../assets/images/logo.png";
import { FaBars } from "react-icons/fa"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
const styles = {
  backgroundImage: `linear-gradient(rgba(4,9,30,0.8),rgba(4,9,30,0.2)),url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}
function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <header className="min-h-[100vh] flex flex-col font-Cinzel" style={styles}>
        <nav className="container mx-auto flex justify-between items-center py-10">
          <img src={Logo} alt="Logo image for Bisou Rose" className=" w-32 md:w-44"/>
          <div className="nav-links hidden lg:flex font-Cinzel">
            <a href="#" className="text-white text-xl font-semibold">Home</a>
            <a href="#services" className="text-white text-xl font-semibold ml-28">Services</a>
            <a href="#gallery" className="text-white text-xl font-semibold ml-28">Gallery</a>
            <a href="#contact" className="text-white text-xl font-semibold ml-28">Contact</a>
          </div>
          <div className="lg:hidden flex pr-4">
            <button type="button" onClick={onOpen}><FaBars  className="text-white text-5xl"/></button>
          </div>
        </nav>
        <div className="flex flex-col h-96 justify-center container mx-auto gap-5 items-center place-self-center">
          {/* <h1 className="text-lightBrown text-4xl md:text-6xl font-Cinzel font-semibold text-center">Bisou Rose</h1> */}
          <p className="text-white text-xl md:text-2xl font-Cinzel font-semibold text-center">Masterpiece to beauty</p>
         <button className="bg-[#814d2a] p-4 text-white font-bold shadow-xl">Book an Appointment</button>
        </div>
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent className="p-4">
          <DrawerCloseButton />
          <div className="nav-links flex flex-col font-Cinzel mt-24 gap-6">
            <a href="#" className="text-black text-2xl font-semibold">Home</a>
            <a href="#" className="text-black text-2xl font-semibold ">Services</a>
            <a href="#" className="text-black text-2xl font-semibold ">Gallery</a>
            <a href="#" className="text-black text-2xl font-semibold">Contact</a>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  )
}

export default Header