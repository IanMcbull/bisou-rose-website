import background from "../assets/images/corousel-2.jpg";
import Logo from "../assets/images/logo.png";
import { FaBars } from "react-icons/fa";
import { Dialog, Transition, Listbox } from '@headlessui/react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiCheck, HiChevronUpDown} from 'react-icons/hi2'
import { Fragment, useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import {
  Drawer,
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
const people = [
  { name: 'Hair Services' },
  { name: 'Nail Services' },
  { name: 'Eyelash Services' },
  { name: 'Barber Services' }
]
function Header() {
 
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [isopen, setIsOpen] = useState(false)
  const [fullName,setFullName] = useState('')
  const [number,setPhoneNumber] = useState('')
  const [date,setDate] = useState('')
  const [selected, setSelected] = useState(people[0])
 
   function closeModal() {
    console.log(fullName)
    console.log(date)
    console.log(number)
    console.log(selected.name)

    const templateParams = {
      from_name: fullName,
      to_name: 'Bisou',
      appointment_date: date,
      client_number: number,
      message: selected.name,
   };
    try {
      emailjs.send(
        'service_cv4aqzr',
        'template_fgsobhi',
        templateParams,
        'uEYl8RsJL5qf44q4b'
    )
    toast.success('Successfully Booked')
    } catch (error) {
     toast.error('Unable to book an appointment') 

    }
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const setName = (e: { target: { value: any; }; })=>{
     const name = e.target.value
     setFullName(name)
  } 
  const setNumber = (e: { target: { value: any; }; })=>{
    const number = e.target.value
    setPhoneNumber(number)
 } 
 const setdate = (e: { target: { value: any; }; })=>{
  const date = e.target.value
  setDate(date)
} 
  return (
    <header className="min-h-[100vh] flex flex-col font-Cinzel" style={styles}>
        <nav className="container mx-auto flex justify-between items-center py-10">
          <img src={Logo} alt="Logo image for Bisou Rose" className=" w-32 md:w-44"/>
          <div className="nav-links hidden lg:flex font-Cinzel">
            <a href="#" className="text-white text-xl font-semibold hover:text-lightBrown">Home</a>
            <a href="services"><Link
            className="text-white text-xl font-semibold ml-28 hover:text-lightBrown"
    activeClass="active"
    to="services"
    spy={true}
    smooth={true}
    offset={-70}
    duration={700}
>Services</Link></a>
            <a href="#gallery"><Link
    className="text-white text-xl font-semibold ml-28 hover:text-lightBrown"
    to="gallery"
    spy={true}
    smooth={true}
    offset={-70}
    duration={900}
>Gallery</Link></a>
            <a href="#contact"><Link
    className="text-white text-xl font-semibold ml-28 hover:text-lightBrown"
    to="contact"
    spy={true}
    smooth={true}
    offset={-70}
    duration={900}
>Contact</Link></a>
          </div>
          <div className="lg:hidden flex pr-4">
            <button type="button" onClick={onOpen}><FaBars  className="text-white text-5xl"/></button>
          </div>
        </nav>
        <div className="flex flex-col h-96 justify-center container mx-auto gap-5 items-center place-self-center">
          {/* <h1 className="text-lightBrown text-4xl md:text-6xl font-Cinzel font-semibold text-center">Bisou Rose</h1> */}
          <p className="text-white text-xl md:text-2xl font-Cinzel font-semibold text-center">Masterpiece to beauty</p>
         <button className="bg-[#814d2a] p-4 text-white font-bold shadow-xl hover:bg-lightBrown"
         onClick={openModal}
          >Book an Appointment</button>
          <a className="font-bold text-white font-Cinzel text-xl hover:underline-offset-1" href="tel:+254743565565"> (+254)743565565 </a>
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
            <a href="/" className="text-black text-2xl font-semibold hover:text-lightBrown">Home</a>
            <a href="#services" className="text-black text-2xl font-semibold hover:text-lightBrown">Services</a>
            <a href="#gallery" className="text-black text-2xl font-semibold hover:text-lightBrown">Gallery</a>
            <a href="#contact" className="text-black text-2xl font-semibold hover:text-lightBrown">Contact</a>
          </div>
        </DrawerContent>
      </Drawer>
      <Transition appear show={isopen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 font-Cinzel"
                  >
                    Book an Appointment
                  </Dialog.Title>
                  <div className="mt-4 font-Cinzel">
                    <form className="flex flex-col">
                    <input type="text" placeholder="Full Name" className="p-4 border-2 border-black w-full" value={fullName} onChange={setName}/>
                    <input type="text" placeholder="Phone Number" className="p-4 border-2 border-black w-full mt-4" value={number} onChange={setNumber}/>
                    <input type="date" className="p-4 border-2 border-black w-full mt-4" value={date} onChange={setdate}/>
                    
                    <div className="flex flex-col mt-4">
                    <p className="font-semibold">Pick a Service</p>
                    <Listbox value={selected} onChange={setSelected}>
                    
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <HiChevronUpDown
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="relative h-auto w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {people.map((person, personIdx) => (
                            <Listbox.Option
                              key={personIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                }`
                              }
                              value={person}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? 'font-medium' : 'font-normal'
                                    }`}
                                  >
                                    {person.name}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <HiCheck className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                    </div>
                    </form>
                  </div>

                  <div className="mt-8">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-Cinzel text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Book Now!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ToastContainer/>
    </header>
  )
}

export default Header