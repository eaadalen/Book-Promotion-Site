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
      <header className="site-navbar js-sticky-header site-navbar-target" role="banner">
         <div className="container">
            <div className="row align-items-center position-relative">
               <div className="site-logo">
                  <a href="index.html" className="text-black"><span style={{ color: '#C65363' }}>Emily DeNure</span></a>
               </div>
               <div className="col-12">
                  <nav className="site-navigation text-right ml-auto" role="navigation">
                     <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                        <li style={{ marginLeft: '15px', marginRight: '15px' }}><Link to={`/`}>About Me</Link></li>
                        <li style={{ marginLeft: '15px', marginRight: '15px' }}><Link to={`/book`}>Memoir</Link></li>
                        <li style={{ marginLeft: '15px', marginRight: '15px' }}><Link to={`/merch`}>Merch</Link></li>
                        <li style={{ marginLeft: '15px', marginRight: '15px' }}><Link to={`/submitstory`}>Share Your Story</Link></li>
                        <li style={{ marginLeft: '15px', marginRight: '15px' }} className="has-children">
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
            </div>
         </div>
      </header>
    </>
  )
}