//CommentForm.js
import React, { Component } from 'react';
import style from './style';
import { 
    Panel,
    Button,
    FormGroup,
    FormControl,
    ControlLabel,
    HelpBlock,
    OverlayTrigger,
    Tooltip
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


const tooltip = (
  <Tooltip id="tooltip"><strong>Enter a valid email address</strong> i.e, jdoe@middlebury.edu</Tooltip>
);


class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { author: '', text: '' };
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }
  handleMessageChange(e) {
    this.setState({ message: e.target.value });
  }
  handleEmailChange(e) {
      this.setState({ email: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let message = this.state.message.trim();
    let email = this.state.email.trim();
    if (!message || !author || !email) {
      return;
    }
    this.props.onPostSubmit({ author: author, message: message, email: email });
    this.setState({ author: '', message: '', email: '' });
  }
  render() {
    return (
        <Panel header={"Submit a question"} bsStyle="primary" style={ style.formStyle}>
      <form onSubmit={ this.handleSubmit }>
             <FieldGroup
                id="formControlsText"
                type="text"
                label="Enter Your Name"
                placeholder="Enter your name"
                value = {this.state.author}
                onChange={this.handleAuthorChange}
            />
            <OverlayTrigger placement="left" overlay={tooltip}>

    
            <FieldGroup
                id="formControlsText"
                type="text"
                label="Enter Your Email"
                placeholder="Enter your email"
                value = {this.state.email}
                onChange={this.handleEmailChange}
            />     
            </OverlayTrigger>
            <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Enter Your Message</ControlLabel>
                <FormControl componentClass="textarea" type='text' value={this.state.message} onChange={this.handleMessageChange} placeholder="Enter your message" />
            </FormGroup>
             <Button type="submit" value='Post'>
                Submit
                </Button>
      </form>
      </Panel>
    )
  }
}

export default PostForm;