import React from 'react'
import { Footer } from './Footer'
import Navbar from './Navbar'

const Services = () => {
  return (
    <div>
    <Navbar/>
    <div className="container-fluid bg-light  py-6" id="service">
    <div className="container">
        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
                <h1 className="display-5 mb-0">My Services</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
                <a className="btn btn-primary py-3 px-5" href="">Hire Me</a>
            </div>
        </div>
        <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                    <div className="bg-icon flex-shrink-0 mb-3">
                        <i className="fa fa-crop-alt fa-2x text-dark"></i>
                    </div>
                    <div className="ms-sm-4">
                        <h4 className="mb-3">Creative Design</h4>
                        <span className='text-dark'>I value simple content structure, clean design patterns, and thoughtful interactions. </span>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                    <div className="bg-icon flex-shrink-0 mb-3">
                        <i className="fa fa-code-branch fa-2x text-dark"></i>
                    </div>
                    <div className="ms-sm-4">
                        <h4 className="mb-3">Graphic Design</h4>
                        <span className='text-dark'>
                        i am a graphic design specializing in branding, branded illustration systems, and packaging. Our goal is to create meaningful and timeless design for our clients and their audience.</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                    <div className="bg-icon flex-shrink-0 mb-3">
                        <i className="fa fa-code fa-2x text-dark"></i>
                    </div>
                    <div className="ms-sm-4">
                        <h4 className="mb-3">Web Development</h4>
                        <span className='text-dark'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer/>
    </div>
  )
}

export default Services