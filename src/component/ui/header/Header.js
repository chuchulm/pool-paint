import React from 'react'
import { Navbar } from '../../../component/ui/Navbar';
import { Link } from "react-router-dom";
import img1 from '../../../img/poolScreen.jpg'
import img2 from '../../../img/pisoMadera.jpg'
import img3 from '../../../img/paint1.jpg'
import img4 from '../../../img/poolScreenlogo.png'
// import img4 from '../../../img/fitpoolScreenblack.png'
// import img4 from '../../../img/logof.png'

export const Header = () => {
    return (
      <header className="container-Header">
               <Navbar/>
               
         
         
               <div className="titulo">
                 
                 <h1>"Just say what you need and we will help you"</h1>
                 <img src={img4} alt="ifixPoolScreens"/>
               </div>
         
              <div className="container-img">
                 <div className="container-screen">
                     <Link to="/fixscreen"><img src={img1} alt="" /></Link> 
                 </div>

                 <div className="container-screen">
                     <Link to="/floor"><img src={img2} alt="" /></Link> 
                 </div>

                 <div className="container-screen">
                     <Link to="/paint"><img src={img3} alt="" /></Link> 
                 </div>
              </div>
      </header>
    )
}








