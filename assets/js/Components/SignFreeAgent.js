import React, { Component } from 'react';

class SignFreeAgent extends Component {
  constructor(){
    super();
    this.state = {
      newTeamPlayer:{}
    }
  }

  handleSubmit(e){
    console.log('submitted free agent button')
    fetch('http://localhost:8000/api/:free-agents/')
  }
}
