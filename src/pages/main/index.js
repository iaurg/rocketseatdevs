import React, { Component } from 'react';
import { Layout, Row} from 'antd';
import CardUser from '../../components/CardUser';
import {persons} from '../../components/persons';

const { Content } = Layout;

export default class Main extends Component {
    state = {
      persons: persons      
    };       
    render() {
      return (        
          <Content style={{ padding: '0 50px' }}>          
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Row gutter={24} type="flex" justify="start">
                {this.state.persons.map(person => (
                    <CardUser key={person.gituser} linkedin={person.linkedin} github={person.gituser}></CardUser>
                ))}
            </Row>
            </div>
          </Content>         
      );
    }
  }