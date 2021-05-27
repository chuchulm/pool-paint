import React from 'react';
import { Navbar } from './component/Navbar';
import img1 from './img/poolScreen.jpg'
import img2 from './img/pool1.jpg'
import img3 from './img/paint1.jpg'
import IconoWhatsapp from './component/iconoWhatsapp';


function App() {
  return (
    <>
    <header className="container-Header">
      <Navbar/>
      <IconoWhatsapp/>


      <div className="titulo">
        <h1>Design your dreams</h1>
      </div>
      
      <div className="container-img">
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt=""/>
        </div> 
        <div>
          <img src={img3} alt=""/>
        </div> 
      </div>
    </header>
    <footer>
      <div>pool&paint &copy;2021 todos los derechos reservados</div>
    </footer>
  </>
  );
}

export default App;
 