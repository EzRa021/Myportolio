import React from 'react'
import { Footer } from './Footer'
import Navbar from './Navbar'


const Home = () => {
  return (
	<div>
	<Navbar/>
	<div className="container-fluid bg-dark" id="home" style={{marginBottom:"100px", height:""}}>
	<div className="container">
		<div className="row align-items-center pb-5 ">
			<div className="col-lg-6 py-6 pb-0 pt-lg-0 text-white"style={{marginTop:"100px"}}>
				<h3 className="text-primary mb-3 text-white">I'm</h3>
				<h1 className="display-3 mb-3 text-white">Badejo Olamide</h1>
				<p className="display-5 mb-3 text-white"> A Full Stack Web Developer</p>

				<h2 className="typed-text-output d-inline"></h2>
				<div className="typed-text d-none text-white">Web Designer, Web Developer, Front End Developer, Back End Developer</div>
				<div className="d-flex align-items-center pt-5">
					<a href="img/image.png" download="image" className="btn btn-primary py-3 px-4 me-5 text-white" >Download Resume</a>
					<button type="button" className="btn-play" data-bs-toggle="modal"
						data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
						<span></span>
					</button>
					<h5 className="ms-4 mb-0 d-none d-sm-block text-white">Play Video</h5>
				</div>
			</div>
			<div className="col-lg-6">
				<img className="img-fluid" src="img/pngwing.com.png" alt=""/>
			</div>
		</div>
	</div>
</div>
<Footer/>

	</div>
  )
}

export default Home