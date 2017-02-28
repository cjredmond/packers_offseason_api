import React, { Component } from 'react';

class PlayerItem extends Component {

  render() {
    return (
      <div className="Player">
        <strong>{this.props.player.name}</strong>-{this.props.player.position}
      </div>
    );
  }
}

PlayerItem.propTypes = {
  players: React.PropTypes.object,
}

export default PlayerItem;
