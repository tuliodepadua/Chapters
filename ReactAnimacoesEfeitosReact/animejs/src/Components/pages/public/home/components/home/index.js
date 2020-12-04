import React, { Component } from "react";
import { Container } from "./styles";
import LatLeft from "../../../../../molecules/LatLeft";
import LatRight from "../../../../../molecules/LatRight";
import Header from "../../../../../molecules/Header";
import Lines from "../../../../../molecules/Lines";
import anime from "animejs";
import { cor } from "../../../../../../assets/styles/default";
import { Utils } from "../../../../../../Utils";
export default class Homet extends Component {
  componentDidMount() {
    const wordsPath = [
      ".titulo-um .letters",
      ".titulo-dois .letters",
      ".titulo-tres .letters",
      "#tit-1",
      "#tit-2",
      "#tit-3",
    ];
    Utils.destructWord(wordsPath);
  }

  AnimEnter(vlr) {
    let tl = anime.timeline({
      easing: "easeOutExpo",
    });
    tl.add({
      targets: `${vlr} .letter`,
      translateY: [0, "-5px"],
      color: ["rgba(241, 90, 41, 0)", cor.laranja],
      translateZ: 0,
      duration: 500,
      "-webkit-text-stroke-color": cor.preto,
      delay: (el, i) => 20 * i,
      update: function (anim) {
        console.log(anim);
      },
    });
  }
  AnimLeave(vlr) {
    let tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 300,
    });

    tl.add({
      targets: `${vlr} .letter`,
      translateY: ["-5px", 0],
      color: [cor.laranja, "rgba(241, 90, 41, 0)"],
      "-webkit-text-stroke-color": cor.cinzab,
      translateZ: 0,
      duration: 300,
      delay: (el, i) => 20 * i,
    });
  }

  render() {
    return (
      <Container id='home' className='col s12'>
        <Lines bg='white' tipo='home' />
        <Header id='header' />
        <LatLeft />
        <LatRight />
        <div className='corpo'>
          <div id='titulos' className='titulos'>
            <h5 className='text-wrapper titulo-tres'>
              <span className='letters'>Chapter ReactJS</span>
            </h5>
            <h1 className='titulo-um text-wrapper'>
              <span className='letters'>Animações e efeitos</span>
            </h1>
            <h1 className='titulo-dois text-wrapper'>
              <span className='letters'>com React</span>
            </h1>
          </div>
          <ul id='chapterList' className='confText'>
            <li
              id='tit-1'
              onMouseEnter={() => this.AnimEnter(`#tit-1`)}
              onMouseLeave={() => this.AnimLeave(`#tit-1`)}
            >
              <span className='letters'>CSS</span>
            </li>
            <li
              id='tit-2'
              onMouseEnter={() => this.AnimEnter(`#tit-2`)}
              onMouseLeave={() => this.AnimLeave(`#tit-2`)}
            >
              <span className='letters'>AnimeJS</span>
            </li>
            <li
              id='tit-3'
              onMouseEnter={() => this.AnimEnter(`#tit-3`)}
              onMouseLeave={() => this.AnimLeave(`#tit-3`)}
            >
              <span className='letters'>Lottie</span>
            </li>
          </ul>
        </div>
      </Container>
    );
  }
}
