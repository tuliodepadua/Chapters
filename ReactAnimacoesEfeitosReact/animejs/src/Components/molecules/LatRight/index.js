import React, { Component } from "react";
import { Container } from "./styles";

import faceW from "../../../assets/img/white/icons/face.svg";
import instaW from "../../../assets/img/white/icons/insta.svg";
import linkedW from "../../../assets/img/white/icons/linked.svg";

import faceB from "../../../assets/img/black/icons/face.svg";
import instaB from "../../../assets/img/black/icons/insta.svg";
import linkedB from "../../../assets/img/black/icons/linked.svg";

export default class LatRight extends Component {
  state = {
    ajuste: this.props.classe,
    rs: [
      {
        label: "Instagram",
        img: {
          white: instaW,
          black: instaB,
        },
        url: "http://www.instagram.com/tuliodepadua",
      },
      {
        label: "LinkedIn",
        img: {
          white: linkedW,
          black: linkedB,
        },
        url: "https://www.linkedin.com/in/tuliodepadua/",
      },
    ],
  };

  render() {
    return (
      <Container
        reduzido={this.props.reduzido}
        className={`LatRight ${this.props.classe}`}
      >
        <header className='row'>
          <ul id='linguagem' className={` cor-${this.props.bg} `}>
            <li>PT</li>
            <li>EN</li>
          </ul>
        </header>
        <ul id='redesSociais'>
          {this.state.rs.map((rede, i) => (
            <li key={i}>
              <a href={rede.url} target='blank'>
                <img
                  src={rede.img[this.props.bg]}
                  alt={rede.label}
                  className={`${rede.label} img${this.props.bg}`}
                />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

LatRight.defaultProps = {
  bg: "white",
  classe: "",
};
