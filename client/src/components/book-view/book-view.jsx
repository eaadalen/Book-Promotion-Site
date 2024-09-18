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
      <body>
         <div class="side-by-side">
            <div class="bio">
               <p>
               Suspendisse tellus tellus, ultricies sit amet nulla non, vehicula semper enim. Nulla malesuada, 
               tellus vitae dapibus vulputate, mi sem viverra arcu, eget finibus purus libero sit amet nulla. 
               Mauris ultrices ullamcorper libero vel aliquet. Cras vel lorem justo. Donec blandit, justo sit 
               amet mattis cursus, leo quam finibus elit, nec iaculis lorem enim vitae massa. Praesent a erat 
               eget ex congue tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
               cubilia curae; Vivamus vitae accumsan elit. Ut semper purus quis elit sagittis, vitae sollicitudin 
               sem sollicitudin. Sed sit amet arcu viverra, hendrerit ex in, commodo erat. Aenean ultrices ut 
               massa ut rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
               mus. Pellentesque metus lacus, suscipit ac urna mattis, consectetur aliquam nisi. Orci varius 
               natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum 
               primis in faucibus orci luctus et ultrices posuere cubilia curae; In vitae gravida nibh, sed 
               viverra ex.
               </p>
            </div>
            <div class="book_pic">
               <img src={book_pic} alt="Image description"></img>
            </div>
         </div>
      </body>
      <Footer/>
      <div className="hero" style={{ backgroundColor: 'white' }}></div>
    </>
  )
}