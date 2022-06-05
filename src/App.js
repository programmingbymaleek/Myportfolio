import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navigation/navbar";
import Header from "./components/header/header";
import ParticlesBG from "./components/particles/particles_bg";
import Aboutme from './components/aboutme/aboutme';
import Myservices from './components/myservices/myservices';
import Portfolio from './components/portfolio/portfolio';
import Experience from './components/experience/experience';



function App() {


  return (
    <>
      <ParticlesBG />
      <NavBar />
      <Header />
      <Aboutme />
      <Myservices />
      <Experience />
      <Portfolio />

    </>
  );
}

export default App;
