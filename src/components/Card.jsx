import PropTypes from 'prop-types';
import '../index.css';

export const Card = ({title,img,tecnologias,descripcion,gitHub,deploy}) => {
  return (
    <>
    <div className="card" >
            <img className="card-img-top" src={img} ></img>
                <div className="card-body">
                    <h5 className="card-title-proyect">{title}</h5>
                    <p className="card-descripcion">{descripcion}</p>
                </div>
                <div className="tecnologias">
                    {tecnologias.map((imagen, index) => (
                        <img className="tecnologia" key={index} src={imagen} alt={`Imagen ${index}`} />
                    ))}
                </div>
                <div className="card-body">
                    <a href={gitHub} className="card-link text-dark">GitHub</a>
                    <a href={deploy} className="card-link text-dark">Deploy</a>
                </div>
    </div>           
    </>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  gitHub: PropTypes.string.isRequired,
  deploy: PropTypes.string.isRequired,
  tecnologias: PropTypes.arrayOf(PropTypes.string).isRequired
};


