const ParticleConfig =
{
  background: {
    color: {
      value: "",
    },
  },
  fullScreen: {
    enable: false,//removing the inline !important
    zIndex: 1
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0,
      },
    },
  },
  particles: {
    color: {
      value: "#FFA500",
    },
    links: {
      color: "#FFA500",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        // default: "bounce",
      },
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
      stroke: {
        width: 2
      }
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
}
export default ParticleConfig