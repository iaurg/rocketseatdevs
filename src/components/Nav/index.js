import React, { Component } from 'react';
import { Layout } from 'antd';
import devsLogo from '../../images/logo-rocketseat-devs.svg';
const { Header } = Layout;

export default class HeaderDev extends Component {
  render() {
    return (
        <Header>
          <div className="logo">
            <img src={devsLogo} alt="RocketSeat Devs" height={30}/>
          </div>          
        </Header>
    );
  }
}
