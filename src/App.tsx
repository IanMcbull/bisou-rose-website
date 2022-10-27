import Contact from "./components/Contact"
import Header from "./components/Header"
import Services from "./components/Services"
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default App
