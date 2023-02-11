import React from 'react'
import Img from "../images/mizarul.png"





function index(){
  

  return (
    <div>
        <div className="row Homestyle">
          <div className="col-6">
            <p>Hello</p>
            <h2>
              I'M <span className='textcolor'>
              Md Mizarul Islam Milon 
              </span>
            </h2>
            <h3>Web Desiner</h3>
            <h4>
              Sherpur, Bangladesh
            </h4>
           <input type="button" className='btn bg-primary text-light'  value=" Hire Me" />

          </div>
          <div className="col-6">
            <img className='HomeImage' src={Img} width='450px' height={'500px'} alt="Img" />

         
            
          </div>
        </div>
      
    </div>
  )
}

export default index
