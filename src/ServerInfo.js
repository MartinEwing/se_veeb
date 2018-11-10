import React, { Component } from 'react';
import './Kodu.css';

const ServerTable = (props, state) => {
  if(state){
      return (
      <table>
        <tr>
          <th><strong>CPU</strong>:</th>
          <th><strong>GPU</strong>:</th>
          <th><strong>Vahemalu</strong>:</th>
          <th><strong>Ja nii edasi...</strong>:</th>
        </tr>
        <tr>
          <th>{props.cpu}</th>
          <th>{props.gpu}</th>
          <th>{props.ram}</th>
          <th>{props.jne}</th>
        </tr>
      </table>
      );
  }
}

class ServerInfo extends Component {
    constructor(props){
        super(props);
        this.state = {infoToggle: false};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
          infoToggle: !state.infoToggle
        }));
    }

    render() { return(
      <div className="ServerInfo">
        {this.props.name} {this.props.cpu} {this.props.gpu} {this.props.hind}
        <button onClick={this.handleClick}>
          Info
        </button>
        {ServerTable(this.props, this.state.infoToggle)}
      </div>
    )}
}

export default ServerInfo;
