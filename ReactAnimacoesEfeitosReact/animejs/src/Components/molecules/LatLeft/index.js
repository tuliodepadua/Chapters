import React, { Component } from "react";
import axios from "axios";
import { Container } from "./styles";

import arquiveW from "../../../assets/img/white/premios/archive.png";
import BestAdsW from "../../../assets/img/white/premios/BestAds.png";

import arquiveB from "../../../assets/img/black/premios/archive.png";
import BestAdsB from "../../../assets/img/black/premios/BestAds.png";

export default class LatLeft extends Component {
  state = {
    premios: [],
  };
  premios = {
    premios: [
      {
        label: "Arquive",
        img: {
          white: arquiveW,
          black: arquiveB,
        },
      },
      {
        label: "BestAds",
        img: {
          white: BestAdsW,
          black: BestAdsB,
        },
      },
    ],
  };
  componentDidMount() {
    this.setState({
      premios: this.premios.premios,
    });
  }

  render() {
    return (
      <Container className={`LatLeft ${this.props.classe}`}>
        <ul>
          {this.state.premios.map((premio, n) => (
            <li key={`a-${n}`} className='efectLi'>
              <img src={premio.img[this.props.bg]} alt={premio.label} />
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

LatLeft.defaultProps = {
  bg: "white",
  classe: "",
};
