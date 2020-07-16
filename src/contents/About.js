import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class About extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="Computer Science" where="Faculty of Electrical Engineering Sarajevo" from="July 2018" to="Present"/>
</div>
)
}
}
export default About