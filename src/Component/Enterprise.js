import React from 'react'
import { Footer } from './Footer'
import Navbar from './Navbar'

export const Enterprise = () => {
    
  return (
    <div>
    <Navbar/>
    <div className="container-xxl py-6 pb-5 bg-dark text-white" id="skill">
    <div className="container">
        <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp  text-white" data-wow-delay="0.1s">
                <h1 className="display-5 mb-5  text-white">Skills & Experience</h1>
                <p className="mb-4  text-white">Since beginning my journey as a freelance designer over 1 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
                <h3 className="mb-4  text-white">My Skills</h3>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold  text-white">HTML</h6>
                                <h6 className="font-weight-bold  text-white">95%</h6>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between  text-white">
                                <h6 className="font-weight-bold  text-white">CSS</h6>
                                <h6 className="font-weight-bold text-white">85%</h6>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold  text-white">Bootstrap</h6>
                                <h6 className="font-weight-bold  text-white">90%</h6>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold  text-white">Javascript</h6>
                                <h6 className="font-weight-bold text-white">90%</h6>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold  text-white">React.JS</h6>
                                <h6 className="font-weight-bold  text-white">95%</h6>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold text-white">Python(Django)</h6>
                                <h6 className="font-weight-bold text-white">85%</h6>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
                    <li className="nav-item w-50">
                        <button className="nav-link w-100 py-3 fs-5 active text-white" data-bs-toggle="pill" href="#tab-1">Experience</button>
                    </li>
                    <li className="nav-item w-50">
                        <button className="nav-link w-100 py-3 fs-5 text-white" data-bs-toggle="pill" href="#tab-2">Education</button>
                    </li>
                </ul>
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row gy-5 gx-4">
                            <div className="col-sm-6">
                                <h5 className=' text-white'>Product Designer</h5>
                                <hr className="text-primary my-2"/>
                                <p className="text-primary mb-1">2000 - 2045</p>
                                <h6 className="mb-0 text-white">Codar Institution</h6>
                            </div>
                            <div className="col-sm-6">
                                <h5 className=' text-white'>Web Developer</h5>
                                <hr className="text-primary my-2"/>
                                <p className="text-primary mb-1">2021- 2022</p>
                                <h6 className="mb-0 text-white">Codar Institution</h6>
                            </div>
                        </div>
                    </div>
                    <div id="tab-2" className="tab-pane fade show p-0">
                        <div className="row gy-5 gx-4">
                            <div className="col-sm-6">
                                <h5 className=' text-white'>Economic</h5>
                                <hr className="text-primary my-2"/>
                                <p className="text-primary mb-1">2019 - 2022</p>
                                <h6 className="mb-0 text-white">University of Ibadan</h6>
                            </div>
                            <div className="col-sm-6">
                                <h5>Web Development</h5>
                                <hr className="text-primary my-2"/>
                                <p className="text-primary mb-1">2020 - 2022</p>
                                <h6 className="mb-0 text-white">Codar Institution</h6>
                            </div>
                        </div>
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
