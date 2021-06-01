import React from 'react'
import { Link } from "react-router-dom";


export const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark navBar-fixed position-sticky">
             <div className="container-fluid">
               <a className="navbar-brand" href="#">Pool&Paint</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
               </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                   <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#">Home</a>
                   </li>
                   <li className="nav-item">
                     <a className="nav-link active" href="#">Company</a>
                   </li>
                   <li className="nav-item dropdown ">
                     <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Services
                     </a>
                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                       <li><Link className="dropdown-item" to="#">Action</Link></li>
                       <li><Link className="dropdown-item" to="#">Another action</Link></li>
                       <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                     </ul>
                   </li>
                   
                 </ul>

                 <div className="redes">
                  
                  <a href="https://www.facebook.com/Lemom-accesorios-+0014077790547" target="blank" title="Facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com/lemom.accesorios/" target="blank" title="Instagram"><i className="fab fa-instagram"></i></a>
                  <a href="https://api.whatsapp.com/send?phone=+0014077790547&text=welcome%20a%20Pool&paint%20estamos%20para%20ayudarte" target="blank" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                  
                 </div>
                
                 <Link to="/login"><button className="btn btn-outline-light" type="submit">Login</button></Link>
                
                 
                 
                </div>
             </div>
        </nav>
            
            
    
    )
}
