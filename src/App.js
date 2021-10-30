import logo from './logo.svg';
import './App.css';
import a1 from './images/testi1.jpg';
import a2 from './images/testi2.jpg';
import a3 from './images/testi3.jpg';
import a4 from './images/testi4.jpg';
import a5 from './images/testi5.jpg';
import a6 from './images/testi6.jpg';
import a7 from './images/testi7.jpg';
import a8 from './images/testi8.jpg';
import a9 from './images/testi9.jpg';
import react from 'react';
import SimpleImageSlider from "react-simple-image-slider";


function App() {

  const images = [
    { url: a1 },
    { url: a2 },
    { url: a3 },
    { url: a4 },
    { url: a5 },
    { url: a6 },
    { url: a7 },
    { url: a8 },
    
  ];

  return (
    
    <div>
    <div className="headtablecontainer">
      <table className="headtable">
        <th>¿Quién soy?</th>
        <th>Servicios</th>
        <th>Contacto</th>
      </table>
    </div>  
    
    <table className="welcometable">
    <th>Yo soy Luis Alberto, psicólogo y desarrollador del potencial humano y organizacional, tengo más de 10 años dedicando mi existencia a la promoción de la salud mental y al incremento de consciencia de quienes forman parte de mis entrenamientos y servicios terapéuticos.
        Soy promotor de derechos humanos de niñas, niños y adolescentes; he participado como psicólogo y supervisor de internados y casas hogar en la CDMX; he coordinado el sistema de información delictiva de niñas, niños y adolescentes de la CDMX; he sido evaluador y supervisor de programas de asistencia social, así como coordinador de las áreas de cultura, recreación y deporte y psicología como parte de mis funciones dentro del Gobierno de la Ciudad de México. Me he desempeñado como docente, conferencista, capacitador, psicoterapeuta y entrenador de liderazgo personal.
        Deseo que puedas encontrar en estos servicios aquello que necesitas para transformar y vivir la vida que realmente deseas porque, ¿sabes qué? ¡Es posible!
    </th>
    <th>* imagen *</th>
    </table>


<div className="container-slider">

<div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="2000">
      <img src={a1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-interval="2000">
      <img src={a2} className="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item" data-interval="2000">
      <img src={a3} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
    

</div>

    <div className="servicetable">
    <ul>

      <li><a href="#popup">sercivio 1</a></li>
      <div id="popup" class="overlay">
            <div id="popupBody">
                <h2>Título de la ventana</h2>
                <a id="cerrar" href="#">&times;</a>
                <div class="popupContent">
                    <p>Este es el contenido</p>
                </div>
            </div>
        </div>


    </ul>
    </div>

    
    </div>
  );
}

export default App;
