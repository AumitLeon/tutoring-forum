//Post.js
import React, { Component } from 'react';
import style from './style';
import marked from 'marked';
import { 
    Panel,
    Button,
    FormGroup,
    FormControl,
    ControlLabel,
    HelpBlock
 } from 'react-bootstrap';


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
class Post extends Component {
  constructor(props) {
    super(props);
    this.state= {
      toBeUpdated: false,
      author: '',
      message: '',
      email: ''
    };
    //binding all our functions to this class
    this.deletePost = this.deletePost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleEmailChange = this.handleMessageChange.bind(this);
    this.handlePostUpdate = this.handlePostUpdate.bind(this);
  }
  updatePost(e) {
    e.preventDefault();
    //brings up the update field when we click on the update link.
    this.setState({ toBeUpdated: !this.state.toBeUpdated });
  }
  handlePostUpdate(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    //if author or text changed, set it. if not, leave null and our PUT request
    //will ignore it.
    let author = (this.state.author) ? this.state.author : null;
    let message = (this.state.message) ? this.state.message : null;
    let email = (this.state.email) ? this.state.email : null;
    let post = { author: author, message: message, email: email};
    this.props.onPostUpdate(id, post);
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
      author: '',
      message: '',
      email: ''
    })
  }
  deletePost(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onPostDelete(id);
    console.log('oops deleted');
  }
  handleMessageChange(e) {
    this.setState({ message: e.target.value });
  }
  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }
  handleEmailChange(e) {
      this.setState({ email: e.target.value});
  }
  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  }





  render() {
    return (
      <div>
        <Panel header={this.props.author +" --- "+ this.props.email}>  
        <span dangerouslySetInnerHTML={ this.rawMarkup() } />
        <a style={ style.updatePostLink }href='#' onClick={ this.updatePost }>update</a>
        <a style={ style.deletePostLink }href='#' onClick={ this.deletePost }>delete</a>
        { (this.state.toBeUpdated)
          ? (<form onSubmit={ this.handlePostUpdate }>
            <FieldGroup
                id="formControlsText"
                type="text"
                label="Enter Your Name"
                placeholder="Enter your name"
                value = {this.state.author}
                onChange={this.handleAuthorChange}
            />    
            <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Enter Your Message</ControlLabel>
                <FormControl componentClass="textarea" type='text' value={this.state.message} onChange={this.handleMessageChange} placeholder="Enter your message" />
            </FormGroup>
             <Button type="submit">
                Submit
                </Button>
            </form>)
          : null}
          </Panel>
      </div>
    )
  }
}

export default Post;