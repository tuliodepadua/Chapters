import React, { Component } from "react";
import { Container } from "./styles";
import LatLeft from "../../molecules/LatLeft";
import LatRight from "../../molecules/LatRight";
import Header from "../../molecules/Header";
import { Link } from "react-router-dom";
import Lines from "../../molecules/Lines";
import efcL1 from "../../../assets/img/menu/lines-1.svg";
import anime from "animejs";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as MenuActions } from "../../../store/ducks/menu";
import { Utils } from "../../../Utils";
class Homet extends Component {
  componentDidUpdate() {
    if (this.props.acao == "open") {
      Utils.destructWord([".ml6 .letters"]);
      this.efeito("open");
    }
  }

  efeito(comand) {
    let tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 300,
    });
    let contentComponentAnime = anime.timeline({
      easing: "easeOutExpo",
      duration: 1000,
    });
    let t1 = anime.timeline({
      easing: "easeOutExpo",
      duration: 1000,
    });

    let animacaoItensMenuAnime = anime.timeline({
      easing: "easeOutExpo",
      duration: 300,
    });

    let aboutAnime = anime.timeline({
      easing: "easeOutExpo",
      duration: 300,
    });

    if (comand == "open") {
      tl.add({
        targets: ".bgCol",
        height: "100%",
        easing: "easeInOutQuad",
        loop: false,
        duration: 1000,
        delay: function (el, i, l) {
          return i * 50;
        },
        endDelay: function (el, i, l) {
          return (l - i) * 0;
        },
      });

      contentComponentAnime.add({
        targets: ".corpoLevel",
        opacity: ["0", "1"],
        height: "100%",
        loop: false,
      });

      animacaoItensMenuAnime
        .add(
          {
            targets: ".ml6 .letter",
            translateY: ["1.1em", "1.1em"],
            translateZ: 0,
            duration: 0,
            delay: 1500,
          },
          "-=100"
        )
        .add({
          targets: ".ml6 .letter",
          translateY: ["1.1em", 0],
          translateZ: 0,
          duration: 750,
          delay: (el, i) => 50 * i,
        });

      aboutAnime
        .add(
          {
            targets: ".bxAnim",
            translateY: ["1.1em", "1.1em"],
            opacity: 0,
            translateZ: 0,
            duration: 0,
            delay: 1500,
          },
          "-=100"
        )
        .add({
          targets: ".bxAnim",
          translateY: ["1.1em", 0],
          translateZ: 0,
          opacity: [0, 1],
          duration: 2000,
          delay: (el, i) => 50 * i,
        });
    } else {
      let self = this;
      let tl = anime.timeline({
        easing: "easeOutExpo",
        duration: 300,
        complete: function (anim) {
          self.props.acaoMenu();
        },
      });

      tl.add({
        targets: ".corpoLevel",
        opacity: "0",
        height: "0px",
        loop: false,
      }).add({
        targets: ".bgCol",
        height: "0%",
        easing: "easeInOutQuad",
        duration: 1000,
        loop: false,
        delay: function (el, i, l) {
          return i * 50;
        },
        endDelay: function (el, i, l) {
          return (l - i) * 0;
        },
      });
    }
  }

  transicaoTelas() {
    this.efeito("close");
  }

  geraLinhas(qtd) {
    const linhas = [];
    for (let index = 1; index < qtd; index++) {
      linhas.push(<div className={`effect${index} bgCol`}></div>);
    }
    return linhas;
  }

  render() {
    return (
      <Container className='col s12' id='menu' acao={this.props.acao}>
        <Lines bg='black' tipo='home' classe='zIndex' />
        {this.geraLinhas(7)}
        <div className='corpoLevel'>
          <Header bg='black' id='header' closeMenu='true' />
          <LatLeft bg='black' />
          <LatRight bg='black' />
          <div className='corpo'>
            <div className='col s12 l6'>
              <ul id='menuServicos'>
                <Link to='/tuliodepadua/' onClick={() => this.transicaoTelas()}>
                  <li>
                    <h1 className='ml6'>
                      <img src={efcL1} alt='' />
                      <span className='text-wrapper'>
                        <span className='letters'>Túlio de Pádua</span>
                      </span>
                    </h1>
                  </li>
                </Link>
              </ul>
            </div>

            <div className='col s12 l3'>
              <div className='col s12 bx1 bxAnim'>
                <b>Fullstack</b>
                <p>
                  Trabalho com desenvolvimento web desde 2009, na maior parte
                  deste tempo para gências e clientes diretos.
                </p>
              </div>
              <div className='col s12 bx bxAnim'>
                <b>Contato</b>
                <p>tulio.de.padua.silva@accenture.com</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  acao: state.menu,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(MenuActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Homet);
