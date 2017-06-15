// nav bar
//CommentBox.js
import React from 'react'
import CommentBox from './commentbox'
import style from './style'
import './navbar.css';
import Background from './images/image.jpeg'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import headerimage from './headerimg.js'
import FormInst from './form.js'
import Section from './bgimage';
import PostForm from './postform'


import { FormGroup,
        ControlLabel,
        HelpBlock,
        Checkbox,
        Radio,
        FormControl,
        Button,
        mountNode
 } from 'react-bootstrap';
 import Quests from './displayQuestions'




const NaviBar = () => (
    <Router>
      


<nav role="navigation">
    <h3 className="siteName">COURSIFY &beta;</h3>
  <div id="menuToggle">

    <input type="checkbox" />

    <span></span>
    <span></span>
    <span></span>
    
   
    <ul id="menu">
      <a href="#"><li><Link to="/">Home</Link></li></a>
      <a href="#"><li><Link to="/computerscience">Computer Science</Link></li></a>
      <a href="http://aumitleon.com/" target="_blank"><li>Portfolio</li></a>
      <a href="https://github.com/AumitLeon/tutoring-forum" target="_blank"><li>Code</li></a>
      <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
    </ul>
  </div>






  
  <Route exact path="/" component={Home}/>
      <Route path="/computerscience" component={ComputerScience}/>
      <Route path="/topics" component={Topics}/>
</nav>

</Router>
)

var urlhaha = window.location.href;
urlhaha += 'api/comments'

const Home = () => (
   <div>
     <div className="bufferTop">
       <CommentBox
        url = 'http://forum-api-leon.herokuapp.com/api/comments'
        pollInterval={2000} />
      </div>

  </div>
)

const ComputerScience = () => (
  
  <div className="bufferTop">
   <Quests/> 

 
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default NaviBar