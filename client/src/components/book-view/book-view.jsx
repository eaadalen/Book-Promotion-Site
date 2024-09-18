import "../../../assets/js/jquery.sticky"
import "../../../assets/js/jquery-3.3.1.min"
import "../../../assets/js/bootstrap.min"
import "../../../assets/js/popper.min"
import "../../../assets/css/bootstrap.min.css"
import "../../../assets/css/style.css"
import "../../../assets/fonts/icomoon/style.css"
import "./book-view.css"
import book_pic from '../../../assets/img/book-cover.jpg'
import Header from '../constants/header'
import Footer from '../constants/footer'

export const BookView = () => {
  return (
    <>
      <Header/>
      <div className="side-by-side">
         <div className="description">
            <p>
            Suspendisse tellus tellus, ultricies sit amet nulla non, vehicula semper enim. Nulla malesuada, 
            tellus vitae dapibus vulputate, mi sem viverra arcu, eget finibus purus libero sit amet nulla. 
            Mauris ultrices ullamcorper libero vel aliquet. Cras vel lorem justo. Donec blandit, justo sit 
            amet mattis cursus, leo quam finibus elit, nec iaculis lorem enim vitae massa. Praesent a erat 
            eget ex congue tempor. 
            </p>
            <iframe 
              style={{ borderRadius: '12px', padding: '20px' }}
              src="https://open.spotify.com/embed/playlist/2cfedvKmWwa0pe1ylMZBsF?utm_source=generator" 
              width="95%" 
              height="200px" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="eager">
            </iframe>
         </div>
         <div className="book_pic">
            <img src={book_pic} alt="Image description"></img>
         </div>
      </div>
      <Footer/>
      <div className="hero" style={{ backgroundColor: 'white' }}></div>
    </>
  )
}