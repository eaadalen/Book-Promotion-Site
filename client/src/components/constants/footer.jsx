import "../../../assets/js/jquery.sticky"
import "../../../assets/js/jquery-3.3.1.min"
import "../../../assets/js/bootstrap.min"
import "../../../assets/js/popper.min"
import "../../../assets/css/bootstrap.min.css"
import "../../../assets/css/style.css"
import "../../../assets/fonts/icomoon/style.css"
import "./footer.css"
import insta_logo from '../../../assets/img/insta.svg'
import x_logo from '../../../assets/img/x.svg'
import linkedin_logo from '../../../assets/img/linkedin.svg'

export default Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="contact-info">
          <h3>Contact</h3>
          <a href="#" title="YouTube">*Mailing Address*</a>
          <a href="#" title="Spotify">608-669-1379</a>
        </div>
        <div className="social-media">
          <h3>Social Media</h3>
          <a href="https://www.instagram.com/emmyann5/" target="blank"><img src={insta_logo} style={{ height: '35px' }}></img></a>
          <a href="https://x.com/home" target="blank"><img src={x_logo} style={{ height: '30px' }}></img></a>
          <a href="https://www.linkedin.com/in/emily-denure-6aa710327/" target="blank"><img src={linkedin_logo} style={{ height: '35px' }}></img></a>
        </div>
        <div className="causes">
          <h3>Important Causes</h3>
          <a href="https://www.safebarnetwork.org/donatenow" target="blank">Safe Bar Network</a>
          <a href="#">Kids Mental Health</a>
        </div>
      </div>
    </>
  )
}