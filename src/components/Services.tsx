import nailBarImage from '../assets/images/nail-polish-image.jpg';
const serviceStyles = {
    backgroundImage: `url(${nailBarImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

}
function Services() {
  return (
    <section className="container mx-auto min-h-[100vh] grid grid-cols-1 md:grid-cols-2 gap-24 items-center p-6" id="services">
      <div className="flex flex-col justify-center text-justify gap-6">
        <h1 className="text-4xl lg:text-5xl font-Cinzel font-semibold">Our Services</h1>
        <p className="text-sm md:text-md font-Cinzel font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque
          assumenda, fuga architecto, delectus in ea ipsa inventore deleniti
          consequatur alias, soluta tempore expedita aspernatur ducimus laborum
          fugit quod amet autem eveniet blanditiis iste vero. Labore rerum
          magni, aperiam incidunt totam distinctio eum et dolorem omnis mollitia
          odio optio ea iure consequuntur repellat? Est minus beatae a quae
          provident voluptatem non odit molestiae maxime aperiam magni illo
          itaque facilis quia dolore quas eum quaerat dolores deleniti facere
          perferendis, rem nostrum! Quaerat quos architecto iure, reiciendis
          labore dicta explicabo laudantium voluptatem aperiam blanditiis. Iusto
          delectus maxime, est autem neque natus dolor.
        </p>
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Learn More</span>
        </button>
      </div>
        <div className="flex flex-col justify-center items-center h-[300px] w-[300px] lg:h-[600px] lg:w-[600px] shadow-2xl mx-auto rounded-full" style={serviceStyles}>
        </div>
    </section>
  );
}

export default Services;
