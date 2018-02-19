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
import Editor from './richtext'


import { FormGroup,
        ControlLabel,
        HelpBlock,
        Checkbox,
        Radio,
        FormControl,
        Button,
        mountNode,
        Grid,
        Row,
        Col,
        Panel,
        List,
        ListGroupItem,
        ListGroup,
        Accordion
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
      <a href="#"><li><Link to="/issues">Submit an issue</Link></li></a>
    </ul>
  </div>






  
  <Route exact path="/" component={Home}/>
  <Route path="/computerscience" component={ComputerScience}/>
  <Route path="/issues" component={Issues}/>
  <Route path="/topics" component={Topics}/>
</nav>

</Router>
)

var urlhaha = window.location.href;
urlhaha += 'api/comments'

const Home = () => (
   <div>
     <div className="bufferTop">
       <Grid>
         <Row className="show-grid">
         <Col xs={12} md={12}>
          <Panel style={ style.questStyle }>
            <h1>Welcome!</h1>
            <p>Welcome to Coursify -- a tutoring solution that will reduce redundancy, and make tutoring more efficient.<hr/></p>
              <ListGroup>
                <ListGroupItem header="Computer Science Forum" href="#"><Link to="/computerscience">CS0101, CS0150, CS0190, CS200, CS201, CS202</Link></ListGroupItem>
                <ListGroupItem header="Other Departments" bsStyle="danger">More courses coming soon!</ListGroupItem>
              </ListGroup>
          </Panel>
          <Accordion>
              <Panel header="Updates" eventKey="1" style={style.questStyle} bsStyle="danger">
                <b><i>This is currently a work in progress build. Check back for updates!</i></b>
                <ListGroup fill>
                  <ListGroupItem>6/22/17 -- UI updates: forum section allows cleaner division between components, especially useful for mobile users. Front page has been updated to reflect status of the site. You can submit a public issue <a href="#"><Link to="/issues">here</Link></a>.</ListGroupItem>
                </ListGroup>
                </Panel>

              <Panel header="Frequently Asked Questions" eventKey="2" style={style.questStyle} bsStyle="info">
                <ListGroup>
                  <ListGroupItem header="Common questions" bsStyle="danger">Coming soon!</ListGroupItem>
                </ListGroup>
              </Panel>
            </Accordion>
        </Col>
       </Row>
      </Grid>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
            <hr/>
            <p style={ style.footStyle }>&#9874; Built by Aumit Leon<br/>&copy; 2017</p>
            </Col>
          </Row>
          </Grid>
    
      </div>

  </div>
)

const ComputerScience = () => (
  
  <div className="bufferTop">
   <Quests/> 
   <Grid>
   <Row className="show-grid">
            <Col xs={12} md={12}>
            <hr/>
            <p style={ style.footStyle }>&#9874; Built by Aumit Leon<br/>&copy; 2017</p>
            </Col>
    </Row>
    </Grid>

 
  </div>
)

const Issues = () => (
  <div>
     <div className="bufferTop">
       <CommentBox
        url = 'http://forum-api-leon.herokuapp.com/api/comments'
        pollInterval={2000} />
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
            <hr/>
            <p style={ style.footStyle }>&#9874; Built by Aumit Leon<br/>&copy; 2017</p>
            </Col>
          </Row>
        </Grid>
    
      </div>

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