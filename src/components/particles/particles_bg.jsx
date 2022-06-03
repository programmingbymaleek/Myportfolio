import './particles.style.scss'
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";
import ParticleConfig from "./config"
const ParticlesBG = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (<Particles id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={ParticleConfig}
  />
  );
}
export default ParticlesBG