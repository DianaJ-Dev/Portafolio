import Viaje from '../photos/viaje.jpeg'

  export const AboutMe = () => {
    return (
      <div className="card aboutMe">
        <div className="row">
          <div className="col-12 col-md-4">
            <img src={Viaje} alt="Foto" className="fotoNevado img-fluid" />
          </div>
          <div className="col-12 col-md-8">
            <div className="card-body">
              <h2 className="card-title-aboutme fw-bold"> Sobre mí </h2>
              <p className="about-text">Me considero una persona muy curiosa, me encantan los animales, siempre con ganas de aprender algo nuevo.
                Creo que la mejor manera es a través de la experiencia, así que disfruto mucho viajar a lugares que requieran algún tipo de esfuerzo físico. También me apasiona montar en bicicleta, porque me desafía y sé que con disciplina y perseverancia puedo superar cualquier obstáculo. Y cuando estoy en casa, me gusta jugar juegos de mesa con mi familia, ¡es una forma genial de pasar el tiempo juntos y divertirnos!
              </p>  
            </div>
          </div>
        </div>
      </div>
    );
  }

