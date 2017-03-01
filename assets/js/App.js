import React, { Component } from 'react';
import $ from 'jquery';
import Players from './Components/Players'
import FreeAgents from './Components/FreeAgents'

class App extends Component {
  constructor(){
    super();
    this.state = {
      players: [],
      freeAgents: []
    }
  }

  getPlayers(){
    $.ajax({
      url: 'http://localhost:8000/api/:players/',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({players: data}, function(){
        }
        );
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    })
  }

  getFreeAgents(){
    $.ajax({
      url: 'http://localhost:8000/api/:free-agents/',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({freeAgents: data}, function(){
        }
      );
    }.bind(this),
    error: function(xhr, status, err){
      console.log(err);
    }
    })
  }

  componentWillMount(){
    this.getPlayers();
    this.getFreeAgents();
  }


  render() {
    return (
      <div className="App">
        <Players players={this.state.players} />
        <FreeAgents freeAgents={this.state.freeAgents} />
      </div>
    );
  }
}

export default App;
