import Contact from "./components/Contact"
import Header from "./components/Header"
import Services from "./components/Services"
import 'mapbox-gl/dist/mapbox-gl.css';
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Pricelist from "./components/Pricelist";
import VideoView from "./components/VideoView";

function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <Pricelist/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
