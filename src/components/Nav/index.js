import React from "react";
import { Layout } from "antd";
import devsLogo from "../../images/logo-rocketseat-devs.svg";
const { Header } = Layout;

const HeaderDev = () => (
  <Header>
    <a href="https://github.com/Italox/rocketseatdevs">
      <img
        style={{ position: "absolute", top: 0, right: 0 }}
        src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
        alt="Fork me on GitHub"
      />
    </a>
    <div className="logo">
      <img src={devsLogo} alt="RocketSeat Devs" height={30} />
    </div>
    <span style={{ color: "#fff" }}>
      Faça parte da lista, acesse o{" "}
      <a
        href="https://github.com/Italox/rocketseatdevs"
        target="_blank"
        rel="noopener noreferrer"
      >
        repositorio no github
      </a>{" "}
      e saiba como.
    </span>
  </Header>
);

export default HeaderDev;
