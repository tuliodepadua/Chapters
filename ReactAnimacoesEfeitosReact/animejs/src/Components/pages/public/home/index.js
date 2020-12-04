import React, { Component } from "react";
import HmContainer from "./styles";
import PerfectScrollbar from "react-perfect-scrollbar";
import Homet from "./components/home";
import anime from "animejs";

export default class home extends Component {
  componentDidMount() {
    let tl = anime.timeline({
      easing: "easeInOutSine",
      duration: 1000,
    });
    //jobs
    anime({
      targets: "#jobs h1 .letter",
      translateY: ["1.1em", "1.1em"],
      translateZ: 0,
      duration: 0,
    });

    anime({
      targets: "#ulEstilo li",
      opacity: [0, 0.5],
      duration: 0,
    });

    anime({
      targets: "#cpOqf h3",
      translateY: ["1.1em", "0.5em"],
      opacity: [0, 0],
      duration: 0,
    });

    anime({
      targets: "#footerOquefazemos .animFooter",
      opacity: [0, 0],
      duration: 0,
    });

    //close Galerias
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
        translateY: ["10.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 20 * i,
      });
    tl2
      .add(
        {
          targets: ".titulo-dois .letter",
          translateY: ["1.1em", "1.1em"],
          translateZ: 0,
          duration: 0,
          delay: 2000,
          // delay: (el, i) => 50 * i
        },
        "-=100"
      )
      .add({
        targets: ".titulo-dois .letter",
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        // delay: 10000
        delay: (el, i) => 20 * i,
      });
    tl3
      .add(
        {
          targets: ".titulo-tres .letter",
          translateY: ["1.1em", "1.1em"],
          translateZ: 0,
          duration: 0,
          delay: 2000,
        },
        "-=100"
      )
      .add({
        targets: ".titulo-tres .letter",
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 20 * i,
      });

    tl4
      .add(
        {
          targets: ".mensagem",
          translateX: ["20px", "20px"],
          opacity: [0],
          translateZ: 0,
          duration: 0,
          delay: 2000,
        },
        "-=100"
      )
      .add({
        targets: ".mensagem",
        translateX: ["20px", "0px"],
        opacity: [0, 1],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i,
      });

    tl5
      .add(
        {
          targets: "#palavras",
          opacity: [0, 0],
          duration: 0,
          delay: 2000,
        },
        "-=100"
      )
      .add({
        targets: "#palavras",
        opacity: [0, 1],
        duration: 750,
      });

    anime({
      targets: `#home #header`,
      easing: "easeInOutSine",
      loop: false,
      opacity: ["0", "1"],
      duration: 1000,
      delay: 1000,
    });

    tl.add({
      targets: `#home .lineH`,
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
        targets: `#home .lineW`,
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
      targets: `#home .corpo`,
      opacity: ["0", "1"],
      easing: "easeInOutSine",
      loop: false,
      duration: 1000,
      delay: 1000,
    });

    anime(
      {
        targets: `#home .LatLeft`,
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
        targets: `#home .LatRight`,
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
        <HmContainer>
          <div id='corpo'>
            <PerfectScrollbar>
              <Homet />
            </PerfectScrollbar>
          </div>
        </HmContainer>
      </>
    );
  }
}
