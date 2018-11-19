import React, { Component } from "react";
import { Layout } from "antd";
import CardUser from "../../components/CardUser";
import { persons } from "../../components/persons";
import MasonryLayout from "../../components/MasonryLayout";
import * as _ from "lodash";

const { Content } = Layout;

export default class Main extends Component {
  state = {
    persons: persons
  };

  /**
   * Return the array of persons sorted by name attribute.
   *
   * @return Array
   */
  get persons() {
    // get persons.
    return _.sortBy(this.state.persons, ["name"]);
  }

  render() {
    return (
      <Content style={{ padding: "0 50px" }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          <MasonryLayout gap={15}>
            {this.persons.map(person => (
              <CardUser
                key={person.gituser}
                linkedin={person.linkedin}
                github={person.gituser}
              />
            ))}
          </MasonryLayout>
        </div>
      </Content>
    );
  }
}
