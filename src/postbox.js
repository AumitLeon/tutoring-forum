//PostBox.js
import React, { Component } from 'react';
import axios from 'axios';
import PostList from './postlist';
import CommentForm from './commentform';
import style from './style';
import Section from './bgimage';
import PostForm from './postform'
import { 
    Panel,
    Button,
    FormGroup,
    FormControl,
    ControlLabel,
    HelpBlock,
    Grid,
    Row,
    Col
 } from 'react-bootstrap';

const title = (
    <h3>Questions and Answers</h3>
);

class ForumBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadPostsFromServer = this.loadPostsFromServer.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handlePostDelete = this.handlePostDelete.bind(this);
    this.handlePostUpdate = this.handlePostUpdate.bind(this);
  }
  loadPostsFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ data: res.data });
      })
  }
  handlePostSubmit(post) {
    let posts = this.state.data;
    post.id = Date.now();
    let newPosts = posts.concat([post]);
    this.setState({ data: newPosts });
    axios.post(this.props.url, post)
      .catch(err => {
        console.error(err);
        this.setState({ data: posts });
      });
  }
  handlePostDelete(id) {
    axios.delete(`${this.props.url}/${id}`)
      .then(res => {
        console.log('Post deleted');
      })
      .catch(err => {
        console.error(err);
      });
  }
  handlePostUpdate(id, post) {
    //sends the comment id and new author/text to our api
    axios.put(`${this.props.url}/${id}`, post)
      .catch(err => {
        console.log(err);
      })
  }
  componentDidMount() {
    this.loadPostsFromServer();
    setInterval(this.loadPostsFromServer, this.props.pollInterval);
  }
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col md={7} md={7}>
              <Panel header={title} bsStyle="success" style={ style.questStyle }>      
                <PostList
                  onPostDelete={ this.handlePostDelete }
                  onPostUpdate={ this.handlePostUpdate }
                  data={ this.state.data }/>
              </Panel>
            </Col>
            <Col md={5} md={5}>
              <PostForm onPostSubmit={ this.handlePostSubmit }/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default ForumBox;