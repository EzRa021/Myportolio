import React from 'react'
import { Footer } from './Footer'
import Navbar from './Navbar'

const AboutUs = () => {
  return (
    <div>
    <Navbar/>
    <div className="container-xxl py-6 bg-dark text-white" id="about">
        <div className="container  text-white">
            <div className="row g-5  text-white">
                <div className="col-lg-6 wow fadeInUp  text-white" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center mb-5">
                        <div className="years flex-shrink-0 text-center me-4">
                            <h1 className="display-1 mb-0 text-primary">3</h1>
                            <h5 className="mb-0  text-white">Years</h5>
                        </div>
                        <h3 className="lh-base mb-0  text-white">of working experience as a web designer & developer</h3>
                    </div>
                    <p className="mb-4  text-white">Since beginning my journey as a freelance designer over 2 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Afordable Prices</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>High Quality Product</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>On Time Project Delivery</p>
                    // <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row g-3 mb-4">
                        <div className="col-sm-6">
                            <img className="img-fluid rounded" src="img/about-1.jpg" alt=""/>
                        </div>
                        <div className="col-sm-6">
                            <img className="img-fluid rounded" src="img/about-2.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <h5 className="border-end pe-3 me-3 mb-0  text-white">Happy Clients</h5>
                        <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">20</h2>
                    </div>
                    <p className="mb-4  text-white"></p>
                    <div className="d-flex align-items-center mb-3">
                        <h5 className="border-end pe-3 me-3 mb-0  text-white">Projects Completed</h5>
                        <h2 className="text-primary fw-bold mb-0  text-white" data-toggle="counter-up">25</h2>
                    </div>
                    <p className="mb-0  text-white"></p>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default AboutUs
