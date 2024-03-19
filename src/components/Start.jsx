import { useState } from 'react';
import Foto from '../photos/FotoSinFondo.png'
import { CopyToClipboard } from 'react-copy-to-clipboard';


export const Start = () => {
  const [copied, setcopied] = useState(false);
  
  return (
    <>
    <div className="contenedorCard" >
      <div className="cardStar">
        <div className="row">
          <div className="col-md-7">
            <div className="card-body">
              <h1 className="card-title fw-bold">Hola, Soy Diana Matamoros </h1>
              <h3 className="card-title fw-bold">Desarrolladora web </h3>
              <h4 className="card-text">&quot;La mente que se abre a una nueva idea jamás volverá a su tamaño original.&quot;</h4>
              <h5 className="write"> Albert Einstein</h5>
              <div className="nav nav-email">
                <h4 className="card-email">juliethdiana123@gmail.com</h4>
                <CopyToClipboard text='juliethdiana123@gmail.com' onCopy={() => setcopied(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-copy mr-2 mx-4 cursor-pointer" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                  </svg>
                </CopyToClipboard>
              </div>
              {copied && <span className="span" >Email Copiado</span>}
              <ul className="nav">
                <li className="nav links">
                  <a className="nav-link" href="https://drive.google.com/file/d/1uxhKIC_6qOK3Mtcf4-NTCQT9D9ys7D9D/view?usp=sharing">Descarga CV</a>
                </li>
                <li className="nav links" >
                  <a className="nav-link" href="https://github.com/DianaJ-Dev">Ver GitHub</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 foto">
            <img src={Foto} alt="Foto" className="img-fluid rounded-start" />
          </div>
        </div>
      </div>
      </div> 
    </>
  )
}




