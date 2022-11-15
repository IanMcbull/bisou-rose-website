function Gallery() {
  return (
      <section className="min-h-[100vh] my-8 md:my-16 lg:my-28">
         <div className="container mx-auto gallery font-Cinzel">
            <div className="content flex flex-col justify-evenly gap-6 md:gap-0">
                 <h2 className="text-7xl">Bisou <span className="text-[rgb(129,77,42)]">Gallery</span></h2>
                 <p className="text-justify font-semibold text-md">We are excited to welcome you to our beauty salon, bringing a touch of London to Nairobi! 🥂</p> 
            </div>
            <div className="image-one rounded-md"></div>
            <div className="image-two rounded-md"></div>
            <div className="image-three rounded-md"></div>
            <div className="image-four rounded-md"></div>
            <div className="image-five rounded-md"></div>
         </div>
      </section>
  );
}

export default Gallery