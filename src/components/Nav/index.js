import React, { Component } from 'react';
import { Layout } from 'antd';
import devsLogo from '../../images/logo-rocketseat-devs.svg';
const { Header } = Layout;

export default class HeaderDev extends Component {
  render() {
    return (
        <Header>
          <a href="https://github.com/Italox/rocketseatdevs">
            <img style={{position:"absolute", top: 0, right:0}}src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub" />
          </a>
          <div className="logo">
            <img src={devsLogo} alt="RocketSeat Devs" height={30}/>
          </div>          
        </Header>
    );
  }
}
