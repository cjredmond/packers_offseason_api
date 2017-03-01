import React, { Component } from 'react';
import FreeAgentItem from './FreeAgentItem';

class FreeAgents extends Component {
  render() {
    let packersPlayers;
    if(this.props.freeAgents){
      packersPlayers = this.props.freeAgents.map(freeAgent => {
        if(freeAgent.on_team === true){
          return(
            <FreeAgentItem key={freeAgent.name} freeAgent={freeAgent}/>
          )
        }
      })
    }
    return(
      <div className='free-agents'>
      {packersPlayers}
      </div>
    )
  }
}

FreeAgents.propTypes = {
  freeAgents: React.PropTypes.array,
}

export default FreeAgents;
