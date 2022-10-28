import Logo from "../assets/images/logo.png";
function Pricelist() {
  return (
    <section className="container mx-auto max-h-[150vh] flex flex-col justify-center items-center p-4 mb-10">
     <img src={Logo} alt="Logo" className="w-44"/>
     <div className="w-full h-96 flex flex-col">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-28">
           <div className="flex flex-col">
           <h2 className="font-Cinzel text-2xl pb-2 border-b-black border-b-4 mt-8 text-lighterBrown font-bold">Manicure</h2>
           <div className="flex justify-between font-Cinzel mt-6 mb-4">
              <p className="text-lg font-bold items-center">Express Manicure</p>
              <p className="font-semibold">ksh1000</p>
           </div>
           <div className="flex justify-between font-Cinzel mb-4">
              <p className="text-lg font-bold">Dry Maicure Manicure</p>
              <p className="font-semibold">ksh1000</p>
           </div>
           <div className="flex justify-between font-Cinzel mb-4">
              <p className="text-lg font-bold">French Manicure</p>
              <p className="font-semibold">ksh1000</p>
           </div>

           <h2 className="font-Cinzel text-2xl pb-2 border-b-black border-b-4 mt-8 text-lighterBrown font-bold">Nail Extensions</h2>
           <div className="flex justify-between font-Cinzel mt-6 mb-4">
              <p className="text-lg font-bold items-center">Acryllics</p>
              <p className="font-semibold">ksh6000</p>
           </div>
           <div className="flex justify-between font-Cinzel mb-4">
              <p className="text-lg font-bold">Infill</p>
              <p className="font-semibold">ksh3000</p>
           </div>
           <div className="flex justify-between font-Cinzel mb-4">
              <p className="text-lg font-bold">Overlays</p>
              <p className="font-semibold">ksh4500</p>
           </div>
           </div>
           <div className="flex flex-col">
           <h2 className="font-Cinzel text-2xl pb-2 border-b-black border-b-4 mt-8 text-lighterBrown font-bold hidden md:flex">Pedicure</h2>
           <div className="hidden md:flex justify-between font-Cinzel mt-6 mb-4">
              <p className="text-lg font-bold items-center">Shellac Pedicure</p>
              <p className="font-semibold">ksh3000</p>
           </div>
           <div className="hidden md:flex justify-between font-Cinzel mb-4">
              <p className="text-lg font-bold">Express Pedicure</p>
              <p className="font-semibold">ksh1500</p>
           </div>
           <div className="hidden md:flex justify-between font-Cinzel mb-4">
              <p className="text-lg font-bold">Classic Pedicure</p>
              <p className="font-semibold">ksh2000</p>
           </div>

           <h2 className="font-Cinzel text-2xl pb-2 border-b-black border-b-4 mt-8 text-lighterBrown font-bold hidden md:flex">Barber</h2>
           <div className="justify-between font-Cinzel mt-6 mb-4 hidden md:flex">
              <p className="text-lg font-bold items-center">Gents Cut</p>
              <p className="font-semibold">ksh1500</p>
           </div>
           <div className="hidden md:flex justify-between font-Cinzel mb-4">
              <p className="text-lg font-bold">Blade Cut</p>
              <p className="font-semibold">ksh1000</p>
           </div>
           <div className="hidden md:flex justify-between font-Cinzel mb-4">
              <p className="text-lg font-bold">Dry Shave</p>
              <p className="font-semibold">ksh500</p>
           </div>
           </div>
         </div>
     </div>

<button className="buttonDownload self-end justify-end mt-32">Download Full Pricelist</button>
    </section>
  )
}

export default Pricelist