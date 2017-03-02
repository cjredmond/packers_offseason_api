import React, { Component } from 'react';

class FreeAgentItem extends Component {
  handleSubmit(e){
    if(1 === 2){
      alert('title is required');
    } else {
      console.log('hi')
      fetch('http://localhost:8000/api/:players',{
        method: 'POST',
        headers: {
          'Accept' : 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.props.freeAgent.name,
          position: this.props.freeAgent.position,
          cap_hit: this.props.freeAgent.cap_hit,
          dead_money: this.props.freeAgent.dead_money,
          user: this.props.freeAgent.user
        })
      })
      .then ( function (resp){
        console.debug(resp);
      })
      .catch(function(error) {
        console.error(error)
      })

  }}

  render(){
    var base = "http://localhost:8000/api/:free-agents/" + this.props.freeAgent.id

    return(
      <div className='free-agent'>
      <p>{this.props.freeAgent.name} : {this.props.freeAgent.position}</p>
      <a href={base}>Link</a>
      <form onSubmit={this.handleSubmit.bind(this)}>
      <input type='submit' value="Submit" />
      </form>
      </div>
    );
  }
}

FreeAgentItem.propTypes = {
  freeAgents: React.PropTypes.object,
}

export default FreeAgentItem;
