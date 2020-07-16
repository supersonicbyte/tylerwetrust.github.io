import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/mirza.png';
import Social from '../components/Social';
import Particles from 'react-particles-js';
class Home extends Component {
render() {
return (
<div className="condiv home">
<img src={profilepic} className="profilepic"></img>
<ReactTypingEffect className="typingeffect" text={['Mirza Učanbarlić']} speed={100} eraseDelay={700}/>
<Social />
<Particles 
              params={{
                "particles": {
                  "number": {
                    "value": 200,
                    "density": {
                      "enable": true,
                      "value_area": 1500
                    }
                  },
                  "color": {
                    "value": "#000000"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 3,
                      "color": "#000000"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                  
                  },
                  "opacity": {
                    "value": 1,
                    "random": false,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 1,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#000000",
                    "opacity": 0.4,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": true,
                      "mode": "grab"
                    },
                    "onclick": {
                      "enable": true,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 150,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true    
            	}}
              style={{
                width: '100%',
                height: '100%',
                position: 'fixed',
              }}
            />
</div>
)
}
}
export default Home;