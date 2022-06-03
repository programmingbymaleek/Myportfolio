import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navigation/navbar";
import Header from "./components/header/header";
import ParticlesBG from "./components/particles/particles_bg";
import Aboutme from './components/aboutme/aboutme';
import Myservices from './components/myservices/myservices';
import Portfolio from './components/portfolio/portfolio';



function App() {


  return (
    <>
      <ParticlesBG />
      <NavBar />
      <Header />
      <Aboutme />
      <Myservices />
      <Portfolio />

    </>
  );
}

export default App;
