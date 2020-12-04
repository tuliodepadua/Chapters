import React, { Component } from "react";
import HmContainer from "./styles";
import PerfectScrollbar from "react-perfect-scrollbar";
import Homet from "./components/home";
import { ParallaxProvider } from "react-scroll-parallax";
import anime from "animejs";

export default class Servicos extends Component {
  componentDidMount() {
    let idCont = "#home";
    let tl = anime.timeline({
      easing: "easeInOutSine",
      duration: 1000,
    });
    let tl1 = anime.timeline({
      easing: "easeInOutSine",
      duration: 1000,
    });
    let tl2 = anime.timeline({
      easing: "easeInOutSine",
      duration: 1000,
    });
    let tl3 = anime.timeline({
      easing: "easeInOutSine",
      duration: 1000,
    });
    let tl4 = anime.timeline({
      easing: "easeInOutSine",
      duration: 1000,
    });
    let tl5 = anime.timeline({
      easing: "easeInOutSine",
      duration: 1000,
    });
    let tl6 = anime.timeline({
      easing: "easeInOutSine",
      duration: 1000,
    });

    tl1
      .add(
        {
          targets: ".titulo-um .letter",
          translateY: ["1.1em", "1.1em"],
          translateZ: 0,
          duration: 0,
          delay: 2000,
        },
        "-=100"
      )
      .add({
        targets: ".titulo-um .letter",
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 20 * i,
      });
    tl2
      .add(
        {
          targets: ".Mensagem",
          opacity: [0, 0],
          translateY: ["1.1em", "1.1em"],

          duration: 0,
          delay: 2000,
        },
        "-=100"
      )
      .add({
        targets: ".Mensagem",
        opacity: [0, 1],
        translateY: ["1.1em", 0],
        duration: 750,
        delay: (el, i) => 20 * i,
      });

    anime({
      targets: `${idCont} #header`,
      easing: "easeInOutSine",
      loop: false,
      opacity: ["0", "1"],
      duration: 1000,
      delay: 1000,
    });

    tl.add({
      targets: `${idCont} .lineH`,
      easing: "easeInOutSine",
      delay: function (el, i) {
        return i * 100;
      },
      loop: false,
      height: ["0", "100%"],
      duration: 2000,
    });

    anime(
      {
        targets: `${idCont} .lineW`,
        easing: "easeInOutSine",
        loop: false,
        delay: function (el, i) {
          return i * 200;
        },
        duration: 1500,
        width: ["0", "100%"],
      },
      "-=600"
    );

    anime({
      targets: `${idCont} .corpo`,
      opacity: ["0", "1"],
      easing: "easeInOutSine",
      loop: false,
      duration: 1000,
      delay: 1000,
    });

    anime(
      {
        targets: `${idCont} .LatLeft`,
        opacity: ["0", "1"],
        easing: "easeInOutSine",
        loop: false,
        duration: 1000,
        delay: 1000,
      },
      "-=300"
    );

    anime(
      {
        targets: `${idCont} .LatRight`,
        opacity: ["0", "1"],
        easing: "easeInOutSine",
        loop: false,
        duration: 1000,
        delay: 1000,
      },
      "-=300"
    );
  }

  render() {
    return (
      <>
        {/* <div id="header">sadasdasd</div> */}
        <HmContainer>
          <div id='corpo'>
            <PerfectScrollbar>
              <ParallaxProvider>
                <Homet />
              </ParallaxProvider>
            </PerfectScrollbar>
          </div>
        </HmContainer>
      </>
    );
  }
}
