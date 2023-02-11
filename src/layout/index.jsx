import React from 'react'

import {Link} from 'react-router-dom'


import { FaFacebook , FaInstagram , FaTwitter } from "react-icons/fa";


export default function index() {
  return (
    <div>
        <nav className="navbar-expand-lg navbar navbar-dark bg-primary ">
            <div className="container-fluid">
                <a className="navbar-brand" >Protfolio</a> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                    <a className="nav-link text-light" href="/">Home</a>
                    </li>
                    <li className="nav-item " >
                    <a className="nav-link text-light" href="about">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="blogs">Blogs</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="servise" >Servise</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="contact" >Contact</a>
                    </li>
                </ul>
                </div>
                <div className='text-light '>
                    <FaFacebook className='m-2 '/>
                    <FaInstagram  className='m-2 ' />
                    <FaTwitter  className='m-2 '/>
                </div>
            </div>
        </nav>
      
    </div>
  )
}
