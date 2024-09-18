import "../../../assets/js/jquery.sticky"
import "../../../assets/js/jquery-3.3.1.min"
import "../../../assets/js/bootstrap.min"
import "../../../assets/js/popper.min"
import "../../../assets/css/bootstrap.min.css"
import "../../../assets/css/style.css"
import "../../../assets/fonts/icomoon/style.css"
import "./about-view.css"
import Footer from '../constants/footer'
import Header from '../constants/header'
import profile_pic from '../../../assets/img/profile-pic.jpg'

export const AboutView = () => {
  return (
    <>
      <Header/>
      <div className="side-by-side">
         <div className="profile_pic">
            <img src={profile_pic} alt="Image description"></img>
         </div>
         <div className="bio">
            <p>
              Emily DeNure is a speech-language pathologist working in low-income public schools and author of the memoir, 
              “The Story of Us”. DeNure applied the knowledge and experience within her academic and professional career 
              to her personal life in order to develop personally, confronting generational trauma and mental health 
              challenges. With her history of helping others, she often neglected to look inward towards self-actualization 
              and improvement. She was left with no choice but to embark on a healing journey in the start of her late 
              twenties. DeNure showcases the benefits of putting in the work. Her positivity shines through within her work 
              and writing in order to motivate others to take control of their life path and forgive themselves and others 
              for the missteps along the way. She shares her gift of feeling with the world through her writing. DeNure is 
              a self-published Indie author, with complete control over her narrative. By sharing her honest truth with the 
              world through her first publication, she hopes to open an avenue for others to share their own story of resilience.
            </p>
         </div>
      </div>
      <Footer/>
    </>
  )
}