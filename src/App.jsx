import ScrollSpy from "react-ui-scrollspy";
import { Start } from './components/Start';
import { Carrusel } from './components/Carrusel';
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer';

import './index.css'

function App() {

  return (
    <>
    <ScrollSpy>
      <nav className="navbar bg-body-tertiary px-4 mb-3 fixed-top">
        <a className="navbar-brand" href="/">Diana Julieth Matamoros</a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="/">Inicio</a>
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
      <div id="Start">
        <Start />
      </div>
      <div id="Carrusel">
        <Carrusel />
      </div>
      <div id="AboutMe">
        <AboutMe />
      </div>
      <div id="Contact">
        <Footer />
      </div>
    </ScrollSpy>
  </>
  )
}

export default App
