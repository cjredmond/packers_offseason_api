import React, { Component } from 'react';
import PlayerItem from './PlayerItem';

class Players extends Component {
  render() {
    let quarterbacks;
    let runningbacks;
    let widerecievers;
    let tightends;
    let olinemen;
    let dlinemen;
    let edge;
    let linebackers;
    let corners;
    let safeties
    if(this.props.players){
      quarterbacks = this.props.players.map(player => {
        if(player.position === "QB"){
          return (
            <PlayerItem key={player.name} player={player} />
          )
        }

      });
      runningbacks = this.props.players.map(player => {
        if(player.position === "HB"){
          return (
            <PlayerItem key={player.name} player={player} />
          )
        }
      })
      widerecievers = this.props.players.map(player => {
        if(player.position === "WR"){
          return (
            <PlayerItem key={player.name} player={player} />
          )
        }

      });
      tightends = this.props.players.map(player => {
        if(player.position === "TE"){
          return (
            <PlayerItem key={player.name} player={player} />
          )
        }

      });
      olinemen = this.props.players.map(player => {
        if(player.position === "OL"){
          return (
            <PlayerItem key={player.name} player={player} />
          )
        }

      });
      dlinemen = this.props.players.map(player => {
        if(player.position === "DL"){
          return (
            <PlayerItem key={player.name} player={player} />
          )
        }

      });
      edge = this.props.players.map(player => {
        if(player.position === "ED"){
          return (
            <PlayerItem key={player.name} player={player} />
          )
        }

      });
      linebackers = this.props.players.map(player => {
        if(player.position === "LB"){
          return (
            <PlayerItem key={player.name} player={player} />
          )
        }

      });
      corners = this.props.players.map(player => {
        if(player.position === "CB"){
          return (
            <PlayerItem key={player.name} player={player} />
          )
        }

      });
      safeties = this.props.players.map(player => {
        if(player.position === "S"){
          return (
            <PlayerItem key={player.name} player={player} />
          )
        }

      });
    }
    return (
      <div className="Players">
        <h3>Quarterbacks List</h3>
        {quarterbacks}
        <h3>Runningbacks</h3>
        {runningbacks}
        <h3>Wide Recievers</h3>
        {widerecievers}
        <h3>Tight End</h3>
        {tightends}
        <h3>Offensive Line</h3>
        {olinemen}
        <h3>Defensive Line</h3>
        {dlinemen}
        <h3>Edge</h3>
        {edge}
        <h3>Linebackers</h3>
        {linebackers}
        <h3>Corners</h3>
        {corners}
        <h4>Safeties</h4>
        {safeties}
      </div>
    );
  }
}

Players.propTypes = {
  persons: React.PropTypes.array,
}

export default Players;
