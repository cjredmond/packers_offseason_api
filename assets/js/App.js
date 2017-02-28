import React, { Component } from 'react';
import $ from 'jquery';
import Players from './Components/Players'

class App extends Component {
  constructor(){
    super();
    this.state = {
      players: []
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

  componentWillMount(){
    this.getPlayers();
  }


  render() {
    return (
      <div className="App">
        <Players players={this.state.players} />
      </div>
    );
  }
}

export default App;
