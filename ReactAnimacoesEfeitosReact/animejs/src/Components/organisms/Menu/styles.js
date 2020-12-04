import styled from "styled-components";
import {
  cor,
  dist,
  transicao,
  fonts,
  breackPoint1,
  breackPoint2,
  breackPoint3,
} from "../../../assets/styles/default";

const hInit = "10px";

export const Container = styled.div`
  position: fixed;
  background: transparent;
  z-index: 999999;
  left: 50% !important;
  cursor: initial;
  ${(props) =>
    props.acao == "close"
      ? `
        width: 100%  !important;
        height: 100%;
        top: -10px;
        left: 0%  !important;
        display: none;
        border-radius: 0pc;
        `
      : `
        width: 100%  !important;
        height: 100%;
        top: 0px;
        left: 0%  !important;
        opacity: 1;
        border-radius: 0pc;
        display:block;

         
        `};

  .ml7 {
    position: relative;
    font-weight: 900;
    /* font-size: 3.3em; */
    .text-wrapper {
      position: relative;
      display: inline-block;
      padding-top: 0.2em;
      padding-right: 0.05em;
      padding-bottom: 0.1em;
      overflow: hidden;
    }
    .letter {
      display: inline-block;
      line-height: 1em;
    }
  }
  .ml6 {
    position: relative;
    font-weight: 900;
    /* font-size: 3.3em; */
    .text-wrapper {
      position: relative;
      display: inline-block;
      padding-top: 0.2em;
      padding-right: 0.05em;
      padding-bottom: 0.1em;
      overflow: hidden;
    }
    .letter {
      display: inline-block;
      line-height: 1em;
    }
  }
  .ml5 {
    position: relative;
    font-weight: 900;
    /* font-size: 3.3em; */
    .text-wrapper {
      position: relative;
      display: inline-block;
      padding-top: 0.2em;
      padding-right: 0.05em;
      padding-bottom: 0.1em;
      overflow: hidden;
    }
    .letter {
      display: inline-block;
      line-height: 1em;
    }
  }

  .effect1 {
    width: ${dist.w};
    height: ${hInit};
    background: ${cor.preto};
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 9;
  }
  .zIndex {
    z-index: 10;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
  }
  .effect2 {
    width: calc((100% - (${dist.w} * 2)) / 4);
    height: ${hInit};
    background: ${cor.preto};
    position: absolute;
    left: ${dist.w};
    top: 0px;
    z-index: 9;
  }
  .effect3 {
    width: calc((100% - (${dist.w} * 2)) / 4);
    height: ${hInit};
    background: ${cor.preto};

    position: absolute;
    left: calc(((100% - (${dist.w} * 2)) / 4) + ${dist.w});
    top: 0px;
    z-index: 9;
  }
  .effect4 {
    width: calc((100% - (${dist.w} * 2)) / 4);
    height: ${hInit};
    background: ${cor.preto};

    position: absolute;
    left: calc((((100% - (${dist.w} * 2)) / 4) * 2) + ${dist.w});
    top: 0px;
    z-index: 9;
  }
  .effect5 {
    width: calc((100% - (${dist.w} * 2)) / 4);
    height: ${hInit};
    background: ${cor.preto};

    position: absolute;
    left: calc((((100% - (${dist.w} * 2)) / 4) * 3) + ${dist.w});
    top: 0px;
    z-index: 9;
  }

  .effect6 {
    width: ${dist.w};
    height: ${hInit};
    background: ${cor.preto};

    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 9;
  }

  .corpoLevel {
    position: absolute;
    z-index: 11;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 0%;
    overflow: hidden;
  }
  .corpoLevel {
    opacity: 0;
  }
  .corpo {
    position: absolute;
    left: calc(${dist.w} + 0.75rem);
    top: ${dist.h};
    width: calc(100% - ((${dist.w} + 0.75rem) * 2));
    height: calc(100% - ${dist.h});

    #menuServicos {
      a {
        color: ${cor.branco};
        font-family: ${fonts.NeuePlakCompressedBold};
        font-size: 80px;
        letter-spacing: 15px;
        ${transicao(".8")}

        li {
          img {
            width: 380px;
            position: absolute;
            margin-top: -100px;
            opacity: 0;
            ${transicao(".8")}
          }
          text-transform: uppercase;
        }
      }
    }
    #menuServicos:hover {
      a {
        ${transicao(".8")}
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${cor.branco};
        color: transparent;
        font-family: ${fonts.NeuePlakCompressedBold};
        font-size: 80px;
        letter-spacing: 15px;
        li {
          img {
            width: 380px;
            position: absolute;
            margin-top: -100px;
            opacity: 0;
            ${transicao(".8")}
          }
          text-transform: uppercase;
        }
      }
      a:hover {
        ${transicao(".8")}
        -webkit-text-stroke-width: 0px;
        -webkit-text-stroke-color: ${cor.branco};
        color: ${cor.branco};
        font-family: ${fonts.NeuePlakCompressedBold};
        font-size: 80px;
        letter-spacing: 15px;
        li {
          img {
            width: 380px;
            position: absolute;
            margin-top: -100px;
            opacity: 1;
            ${transicao(".8")}
          }
          text-transform: uppercase;
        }
      }
    }

    .bx1 {
      padding: 30px 50px 0px 0 !important ;
      b {
        color: ${cor.azul};
        font-family: ${fonts.NeuePlakBold};
        text-transform: uppercase;
      }
      p {
        color: ${cor.cinzab};
        margin: 0px;
        font-size: 12px;
      }
    }
    .bx {
      padding: 30px 50px 30px 0 !important ;

      b {
        color: ${cor.branco};
        font-family: ${fonts.NeuePlakBold};
        text-transform: uppercase;
      }
      p {
        color: ${cor.cinzab};
        margin: 0px;
        font-size: 12px;
      }
    }
  }

  @media (min-width: ${breackPoint1}) and (max-width: ${breackPoint3}) {
    .ml7 {
      position: relative;
      font-weight: 900;
      /* font-size: 3.3em; */
      .text-wrapper {
        position: relative;
        display: inline-block;
        padding-top: 0.2em;
        padding-right: 0.05em;
        padding-bottom: 0.1em;
        overflow: hidden;
      }
      .letter {
        display: inline-block;
        line-height: 1em;
      }
    }
    .ml6 {
      position: relative;
      font-weight: 900;
      /* font-size: 3.3em; */
      .text-wrapper {
        position: relative;
        display: inline-block;
        padding-top: 0.2em;
        padding-right: 0.05em;
        padding-bottom: 0.1em;
        overflow: hidden;
      }
      .letter {
        display: inline-block;
        line-height: 1em;
      }
    }
    .ml5 {
      position: relative;
      font-weight: 900;
      /* font-size: 3.3em; */
      .text-wrapper {
        position: relative;
        display: inline-block;
        padding-top: 0.2em;
        padding-right: 0.05em;
        padding-bottom: 0.1em;
        overflow: hidden;
      }
      .letter {
        display: inline-block;
        line-height: 1em;
      }
    }

    .effect1 {
      width: ${dist.w};
      height: ${hInit};
      background: ${cor.preto};
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: 9;
    }
    .zIndex {
      z-index: 10;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
    }
    .effect2 {
      width: calc((100% - (${dist.w} * 2)) / 4);
      height: ${hInit};
      background: ${cor.preto};
      position: absolute;
      left: ${dist.w};
      top: 0px;
      z-index: 9;
    }
    .effect3 {
      width: calc((100% - (${dist.w} * 2)) / 4);
      height: ${hInit};
      background: ${cor.preto};

      position: absolute;
      left: calc(((100% - (${dist.w} * 2)) / 4) + ${dist.w});
      top: 0px;
      z-index: 9;
    }
    .effect4 {
      width: calc((100% - (${dist.w} * 2)) / 4);
      height: ${hInit};
      background: ${cor.preto};

      position: absolute;
      left: calc((((100% - (${dist.w} * 2)) / 4) * 2) + ${dist.w});
      top: 0px;
      z-index: 9;
    }
    .effect5 {
      width: calc((100% - (${dist.w} * 2)) / 4);
      height: ${hInit};
      background: ${cor.preto};

      position: absolute;
      left: calc((((100% - (${dist.w} * 2)) / 4) * 3) + ${dist.w});
      top: 0px;
      z-index: 9;
    }

    .effect6 {
      width: ${dist.w};
      height: ${hInit};
      background: ${cor.preto};

      position: absolute;
      right: 0px;
      top: 0px;
      z-index: 9;
    }

    .corpoLevel {
      position: absolute;
      z-index: 11;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 0%;
      overflow: hidden;
    }
    .corpoLevel {
      opacity: 0;
    }
    .corpo {
      position: absolute;
      left: calc(${dist.w} + 0.75rem);
      top: ${dist.h};
      width: calc(100% - ((${dist.w} + 0.75rem) * 2));
      height: calc(100% - ${dist.h});

      #menuServicos {
        margin: 0px;
        a {
          color: ${cor.branco};
          font-family: ${fonts.NeuePlakCompressedBold};
          font-size: 50px;
          letter-spacing: 15px;
          li {
            text-transform: uppercase;
            h1 {
              margin-top: 10px;
            }
          }
        }
      }

      .bx1 {
        padding: 30px 50px 0px 0 !important ;
        b {
          color: ${cor.azul};
          font-family: ${fonts.NeuePlakBold};
          text-transform: uppercase;
        }
        p {
          color: ${cor.cinzab};
          margin: 0px;
          font-size: 12px;
        }
      }
      .bx {
        padding: 10px 10px 10px 0 !important ;

        b {
          color: ${cor.branco};
          font-family: ${fonts.NeuePlakBold};
          text-transform: uppercase;
        }
        p {
          color: ${cor.cinzab};
          margin: 0px;
          font-size: 12px;
        }
      }
    }
  }

  @media (min-width: ${breackPoint2}) {
    .ml7 {
      position: relative;
      font-weight: 900;
      /* font-size: 3.3em; */
      .text-wrapper {
        position: relative;
        display: inline-block;
        padding-top: 0.2em;
        padding-right: 0.05em;
        padding-bottom: 0.1em;
        overflow: hidden;
      }
      .letter {
        display: inline-block;
        line-height: 1em;
      }
    }
    .ml6 {
      position: relative;
      font-weight: 900;
      /* font-size: 3.3em; */
      .text-wrapper {
        position: relative;
        display: inline-block;
        padding-top: 0.2em;
        padding-right: 0.05em;
        padding-bottom: 0.1em;
        overflow: hidden;
      }
      .letter {
        display: inline-block;
        line-height: 1em;
      }
    }
    .ml5 {
      position: relative;
      font-weight: 900;
      /* font-size: 3.3em; */
      .text-wrapper {
        position: relative;
        display: inline-block;
        padding-top: 0.2em;
        padding-right: 0.05em;
        padding-bottom: 0.1em;
        overflow: hidden;
      }
      .letter {
        display: inline-block;
        line-height: 1em;
      }
    }

    .effect1 {
      width: ${dist.w};
      height: ${hInit};
      background: ${cor.preto};
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: 9;
    }
    .zIndex {
      z-index: 10;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
    }
    .effect2 {
      width: calc((100% - (${dist.w} * 2)) / 4);
      height: ${hInit};
      background: ${cor.preto};
      position: absolute;
      left: ${dist.w};
      top: 0px;
      z-index: 9;
    }
    .effect3 {
      width: calc((100% - (${dist.w} * 2)) / 4);
      height: ${hInit};
      background: ${cor.preto};

      position: absolute;
      left: calc(((100% - (${dist.w} * 2)) / 4) + ${dist.w});
      top: 0px;
      z-index: 9;
    }
    .effect4 {
      width: calc((100% - (${dist.w} * 2)) / 4);
      height: ${hInit};
      background: ${cor.preto};

      position: absolute;
      left: calc((((100% - (${dist.w} * 2)) / 4) * 2) + ${dist.w});
      top: 0px;
      z-index: 9;
    }
    .effect5 {
      width: calc((100% - (${dist.w} * 2)) / 4);
      height: ${hInit};
      background: ${cor.preto};

      position: absolute;
      left: calc((((100% - (${dist.w} * 2)) / 4) * 3) + ${dist.w});
      top: 0px;
      z-index: 9;
    }

    .effect6 {
      width: ${dist.w};
      height: ${hInit};
      background: ${cor.preto};

      position: absolute;
      right: 0px;
      top: 0px;
      z-index: 9;
    }

    .corpoLevel {
      position: absolute;
      z-index: 11;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 0%;
      overflow: hidden;
    }
    .corpoLevel {
      opacity: 0;
    }
    .corpo {
      position: absolute;
      left: calc(${dist.w} + 0.75rem);
      top: ${dist.h};
      width: calc(100% - ((${dist.w} + 0.75rem) * 2));
      height: calc(100% - ${dist.h});

      #menuServicos {
        a {
          color: ${cor.branco};
          font-family: ${fonts.NeuePlakCompressedBold};
          font-size: 80px;
          letter-spacing: 15px;
          h1 {
            font-size: 120px;
          }
          li {
            text-transform: uppercase;
          }
        }
      }

      .bx1 {
        padding: 110px 50px 0px 0 !important ;
        b {
          color: ${cor.azul};
          font-family: ${fonts.NeuePlakBold};
          text-transform: uppercase;
          font-size: 22px;
          letter-spacing: 2px;
        }
        p {
          color: ${cor.cinzab};
          margin: 0px;
          font-size: 16px;
        }
      }
      .bx {
        padding: 30px 50px 30px 0 !important ;

        b {
          color: ${cor.branco};
          font-family: ${fonts.NeuePlakBold};
          text-transform: uppercase;
          font-size: 20px;
          letter-spacing: 2px;
        }
        p {
          color: ${cor.cinzab};
          margin: 0px;
          font-size: 16px;
        }
      }
    }
  }

  @media (max-width: ${breackPoint1}) {
    .LatRight {
      display: none;
    }

    position: fixed;
    background: transparent;
    z-index: 999999;
    left: 50% !important;
    cursor: initial;
    ${(props) =>
      props.acao == "close"
        ? `
        width: 100%  !important;
        height: 100%;
        top: -10px;
        left: 0%  !important;
        display: none;
        border-radius: 0pc;
        `
        : `
        width: 100%  !important;
        height: 100%;
        top: 0px;
        left: 0%  !important;
        opacity: 1;
        border-radius: 0pc;
        display:block;
        `};

    .effect1 {
      width: ${dist.w};
      height: ${hInit};
      background: ${cor.preto};
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: 9;
    }
    .effect2 {
      width: calc((100% - (${dist.w} * 2)) / 4);
      height: ${hInit};
      background: ${cor.preto};
      position: absolute;
      left: ${dist.w};
      top: 0px;
      z-index: 9;
    }
    .effect3 {
      width: calc((100% - (${dist.w} * 2)) / 4);
      height: ${hInit};
      background: ${cor.preto};

      position: absolute;
      left: calc(((100% - (${dist.w} * 2)) / 4) + ${dist.w});
      top: 0px;
      z-index: 9;
    }
    .effect4 {
      width: calc((100% - (${dist.w} * 2)) / 4);
      height: ${hInit};
      background: ${cor.preto};

      position: absolute;
      left: calc((((100% - (${dist.w} * 2)) / 4) * 2) + ${dist.w});
      top: 0px;
      z-index: 9;
    }
    .effect5 {
      width: calc((100% - (${dist.w} * 2)) / 4);
      height: ${hInit};
      background: ${cor.preto};

      position: absolute;
      left: calc((((100% - (${dist.w} * 2)) / 4) * 3) + ${dist.w});
      top: 0px;
      z-index: 9;
    }

    .effect6 {
      width: ${dist.w};
      height: ${hInit};
      background: ${cor.preto};

      position: absolute;
      right: 0px;
      top: 0px;
      z-index: 9;
    }

    .corpoLevel {
      position: absolute;
      z-index: 11;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 0%;
      overflow: hidden;
    }

    .corpoLevel {
      opacity: 0;
    }

    .corpo {
      position: absolute;
      left: calc(${dist.w} + 0.75rem);
      top: ${dist.h};
      width: calc(100% - ((${dist.w} + 0.75rem) * 2));
      height: calc(100% - ${dist.h});
      overflow: hidden;
      padding-bottom: 90px;

      #menuServicos {
        margin-top: 70px;
        h1 {
          margin: 10px;
        }
        a {
          color: ${cor.branco};
          font-family: ${fonts.NeuePlakCompressedBold};
          font-size: 80px;
          letter-spacing: 15px;
          ${transicao(".8")}

          li {
            img {
              width: 380px;
              position: absolute;
              margin-top: -100px;
              opacity: 0;
              ${transicao(".8")}
            }
            text-transform: uppercase;
          }
        }
      }
      #menuServicos:hover {
        a {
          ${transicao(".8")}
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: ${cor.branco};
          color: transparent;
          font-family: ${fonts.NeuePlakCompressedBold};
          font-size: 80px;
          letter-spacing: 15px;
          li {
            img {
              display: none;
              width: 380px;
              position: absolute;
              margin-top: -100px;
              opacity: 0;
              ${transicao(".8")}
            }
            text-transform: uppercase;
          }
        }
        a:hover {
          ${transicao(".8")}
          -webkit-text-stroke-width: 0px;
          -webkit-text-stroke-color: ${cor.branco};
          color: ${cor.branco};
          font-family: ${fonts.NeuePlakCompressedBold};
          font-size: 80px;
          letter-spacing: 15px;
          li {
            img {
              width: 380px;
              position: absolute;
              margin-top: -100px;
              opacity: 1;
              ${transicao(".8")}
            }
            text-transform: uppercase;
          }
        }
      }

      .bx1 {
        padding: 30px 50px 30px 0 !important ;
        display: none;
        b {
          color: ${cor.azul};
          font-family: ${fonts.NeuePlakBold};
          text-transform: uppercase;
        }
        p {
          color: ${cor.cinzab};
          margin: 0px;
        }
      }
      .bx {
        padding: 30px 50px 30px 0 !important ;
        display: none;

        b {
          color: ${cor.branco};
          font-family: ${fonts.NeuePlakBold};
          text-transform: uppercase;
        }
        p {
          color: ${cor.cinzab};
          margin: 0px;
        }
      }
    }
  }
`;
