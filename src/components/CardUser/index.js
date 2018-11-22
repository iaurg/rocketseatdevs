import React, { Component } from "react";
import { Card, Icon, Avatar, Badge } from "antd";
import api from "../../services/api";

const { Meta } = Card;

export default class CardUser extends Component {
  state = {
    user: [],
    hireable: false
  };
  componentDidMount() {
    this.loadGitUser();
  }

  loadGitUser = async () => {
    const response = await api.get(`/${this.props.github}`);
    this.setState({ user: response.data, hireable: response.data.hireable });
  };

  render() {
    const isHireable = this.state.hireable;
    let alertHireable;
    isHireable
      ? (alertHireable = (
          <Badge
            dot
            style={{ marginTop: "30px" }}
            status="success"
            text="Disponivel para contratação"
          />
        ))
      : (alertHireable = "");

    return (
      <Card
        style={{ width: "100%", marginBottom: 16 }}
        actions={[
          <a
            href={this.state.user.blog}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="link" />
          </a>,
          <a
            href={this.props.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="linkedin" />
          </a>,
          <a
            href={this.state.user.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="github" />
          </a>,
          <a
            href={`mailto:${this.state.user.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon type="mail" />
          </a>
        ]}
      >
        <Meta
          avatar={<Avatar src={this.state.user.avatar_url} />}
          title={this.state.user.name}
          description={this.state.user.bio}
        />
        {alertHireable}
      </Card>
    );
  }
}
