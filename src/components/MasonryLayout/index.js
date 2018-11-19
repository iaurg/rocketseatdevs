// Simple masonry layout based on: https://medium.com/the-andela-way/how-to-create-a-masonry-layout-component-using-react-f30ec9ca5e99
import React, { Component } from "react";
import { Row } from "antd";

import { debounce } from "lodash";

export default class MasonryLayout extends Component {
  constructor(props) {
    super(props);

    this.layout = debounce(this.layout.bind(this), 500);
  }
  state = {
    result: []
  };

  layout() {
    const columnWrapper = {};
    const result = [];

    const columns = Math.floor(window.innerWidth / 400);
    for (let i = 0; i < columns; i++) {
      columnWrapper[`column${i}`] = [];
    }
    for (let i = 0; i < this.props.children.length; i++) {
      const columnIndex = i % columns;
      columnWrapper[`column${columnIndex}`].push(
        <div key={i} style={{ marginBottom: "15px" }}>
          {this.props.children[i]}
        </div>
      );
    }
    for (let i = 0; i < columns; i++) {
      result.push(
        <div
          key={i}
          style={{
            marginLeft: `${i > 0 ? 15 : 0}px`,
            flex: 1
          }}
        >
          {columnWrapper[`column${i}`]}
        </div>
      );
    }

    this.setState({ result });
  }

  componentDidMount() {
    this.layout();
    window.addEventListener("resize", this.layout);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.layout);
  }

  render() {
    return (
      <Row gutter={24} type="flex" justify="start">
        {this.state.result}
      </Row>
    );
  }
}
