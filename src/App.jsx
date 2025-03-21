
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import HomeComponent from './components/HomeComponent'
import Skills from './components/Skills'
import Header from './components/SkillsHeader'
import ThreeDCard from './components/ThreeDCard'
import cartier from './utils/image/cartier.png'
import gemini from './utils/image/gemini.png'
import jiva from './utils/image/jiva.png'
import movie from './utils/image/movie.png'
import yoga from './utils/image/yoga.png'
import talksy from './utils/image/talksy.png'
import foodBajar from './utils/image/foodBajar.png'
import FooterComponent from './components/FooterComponent'
import { StarsBackground } from './components/ui/stars-background'
import { ShootingStars } from './components/ui/shooting-star'
import Contact from './components/ContactUs'
import { Bounce, ToastContainer } from 'react-toastify'


function App() {

  return (
    <>
    <StarsBackground className="fixed bg-[#020617] top-0 left-0 w-full h-full -z-10"/> 
    <ShootingStars className="fixed top-0 left-0 w-full h-full -z-10"/>
    
    <div className=' relative w-[100%] '>
      <HeaderComponent/>
      <HomeComponent/>
      <Skills />
      <div id='Projects' className='w-[100%]'>
          <Header title="PROJECTS"/>
          <div className='w-[100%]   flex flex-wrap gap-12 justify-center items-center px-12'>
              <ThreeDCard imgUrl={talksy} name={"Talksy"} para={"Talksy is real-time chat app with instant messaging, image sharing, WhatsApp-like UI." } github={"https://github.com/Sanni-Singh/Talksy"} hosted={"https://talksy-y3vl.onrender.com"}/>
              <ThreeDCard imgUrl={movie} name={"Movie Bajar"} para={"A Movie frontend App built using ReactJS, TailwindCSS and Redux for state management." } github={"https://github.com/Sanni-Singh/Movies-Bajar-AI"} hosted={"https://movies-bajar-ai.vercel.app/"}/>

              <ThreeDCard imgUrl={foodBajar} name={"Food Bajar"} para={"Food Bajar is an interactive food ordering app to explore brands, search restaurants, view menus, and order." } github={"https://github.com/Sanni-Singh/Food-Bajar"} hosted={"https://food-bajar.vercel.app/"}/>
              <ThreeDCard imgUrl={gemini} name={"Gemini Clone"} para={"A Google Gemini clone build with JavaScript,Html,Css and Gemini API."} github={"https://github.com/Sanni-Singh/Gemini-Clone"} hosted={"https://gemini-clone-khaki-omega.vercel.app/"}/>
              <ThreeDCard imgUrl={yoga} name={"Meditation-YOGA"} para={"A Meditation-YOGA App build with JavaScript,Html & Css."} github={"https://github.com/Sanni-Singh/Meditation-YOGA"} hosted={"https://sanni-singh.github.io/Meditation-YOGA/"}/>
              <ThreeDCard imgUrl={cartier} name={"Cartier Clone"} para={"A Cartier frontend Clone  built using JavaScript, CSS and HTML."} github={"https://github.com/Sanni-Singh/Cartier?tab=readme-ov-file"} hosted={"https://shiny-flan-2f930f.netlify.app/"}/>
              <ThreeDCard imgUrl={jiva} name={"Jiva AI"} para={"A Google AI build with JavaScript,Html,Css."} github={"https://github.com/Sanni-Singh/JIVA-AI"} hosted={"https://resilient-hummingbird-348ba8.netlify.app/"}/>
          </div>
      </div>
      <Contact />

      <FooterComponent />

    </div>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}/>
    </>
  )
}

export default App
