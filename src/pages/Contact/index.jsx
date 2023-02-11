import React from 'react'
import { FaFacebook , FaInstagram , FaTwitter,FaYoutube } from "react-icons/fa";
export default function index() {
  return (
    <div>
        <div className="row">
          <h2 className='text-center my-5'> --Contact Me--</h2>
          <div className="col-6">
            <address className="p-5" >
              <h2>Md Mizarul islam Milom</h2>
              <h3>Shepur Bangladesh</h3>
              <br/>
              <br/>
              <p>
                <b>Phone:</b> +8801789108614
              </p>
              
              <p>
                <b>Email:</b> milonmedia@gmail.com
              </p>
              <p>
                <b>Websitel:</b> mizarulislam.com
              </p>
              <p>
                <FaFacebook className='m-2 '/>
                <FaInstagram className='m-2 '/>
                <FaTwitter className='m-2 '/>
                <FaYoutube className='m-2 '/>

              </p>

            </address>

          </div>
          <div className="col-6">
            <div>
            <div className="mapouter">
              <div className="gmap_canvas">
              <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=shepur&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
              
               
                
            
                
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}
