import React from 'react'
import { Footer } from './Footer'
import Navbar from './Navbar'
import Projectdata from'./Projectdata'
import Reactdata from './ReactData'
import HtmlData from './HtmlData'
import { Link } from 'react-router-dom'

export const ProjectReact = () => {
  return (
    <div>
    <Navbar/>
    <div className='space'></div>
    <div className="container-xxl py-6 pt-5 bg-dark text-white" id="project">
        <div className="container">
            <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-6">
                    <h1 className="display-5 mb-0">My Projects</h1>
                </div>
                <div className="col-lg-6 text-lg-end">
                    <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                      
                        <Link to="/Project">  <li className="mx-3  text-white " data-filter="*">All Projects</li></Link>
                        <Link to="/Html"> <li className="mx-3 text-white" data-filter=".first">Html and Css</li></Link>
                        <Link to="/React">  <li className="mx-3 active text-white" data-filter=".second">React</li></Link>
                       
                      
                    </ul>
                </div>
            </div>
            <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
              {Reactdata.map((details, index) => {
                return (
                  <>
                      <div className="col-lg-4 col-md-6 portfolio-item first">
                    <div className="portfolio-img rounded overflow-hidden">
                        <img className="img-fluid" src={details.cover} alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a>
                        </div>
                    </div>
                </div>
                  </>
                )
              })} 
            </div>
        </div>
    </div>
    <div className="container-xxl py-6 pb-5" id="team">
        <div className="container">
            <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-6">
                    <h1 className="display-5 mb-0">Team Members</h1>
                </div>
                <div className="col-lg-6 text-lg-end">
                    <a className="btn btn-primary py-3 px-5" href="">Contact Us</a>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item position-relative">
                        <img className="img-fluid rounded" src="img/IMG-20230118-WA0038.jpg" alt=""/>
                        <div className="team-text bg-white rounded-end p-4">
                            <div>
                                <h5>Full Name</h5>
                                <span>Designer</span>
                            </div>
                            <i className="fa fa-arrow-right fa-2x text-primary"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item position-relative">
                        <img className="img-fluid rounded" src="img/IMG-20230118-WA0040.jpg" alt=""/>
                        <div className="team-text bg-white rounded-end p-4">
                            <div>
                                <h5>Full Name</h5>
                                <span>Designer</span>
                            </div>
                            <i className="fa fa-arrow-right fa-2x text-primary"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item position-relative">
                        <img className="img-fluid rounded" src="img/IMG-20230118-WA0039.jpg" alt=""/>
                        <div className="team-text bg-white rounded-end p-4">
                            <div>
                                <h5>Full Name</h5>
                                <span>Designer</span>
                            </div>
                            <i className="fa fa-arrow-right fa-2x text-primary"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  


    <div className="container-fluid bg-light py-5 my-5" id="testimonial">
        <div className="container-fluid py-5">
            <h1 className="display-5 text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Testimonial</h1>
            <div className="row justify-content-center">
                <div className="col-lg-3 d-none d-lg-block">
                    <div className="testimonial-left h-100">
                        <img className="img-fluid wow fadeIn" data-wow-delay="0.1s" src="img/IMG-20230118-WA0038.jpg" alt=""/>
                        <img className="img-fluid wow fadeIn" data-wow-delay="0.3s" src="img/IMG-20230118-WA0039.jpg" alt=""/>
                        <img className="img-fluid wow fadeIn" data-wow-delay="0.5s" src="img/IMG-20230118-WA0040.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item text-center">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="img/IMG-20230118-WA0038.jpg" alt=""/>
                                <div className="testimonial-icon">
                                    <i className="fa fa-quote-left text-primary"></i>
                                </div>
                            </div>
                            <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <hr className="w-25 mx-auto"/>
                            <h5>Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div className="testimonial-item text-center">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="img/IMG-20230118-WA0039.jpg" alt=""/>
                                <div className="testimonial-icon">
                                    <i className="fa fa-quote-left text-primary"></i>
                                </div>
                            </div>
                            <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <hr className="w-25 mx-auto"/>
                            <h5>Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div className="testimonial-item text-center">
                            <div className="position-relative mb-5">
                                <img className="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="img/IMG-20230118-WA0040.jpg" alt=""/>
                                <div className="testimonial-icon">
                                    <i className="fa fa-quote-left text-primary"></i>
                                </div>
                            </div>
                            <p className="fs-5 fst-italic">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.</p>
                            <hr className="w-25 mx-auto"/>
                            <h5>Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 d-none d-lg-block">
                    <div className="testimonial-right h-100">
                        <img className="img-fluid wow fadeIn" data-wow-delay="0.1s" src="img/IMG-20230118-WA0038.jpg" alt=""/>
                        <img className="img-fluid wow fadeIn" data-wow-delay="0.3s" src="img/IMG-20230118-WA0039.jpg" alt=""/>
                        <img className="img-fluid wow fadeIn" data-wow-delay="0.5s" src="img/IMG-20230118-WA0040.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}
