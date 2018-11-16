import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import HeaderDev from './components/Nav';
import FooterDev from './components/Footer';
import Main from './pages/main';
class App extends Component {
  render() {
    return (
      <Layout className="layout">        
        <HeaderDev />
        <Main />
        <FooterDev />
      </Layout>
    );
  }
}

export default App;
