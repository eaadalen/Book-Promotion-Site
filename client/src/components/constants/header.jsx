import "../../../assets/js/jquery.sticky"
import "../../../assets/js/jquery-3.3.1.min"
import "../../../assets/js/bootstrap.min"
import "../../../assets/js/popper.min"
import "../../../assets/css/bootstrap.min.css"
import "../../../assets/css/style.css"
import "../../../assets/fonts/icomoon/style.css"
import "./header.css"

import { Link } from "react-router-dom";

export default Header = () => {
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
                        <li style={{ margin: '15px' }}><Link to={`/`}>Book</Link></li>
                        <li style={{ margin: '15px' }}><Link to={`/about`}>About Me</Link></li>
                        <li style={{ margin: '15px' }}><Link to={`/merch`}>Merch</Link></li>
                        <li style={{ margin: '15px' }} className="has-children">
                           <a className="nav-link">Content</a>
                           <ul className="dropdown arrow-top">
                              <li><a href="https://www.youtube.com/" className="nav-link" target="blank">YouTube Channel</a></li>
                              <li><a href="https://riverside.fm/dashboard/studios/edenures-studio/recordings/6db28fc0-fcde-44fa-b596-f860516221ae?share-token=556dd2615fa0fa8c3cf8" className="nav-link" target="blank">Podcast</a></li>
                              <li><a href="https://open.spotify.com/" className="nav-link" target="blank">Band</a></li>
                           </ul>
                        </li>
                     </ul>
                  </nav>
               </div>
               <div className="toggle-button d-inline-block d-lg-none"><a href="#" className="site-menu-toggle py-5 js-menu-toggle text-black"><span className="icon-menu h3"></span></a></div>
            </div>
         </div>
      </header>
    </>
  )
}