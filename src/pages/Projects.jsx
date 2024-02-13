import React from 'react'
import Contactus from './Contactus'
import banner from '../assets/assets/banner.png'
import logo from '../assets/assets/logo.png'
import thumbnail from '../assets/assets/thumb.png'
import { Link } from 'react-router-dom'
export default function Projects() {
  return (
    <>
      <div>
        <div className="container my-5">
          <div className="head text-center">
            <p>Browse My Recent</p>
            <h3>Projects</h3>
          </div>
          <div className="row">
            <div className="col-md-3 my-2 offset-sm-1">
              <div className="card">
                <div className="card-heading">
                  <img src={thumbnail} alt="" className='img-fluid p-3' />
                </div>
                <div className="card-body">
                  <h3 className="text-center">Thumbnails</h3>
                  <div className="d-flex gap-2">
                    <Link to='/wsp'>                    <button className="btn btn-outline-dark rounded-pill">Demo</button></Link>
                    <button className="btn btn-outline-dark rounded-pill">Behance</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-2 offset-sm-1">
              <div className="card">
                <div className="card-heading">
                  <img src={logo} alt="" className='img-fluid p-3' />
                </div>
                <div className="card-body">
                  <h3 className="text-center">Logo</h3>
                  <div className="d-flex gap-2">
                    <Link to="/wsp" ><button className="btn btn-outline-dark rounded-pill">Demo</button></Link>
                    <button className="btn btn-outline-dark rounded-pill">Behance</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-2 offset-sm-1">
              <div className="card">
                <div className="card-heading">
                  <img src={banner} alt="" className='img-fluid p-3' />
                </div>
                <div className="card-body">
                  <h3 className="text-center">Banners</h3>
                  <div className="d-flex gap-2">
                    <Link to="/wsp" ><button className="btn btn-outline-dark rounded-pill">Demo</button></Link>
                    <button className="btn btn-outline-dark rounded-pill">Behance</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contactus />
    </>
  )
}
