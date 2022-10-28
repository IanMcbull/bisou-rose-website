import Logo from "../assets/images/logo.png";
function Pricelist() {
  return (
    <section className="container mx-auto min-h-[100vh] flex flex-col justify-evenly items-center p-4 border border-black">
     <img src={Logo} alt="Logo" className="w-44"/>
     <div className="w-full h-96 flex flex-col">
         <div className="flex flex-col justify-between items-center font-semibold text-md md:text-xl md:flex-row">
           <p className="font-Cinzel">lorem@gmail.com</p>
           <p className="font-Cinzel">0703738382</p>
           <p className="font-Cinzel">lorem@gmail.com</p>
         </div>
         <h2 className="text-center mt-24 font-Cinzel text-4xl">Nail Care</h2>
         <div className="grid grid-cols-2">
           <div>
           <h2 className="">Manicure</h2>
           </div>
           <div>
            
           </div>
         </div>
     </div>
    </section>
  )
}

export default Pricelist