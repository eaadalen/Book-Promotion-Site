import "./welcome-view.css"
import "../../../assets/js/jquery.sticky"
import "../../../assets/js/jquery-3.3.1.min"
import "../../../assets/js/bootstrap.min"
import "../../../assets/js/popper.min"
import "../../../assets/css/bootstrap.min.css"
import "../../../assets/css/style.css"
import "../../../assets/fonts/icomoon/style.css"

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
                  <a href="index.html" className="text-black"><span style={{ color: '#c65363' }}>Emily DeNure</span></a>
               </div>
               <div className="col-12">
                  <nav className="site-navigation text-right ml-auto" role="navigation">
                     <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                        <li style={{ margin: '8.5px' }}><Link to={`/book`}>Book</Link></li>
                        <li style={{ margin: '8.5px' }}><Link to={`/about`}>About Me</Link></li>
                        <li style={{ margin: '8.5px' }}><Link to={`/youtube`}>Youtube</Link></li>   {/* Youtube link to be inserted later */}
                        <li style={{ margin: '8.5px' }}><Link to={`/spotify`}>Spotify</Link></li>
                        <li style={{ margin: '8.5px' }}><Link to={`/podcast`}>Podcast</Link></li>   {/* Podcast link to be inserted later */}
                        <li style={{ margin: '8.5px' }}><Link to={`/merch`}>Merch</Link></li>
                        <li style={{ margin: '8.5px' }}><Link to={`/causes`}>Important Causes</Link></li>
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
      <div className="hero" style={{ backgroundColor: 'white' }}></div>
    </>
  )
}