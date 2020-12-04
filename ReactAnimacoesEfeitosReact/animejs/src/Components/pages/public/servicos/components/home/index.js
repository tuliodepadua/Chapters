import React, { Component } from "react";
import LatLeft from "../../../../../molecules/LatLeft";
import LatRight from "../../../../../molecules/LatRight";
import Header from "../../../../../molecules/Header";
import Lines from "../../../../../molecules/Lines";
import { Container } from "./styles";
export default class Homet extends Component {
  componentDidMount() {
    let tex1 = document.querySelector(".titulo-um .letters");
    tex1.innerHTML = tex1.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
  }

  render() {
    return (
      <Container id='home' className='col s12'>
        <Lines tipo='home' />
        <Header id='header' />
        <LatLeft />
        <LatRight />
        <div className='corpo'>
          <div className='titulos'>
            <h1 className='titulo-um text-wrapper'>
              <span className='letters'>Túlio de Pádua</span>
            </h1>
            <p className='Mensagem'>Desenvolvedor fullstack desde 2009</p>
          </div>
        </div>
      </Container>
    );
  }
}
