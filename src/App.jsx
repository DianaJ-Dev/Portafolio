import ScrollSpy from "react-ui-scrollspy";
import { Start } from './components/Start';
import { Carrusel } from './components/Carrusel';
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer'

import './index.css'

function App() {

  return (
    <>
    <ScrollSpy>
      <nav className="navbar bg-body-tertiary px-4 mb-5">
        <a className="navbar-brand" href="/">Diana Julieth Matamoros</a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#Start">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Carrusel">Proyectos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#AboutMe">Sobre mí</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">Contáctame</a>
          </li>
        </ul>
      </nav>
      <div id="Start" style={{ height: '500px', border: '1px solid black', marginBottom: '20px' }}>
        <Start />
      </div>
      <div id="Carrusel" style={{ height: '500px', border: '1px solid black', marginBottom: '20px' }}>
        <Carrusel />
      </div>
      <div id="AboutMe" style={{ height: '500px', border: '1px solid black' }}>
        <AboutMe />
      </div>
      <div id="Contact" style={{ height: '500px', border: '1px solid black' }}>
        <Footer />
      </div>
    </ScrollSpy>
  </>
  )
}

export default App
