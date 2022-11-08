import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import Map, {Marker} from 'react-map-gl';

function Contact() {
  const [fullName,setFullName] = useState('')
    const [number,setPhoneNumber] = useState('')
    const [message,setMessage] = useState('')
    const [email,setEmail] = useState('')
  const contactUsEmailJS = () =>{
      const templateParams = {
        from_name: fullName,
        to_name: 'Bisou',
        client_message:message,
        client_number: number,
        client_email:email
     };
      try {
        emailjs.send(
          'service_cv4aqzr',
          'template_fgsobhi',
          templateParams,
          'uEYl8RsJL5qf44q4b'
      )
      toast.success("Email sent successfully. We'll get back to you shortly!")
      } catch (error) {
       toast.error('Unable to send email. Please try again later') 
      }
    }
    const setName = (e: { target: { value: any; }; })=>{
      const name = e.target.value
      setFullName(name)
   } 
   const setNumber = (e: { target: { value: any; }; })=>{
     const number = e.target.value
     setPhoneNumber(number)
  } 
  const setemail = (e: { target: { value: any; }; })=>{
    const email = e.target.value
    setEmail(email)
 } 
 const setmessage = (e: { target: { value: any; }; })=>{
  const message = e.target.value
  setMessage(message)
} 
  return (
    <div className="min-h-[100vh] grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-10" id="contact">
      <div className="flex flex-col justify-center gap-10 px-6">
        <h1 className="text-4xl md:text-6xl font-Cinzel font-semibold">Contact Us</h1>
        <p className="text-xl font-Cinzel font-semibold">We are here to help you</p>
        <form onSubmit={contactUsEmailJS}>
            <div className="flex">
                <input type="text" placeholder="Full Name" className="p-4 border-2 border-black w-full" value={fullName} onChange={setName}/>
                
            </div>
                <input type="email" required placeholder="Email" className="p-4 border-2 border-black w-full mt-6" value={email} onChange={setemail}/>
                <input type="text" required placeholder="Phone Number" className="p-4 border-2 border-black w-full mt-6" value={number} onChange={setNumber}/>
                <textarea placeholder="Message" required className="p-4 border-2 border-black w-full mt-6 h-40" value={message} onChange={setmessage}></textarea>
                <button className='contactBtn flex justify-center mt-6 w-28 shadow-2xl' type='submit'>
  <div className="svg-wrapper-1">
    <div className="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>
        </form>
      </div>
      <div id="map" className='w-full min-h-[300px] mt-4'>
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