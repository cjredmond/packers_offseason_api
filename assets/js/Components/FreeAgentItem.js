import React, { Component } from 'react';

class FreeAgentItem extends Component {
  render(){
    return(
      <div className='free-agent'>
      <p>{this.props.freeAgent.name} : {this.props.freeAgent.position}</p>
      </div>
    );
  }
}

FreeAgentItem.propTypes = {
  freeAgents: React.PropTypes.object,
}

export default FreeAgentItem;
