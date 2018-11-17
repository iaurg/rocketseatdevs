import React, { Component } from 'react';
import { Card, Icon, Avatar, Col} from 'antd';
import api from '../../services/api';

const { Meta } = Card;
// import { Container } from './styles';
const apiId = 'abef530f72a8009e3884';
const apiSecret = 'c8742a12b6bf056e475ce672311675c39ed58089';
const italo = "Ola";
export default class CardUser extends Component {
    state = {
      user: []
    }
    componentDidMount(){
      this.loadGitUser();
    }

    loadGitUser = async () =>{
        const response = await api.get(`/${this.props.github}?client_id=${apiId}&client_secret=${apiSecret}'`);
        console.log(response.data);
        console.log(apiId, apiSecret, italo);
        this.setState({user: response.data})
    }

  render() {
    return (
      <Col xs={24} sm={12} md={12} lg={8} xl={6}>
        
        <Card   
          style={{ width: "100%", marginBottom: 16 }}          
          actions={[
          <a href={this.state.user.blog} target="_blank" rel="noopener noreferrer"><Icon type="link" /></a>, 
          <a href={this.props.linkedin}><Icon type="linkedin" /></a>, 
          <a href={this.state.user.html_url}><Icon type="github" /></a>, 
          <a href={this.state.user.email}><Icon type="mail" /></a>
          ]}
        >
          <Meta
            avatar={<Avatar src={this.state.user.avatar_url} />}
            title={this.state.user.name}
            description={this.state.user.bio}            
          />
        </Card>
      </Col>        
    );
  }
}
