import React from 'react'
import Vector from './components/Vector.png';
import I4G from './components/I4G.png';

function Footer() {
  return (
    <>
    <div className='container'>
          <div className='footerContent'>
          <div className="row d-flex justify-content-between">
            <div className="col-sm-3">
                <img src={Vector} alt='' />
            </div>

            <div className="col">
            <div className='footerText'> 
              HNG Internship 9 Frontend Task
            </div>
            </div>

             <div className="col-sm-2">
              <img src={I4G} alt=''/> 
            </div>

            </div>
          </div>
        </div>
</>
  )
}

export default Footer;