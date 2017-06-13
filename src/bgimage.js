import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Background from './images/image.jpeg';
import NaviBar from './navigationbar';
import './navbar.css';


var thePic = require('./images/image.jpeg');
var sectionStyle = {
  
  //height: "400px",*/
  //height: '350px',
    /* Center and scale the image nicely */  
  'height': '500',//350 is rougly half the page. 390 works better with the nav bar
  'backgroundPosition': 'center',
  'backgroundRepeat': 'no-repeat',
  'backgroundSize': 'cover',
  'backgroundImage': `url(${Background})`,
  'margin': '0',
  'padding':'1',
  'backgroundColor': 'black'
};


class Section extends Component {
  render() {
    return (
      <section style={ sectionStyle }>
        
        <div className="titles">
          <h3 className="headerTitle">Tutoring for the 21st Century</h3>
          <h4 className="subTitle">Find your courses, and collaborate more efficiently</h4>
        </div>
        <NaviBar></NaviBar>
        </section> 
    )
  }
}


export default Section