import "../../../assets/js/jquery.sticky"
import "../../../assets/js/jquery-3.3.1.min"
import "../../../assets/js/bootstrap.min"
import "../../../assets/js/popper.min"
import "../../../assets/css/bootstrap.min.css"
import "../../../assets/css/style.css"
import "../../../assets/fonts/icomoon/style.css"
import "./submit-story-view.css"
import Header from '../constants/header'
import Footer from '../constants/footer'

export const SubmitStoryView = () => {
  return (
    <>
      <Header/>
      <div class="container mt-5">
        <h2>Share Your Story</h2>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">What is your name?</label>
            <input type="text" class="form-control" id="name" placeholder=""></input>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">What is your email address?</label>
            <input type="email" class="form-control" id="email" placeholder=""></input>
          </div>
          <div class="mb-3">
            <label for="feedback" class="form-label">Please share your story with us:</label>
            <textarea class="form-control" id="feedback" rows="4" placeholder="This is a safe space, feel free to say anything"></textarea>
          </div>
          <button type="submit" class="btn btn-primary" style={{ backgroundColor: '#D3AC8B', color: '#C65363' }}>Submit</button>
        </form>
      </div>
      <Footer/>
      <div className="hero" style={{ backgroundColor: 'white' }}></div>
    </>
  )
}