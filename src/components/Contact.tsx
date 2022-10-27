import Map, {Marker} from 'react-map-gl';
function Contact() {
  return (
    <div className="min-h-[100vh] grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-12">
      <div className="flex flex-col justify-center gap-10">
        <h1 className="text-6xl font-Cinzel font-semibold">Contact Us</h1>
        <p className="text-xl font-Cinzel font-semibold">We are here to help you</p>
        <form>
            <div className="flex gap-12">
                <input type="text" placeholder="First Name" className="p-4 border-2 border-black"/>
                <input type="text" placeholder="Last Name" className="p-4 w-full border-2 border-black"/>
            </div>
                <input type="email" placeholder="Email" className="p-4 border-2 border-black w-full mt-6"/>
                <input type="text" placeholder="Phone Number" className="p-4 border-2 border-black w-full mt-6"/>
                <textarea placeholder="Message" className="p-4 border-2 border-black w-full mt-6 h-40"></textarea>
                <button className="bg-[#814d2a] p-4 text-white font-bold shadow-2xl mt-6 w-full">Send Message</button>
        </form>
      </div>
      <div id="map" className='w-full min-h-[300px]'>
      <Map
      initialViewState={{
        latitude: -1.2598232692761895,
        longitude: 36.78142024146132,
        zoom: 14
      }}
      mapStyle="mapbox://styles/ianmugenya/ckoq4qn7r1i4717o908i3nu2h"
      mapboxAccessToken="pk.eyJ1IjoiaWFubXVnZW55YSIsImEiOiJjbDgxc3h4aGwwMWZuM25ueHM2NjFpYXBzIn0.rQrJ8G2jLqO8rJPhjiJDxw"
    >
        <Marker latitude={-1.2598232692761895} longitude={36.78142024146132} color="#814d2a"/>
      </Map>  
      </div>
    </div>
  )
}

export default Contact;