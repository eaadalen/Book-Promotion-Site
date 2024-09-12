import "../../../assets/js/jquery.sticky"
import "../../../assets/js/jquery-3.3.1.min"
import "../../../assets/js/bootstrap.min"
import "../../../assets/js/popper.min"
import "../../../assets/css/bootstrap.min.css"
import "../../../assets/css/style.css"
import "../../../assets/fonts/icomoon/style.css"
import "./welcome-view.css"
import insta_logo from '../../../assets/img/insta.svg'
import x_logo from '../../../assets/img/x.svg'
import linkedin_logo from '../../../assets/img/linkedin.svg'

import { Link } from "react-router-dom";

export const WelcomeView = () => {
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
         <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
               <span className="icon-close2 js-menu-toggle"></span>
            </div>
         </div>
         <div className="site-mobile-menu-body"></div>
      </div>
      <header className="site-navbar js-sticky-header site-navbar-target" role="banner">
         <div className="container">
            <div className="row align-items-center position-relative">
               <div className="site-logo">
                  <a href="index.html" className="text-black"><span style={{ color: '#C65363' }}>Emily DeNure</span></a>
               </div>
               <div className="col-12">
                  <nav className="site-navigation text-right ml-auto" role="navigation">
                     <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                        <li style={{ margin: '15px' }}><Link to={`/book`}>Book</Link></li>
                        <li style={{ margin: '15px' }}><Link to={`/about`}>About Me</Link></li>
                        <li style={{ margin: '15px' }}><Link to={`/youtube`}>Youtube</Link></li>   {/* Youtube link to be inserted later */}
                        <li style={{ margin: '15px' }}><Link to={`/podcast`}>Podcast</Link></li>   {/* Podcast link to be inserted later */}
                        <li style={{ margin: '15px' }}><Link to={`/merch`}>Merch</Link></li>
                        {/* <li className="has-children">
                           <a href="#about-section" className="nav-link">About Us</a>
                           <ul className="dropdown arrow-top">
                              <li><a href="#team-section" className="nav-link">Team</a></li>
                              <li><a href="#pricing-section" className="nav-link">Pricing</a></li>
                              <li><a href="#faq-section" className="nav-link">FAQ</a></li>
                              <li className="has-children">
                                 <a href="#">More Links</a>
                                 <ul className="dropdown">
                                    <li><a href="#">Menu One</a></li>
                                    <li><a href="#">Menu Two</a></li>
                                    <li><a href="#">Menu Three</a></li>
                                 </ul>
                              </li>
                           </ul>
                        </li>*/}
                     </ul>
                  </nav>
               </div>
               <div className="toggle-button d-inline-block d-lg-none"><a href="#" className="site-menu-toggle py-5 js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>
            </div>
         </div>
      </header>
      <div class="footer">
        <div class="contact-info">
          <h3>Contact</h3>
          <a href="#" title="YouTube">*Mailing Address*</a>
          <a href="#" title="Spotify">608-669-1379</a>
        </div>
        <div class="social-media">
          <h3>Social Media</h3>
          <a href="https://www.instagram.com/emmyann5/" target="blank"><img src={insta_logo} style={{ height: '35px' }}></img></a>
          <a href="https://x.com/home" target="blank"><img src={x_logo} style={{ height: '30px' }}></img></a>
          <a href="https://www.linkedin.com/in/emily-denure-6aa710327/" target="blank"><img src={linkedin_logo} style={{ height: '35px' }}></img></a>
        </div>
        <div class="content-all">
          <h3>Content</h3>
          <a href="#">YouTube</a>
          <a href="#">Podcast</a>
          <a href="#">Band</a>
        </div>
        <div class="causes">
          <h3>Important Causes</h3>
          <a href="https://www.safebarnetwork.org/donatenow" target="blank">Safe Bar Network</a>
          <a href="#">Rural Mental Health</a>
          <a href="#">Kids Mental Health</a>
        </div>
      </div>
      <div className="hero" style={{ backgroundColor: 'white' }}></div>
    </>
  )
}