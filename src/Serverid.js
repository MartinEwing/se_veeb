import React, { Component } from 'react';
import './Kodu.css';

import ServerInfo from './ServerInfo'

class Serverid extends Component {
  render() {
    return (
      <div className="Serverid">
        <p>
          Ostge servereid
        </p>
        <ServerInfo name="Unicorn" gpu="GTX9090" cpu="i11" ram="2GB" jne="..." hind="$200"/>
        <ServerInfo name="Juurikas" gpu="AVR" cpu="stm32f7" ram="16GB" jne="..." hind="$40"/>
        <ServerInfo name="Minu esimine server" gpu="gtx9090" cpu="i11" ram="48GB" jne="..." hind="$675"/>
        <ServerInfo name="OP" gpu="xxx" cpu="pentium" ram="256GB" jne="..." hind="$230"/>
      </div>
    );
  }
}

export default Serverid;
