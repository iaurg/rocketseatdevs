import React, { Component } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export default class FooterDev extends Component {
    render() {
      return (
        <Footer style={{ textAlign: 'center' }}>
            RocketSeat Devs ©2018 Created by @italox
        </Footer>
      );
    }
  }