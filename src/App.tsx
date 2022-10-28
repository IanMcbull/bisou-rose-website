import Contact from "./components/Contact"
import Header from "./components/Header"
import Services from "./components/Services"
import 'mapbox-gl/dist/mapbox-gl.css';
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
