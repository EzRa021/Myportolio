import React from 'react'
import { Footer } from './Footer'
import Navbar from './Navbar'

export const Contact = () => {
  return (
    <div>
    <Navbar/>
    
    <div className="container-xxl pb-5 bg-white pt-5" id="contact">
        <div className="container py-5">
            <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-6">
                    <h1 className="display-5 mb-0">Let's Work Together</h1>
                </div>
                <div className="col-lg-6 text-lg-end">
                    <a className="btn btn-primary py-3 px-5" href="">Say Hello</a>
                </div>
            </div>
            <div className="row g-5">
                <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="mb-2">My office:</p>
                    <h3 className="fw-bold">8, Fashade close, Oregun, Ikeja, Lagos</h3>
                    <hr className="w-100"/>
                    <p className="mb-2">Call me:</p>
                    <h3 className="fw-bold">+2347082209428</h3>
                    <hr className="w-100"/>
                    <p className="mb-2">Mail me:</p>
                    <h3 className="fw-bold">Badejoezra0@gmail.com.com</h3>
                    <hr className="w-100"/>
                    <p className="mb-2">Follow me:</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <form method='post' to>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "100px"}}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
    <div className="container-xxl pt-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container-xxl pt-5 px-0">
        <div className="bg-dark">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.364699913302!2d3.362840613927181!3d6.601519024084965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b924f21755bd5%3A0xda73201f2ca1417e!2sFashade%20Cl%2C%20Oregun%20101233%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1674996345814!5m2!1sen!2sng" frameborder="0" style={{width: "100%", height: "450px", border:"0" }}allowfullscreen="" aria-hidden="false"
        tabindex="0"></iframe>
        </div>
    </div>
</div>
<Footer/>





    </div>
  )
}
