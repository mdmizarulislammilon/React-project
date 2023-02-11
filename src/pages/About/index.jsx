import React from 'react'





import Imag from "../images/Md Mizarul Islam Milon.jpg"

export default function index() {
  return (
    <div>
      <div className="row">
        <div className="col-5">
           <img src={Imag} width="400px" className='aboutimg' alt="md Mizarul Islam Milon" />
        </div>
        <div className="col-7 abouttext">
           <h2>
            Md Mizarul Islam Milon
           </h2>
           <h3>
            Web Designer
           </h3>
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis itaque nihil quo nemo cum repudiandae similique libero dolorem voluptatibus sunt, dignissimos possimus magnam labore soluta expedita impedit assumenda tenetur earum illum maxime vero minima consequuntur. Quam suscipit alias, voluptate possimus sint dolorum
             provident, sapiente assumenda non quasi temporibus saepe.
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi libero aspernatur numquam praesentium similique
              consectetur alias architecto, ullam reprehenderit fugiat at, dolorum delectus earum eius odit sed aperiam molestiae ipsa ad? Aut quae ut aspernatur ducimus illum quidem rem voluptate quaerat, explicabo veniam molestias placeat corrupti fugiat incidunt perferendis labore ad officia eaque voluptatem provident saepe? Nobis molestiae similique omnis officiis dolorem provident, odit sint, tenetur consequatur vero nostrum et quis! Eos facilis, voluptatem animi molestias architecto autem dignissimos facere optio vero similique delectus aliquam doloribus aut, in cumque tenetur recusandae no
             n odio exercitationem adipisci assumenda commodi vel, eum ab?
           </p>
           <input className='btn bg-primary' type="button" value="Download CV" />
        </div>
      </div>

    </div>
  )
}
