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
            		particles: {
                        polygon: {
                            enable: true,
                            type: 'inside',
                            move: {
                                radius: 10
                            },
                            color: 'black'
                        }, 
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "black",
            					blur: 5
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
</div>
)
}
}
export default Home;