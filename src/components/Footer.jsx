import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';


export const Footer = () => {
    const [copied, setcopied] = useState(false);

  return (
    <>
    <div className="bg-body-tertiary footter">
        <div className="row p-4 b-2 ">
            <div className="col-xs-12 col-md-6 col-lg-3">
                <a className="navbar-footer  " href="./" >
                Diana Julieth Matamoros
                </a>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-3">
                <h3 className="fotter-contact"> Contacto </h3>
                <a href="https://github.com/DianaJ-Dev" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" fill="currentColor" className="bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                </a>
                <h4 className="card-email-footer mx-2">juliethdiana123@gmail.com</h4>
                <CopyToClipboard text='juliethdiana123@gmail.com' onCopy={() => setcopied(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi-footer bi-copy mr-2 mx-4 cursor-pointer" viewBox="0 0 16 16 " >
                    <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                  </svg>
                </CopyToClipboard>
                {copied && <span className="span-footer" >Email Copiado</span>}  
            </div>  
            <div className="col-xs-12 col-md-4 col-lg-5 form">
                <form className="form row g-3">
                <div className="col-md-9">
                    <label className="form-label">Nombre</label>
                        <input type="text" className="form-control"></input>
                    <label className="form-label">Correo</label>
                        <input type="email" className="form-control"></input>
                    <label className="form-label">Dejame tu mensaje</label>
                        <textarea className="form-control" rows="3"></textarea>
                    <div className="col-12">
                </div>
            </div>    
            <div className="col-xs-12 col-md-6 col-lg-3">             
                <button type="submit" className="btn">Enviar</button>
            </div>
            </form>
            </div>    
        </div>
    </div> 
    </>
  )
}

