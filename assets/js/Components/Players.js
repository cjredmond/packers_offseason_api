import React, { Component } from 'react';
import PlayerItem from './PlayerItem';

class Players extends Component {
  render() {
    let quarterbacks;
    let runningbacks;
    if(this.props.players){
      quarterbacks = this.props.players.map(player => {
        if(player.position === "QB"){
          return (
            <PlayerItem key={player.name} player={player} />
          )
        }
        //console.log(project);

      });
      runningbacks = this.props.players.map(player => {
        if(player.position === "HB"){
          return (
            <PlayerItem key={player.name} player={player} />
          )
        }
      })
    }
    return (
      <div className="Players">
        <h3>Quarterbacks List</h3>
        {quarterbacks}
        <h3>Runningbacks</h3>
        {runningbacks}
      </div>
    );
  }
}

Players.propTypes = {
  persons: React.PropTypes.array,
}

export default Players;
