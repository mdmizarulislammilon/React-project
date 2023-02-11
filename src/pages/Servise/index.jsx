import React from 'react'
import A from "../images/image_01.jpg"
import B from "../images/image_02.jpg"
import C from "../images/image_03.jpg"
import D from "../images/image_04.jpg"
import E from "../images/image_05.jpg"
import F from "../images/image_06.jpg"


export default function index() {
  return (
    <div>
      <h2 className='text-center my-5'> -Our Services--</h2>
      <div className="row Servise">
        <div className="col-4 ser">
          <img src={A} alt="Image" />

           <h2> Web Design</h2>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
           </p>
           
        </div>
        <div className="col-4 ser">
          <img src={B} alt="Image" />

           <h2> Web Devlopment</h2>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
           </p>
           
        </div>
        <div className="col-4 ser">
          <img src={C} alt="Image" />

           <h2> PSD to HTML</h2>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
           </p>
           
        </div>
        
      </div>
      <div className="row">
        <div className="col-4 ser">
          <img src={D} alt="Image" />

           <h2> Web Design</h2>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
           </p>
           
        </div>
        <div className="col-4 ser">
          <img src={E} alt="Image" />

           <h2> Web Devlopment</h2>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
           </p>
           
        </div>
        <div className="col-4 ser">
          <img src={F} alt="Image" />

           <h2> PSD to HTML</h2>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
           </p>
           
        </div>
        
      </div>
    </div>
  )
}
