import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './commentbox';
import style from './style'
import BasicExample from './basicexample';
import NaviBar from './navigationbar';
import './navbar.css';
import Section from './bgimage';


ReactDOM.render(
  <div className="lol">
  <Section/>
  <CommentBox
    url='http://localhost:3001/api/comments'
    pollInterval={2000} />
    </div>,
  document.getElementById('root')
);
