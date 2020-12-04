import styled from "styled-components";
import {
  cor,
  dist,
  fonts,
  breackPoint1,
  breackPoint2,
  breackPoint3,
} from "../../../../../../assets/styles/default";
export const Container = styled.div`
  height: 100%;
  min-height: ${dist.minD};
  overflow: hidden;

  .text-wrapper {
    position: relative;
    display: inline-block;
    overflow: hidden;
  }
  .letter {
    display: inline-block;
    line-height: 1em;
  }
  .rolagemTela {
    position: absolute;
    left: 50%;
    margin-left: -7px;
    bottom: 5px;

    span {
      position: absolute;
      top: 5px;
      left: 18px;
      width: 200px;
      font-size: 12px;

      color: ${cor.cinzab};
    }
  }

  #chapterList {
    position: absolute;
    top: 80px;
    left: calc((100% / 4) * 2);
    z-index: 9999;
    li {
      font-size: 80px;
      color: $azul;
      width: 500px;
      font-weight: 400;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: ${cor.azul};
      color: transparent;
      text-transform: uppercase;
      font-family: ${fonts.NeuePlakCompressedBold};
      margin: 0px;
    }
  }

  .plus1 {
    width: 30px;
    height: 30px;
    left: ${dist.w};
    top: ${dist.h};
    margin: -15px 0 0 -15px;
  }
  .plus2 {
    width: 30px;
    height: 30px;
    left: calc(((100% - (${dist.w} * 2)) / 4) * 3 + ${dist.w});
    top: calc(100% - ${dist.h});
    margin: -15px 0 0 -15px;
  }
  .corpo {
    position: absolute;
    left: calc(${dist.w} + 50px);
    top: ${dist.h};
    width: calc(100% - ((${dist.w} + 0.75rem) * 2));
    height: calc(100% - ${dist.h});

    .decoracao {
      position: absolute;
      color: ${cor.cinza};
    }

    .m1 {
      bottom: calc(${dist.h} - 20px);
      right: calc(50% + 30px);
      font-family: ${fonts.proximaNova};
      color: ${cor.cinzab};
    }

    .m1::after {
      content: "";
      width: 2px;
      height: 20px;
      background: #000;
      position: absolute;
      left: 0px;
      top: 34px;
    }
    .titulos {
      margin-top: 70px;
      z-index: 2;
      position: relative;
    }
    h1 {
      margin: 0px;
      font-family: ${fonts.NeuePlakCompressedBold};
      font-size: 90px;
      letter-spacing: 6px;
    }
    h5 {
      margin: 0px;
      color: ${cor.azul};
      font-family: ${fonts.NeuePlakCompressedBold};
      letter-spacing: 6px;
    }

    .titulo-um {
      width: 50%;
      position: absolute;
      left: 0px;
      top: 15px;
    }
    .titulo-dois {
      width: 50%;
      position: absolute;
      left: 0px;
      top: 100px;
    }
  }

  @media (min-width: ${breackPoint1}) and (max-width: ${breackPoint3}) {
    .text-wrapper {
      position: relative;
      display: inline-block;
      overflow: hidden;
    }
    .letter {
      display: inline-block;
      line-height: 1em;
    }

    height: 100%;
    min-height: ${dist.minD};
    overflow: hidden;
    .rolagemTela {
      position: absolute;
      left: 50%;
      margin-left: -7px;
      bottom: 5px;

      span {
        position: absolute;
        top: 5px;
        left: 18px;
        width: 200px;
        font-size: 12px;

        color: ${cor.cinzab};
      }
    }
    .plus1 {
      width: 30px;
      height: 30px;
      left: ${dist.w};
      top: ${dist.h};
      margin: -15px 0 0 -15px;
    }
    .plus2 {
      width: 30px;
      height: 30px;
      left: calc(((100% - (${dist.w} * 2)) / 4) * 3 + ${dist.w});
      top: calc(100% - ${dist.h});
      margin: -15px 0 0 -15px;
    }
    .corpo {
      position: absolute;
      left: calc(${dist.w} + 50px);
      top: ${dist.h};
      width: calc(100% - ((${dist.w} + 0.75rem) * 2));
      height: calc(100% - ${dist.h});

      .decoracao {
        position: absolute;
        color: ${cor.cinza};
      }

      .criatividade {
        top: 20px;
        left: 20px;
        letter-spacing: 18px;
        font-family: ${fonts.HelveticaNeueCyrMedium};
      }
      .performace {
        bottom: calc(${dist.h} - 80px);
        right: calc(${dist.h} + 60px);
        letter-spacing: 20px;
        font-family: ${fonts.HelveticaNeueCyrMedium};
        font-size: 12px;
      }

      .inovacao {
        top: -40px;
        left: calc(${dist.w} - 20px);
        letter-spacing: 50px;
        font-family: ${fonts.NeuePlakCompressedBold};
        font-size: 390px;
        z-index: 0;
        opacity: 0.3;
      }

      .mensagem {
        position: absolute;

        width: 300px;
        padding: 30px;
      }

      .m1 {
        bottom: 100px !important;
        right: 48% !important;
        font-family: ${fonts.proximaNova};
        color: ${cor.cinzab};
      }

      .m1::after {
        content: "";
        width: 2px;
        height: 20px;
        background: #000;
        position: absolute;
        left: 0px;
        top: 34px;
      }
      .titulos {
        margin-top: 120px;
        z-index: 2;
        position: relative;
      }
      h1 {
        margin: 0px;

        font-family: ${fonts.NeuePlakCompressedBold};
        font-size: 90px;
        letter-spacing: 6px;
      }
      h5 {
        margin: 0px;
        color: ${cor.azul};
        font-family: ${fonts.NeuePlakCompressedBold};
        letter-spacing: 6px;
      }

      .titulo-um {
        width: 100%;
        position: absolute;
        left: 0px;
        top: 20px;
      }
      .titulo-dois {
        width: 100%;
        position: absolute;
        left: 0px;
        top: 105px;
      }
    }
  }

  @media (min-width: ${breackPoint2}) {
    height: 100%;
    min-height: ${dist.minD};
    overflow: hidden;
    .rolagemTela {
      position: absolute;
      left: 50%;
      margin-left: -7px;
      bottom: 5px;
      span {
        position: absolute;
        top: 5px;
        left: 18px;
        width: 200px;
        font-size: 12px;
        color: ${cor.cinzab};
      }
    }
    .plus1 {
      width: 30px;
      height: 30px;
      left: ${dist.w};
      top: ${dist.h};
      margin: -15px 0 0 -15px;
    }
    .plus2 {
      width: 30px;
      height: 30px;
      left: calc(((100% - (${dist.w} * 2)) / 4) * 3 + ${dist.w});
      top: calc(100% - ${dist.h});
      margin: -15px 0 0 -15px;
    }
    .corpo {
      position: absolute;
      left: calc(${dist.w} + 50px);
      top: ${dist.h};
      width: calc(100% - ((${dist.w} + 0.75rem) * 2));
      height: calc(100% - ${dist.h});

      .decoracao {
        position: absolute;
        color: ${cor.cinza};
      }

      .criatividade {
        top: 20px;
        left: 20px;
        letter-spacing: 18px;
        font-family: ${fonts.HelveticaNeueCyrMedium};
      }
      .performace {
        bottom: calc(${dist.h} - 80px);
        right: calc(${dist.h} + 60px);
        letter-spacing: 20px;
        font-family: ${fonts.HelveticaNeueCyrMedium};
        font-size: 12px;
      }

      .inovacao {
        top: -40px;
        left: calc(${dist.w} - 20px);
        letter-spacing: 50px;
        font-family: ${fonts.NeuePlakCompressedBold};
        font-size: 390px;
        z-index: 0;
        opacity: 0.3;
      }

      .mensagem {
        position: absolute;

        width: 300px;
        padding: 30px;
      }

      .m1 {
        bottom: calc(${dist.h} + 10px);
        right: calc(50% + 30px);
        font-family: ${fonts.proximaNova};
        color: ${cor.cinzab};
      }

      .m1::after {
        content: "";
        width: 2px;
        height: 20px;
        background: #000;
        position: absolute;
        left: 0px;
        top: 34px;
      }
      .titulos {
        margin-top: 120px;
        z-index: 2;
        position: relative;
      }
      h1 {
        margin: 0px;

        font-family: ${fonts.NeuePlakCompressedBold};
        font-size: 120px;
        letter-spacing: 6px;
      }
      h5 {
        margin: 0px;
        color: ${cor.azul};
        font-family: ${fonts.NeuePlakCompressedBold};
        letter-spacing: 6px;

        font-size: 60px;
      }

      .titulo-um {
        width: 50%;
        position: absolute;
        left: 0px;
        top: 40px;
      }
      .titulo-dois {
        width: 50%;
        position: absolute;
        left: 0px;
        top: 140px;
      }
    }
  }

  @media (max-width: ${breackPoint1}) {
    min-height: ${dist.minM};
    .LatRight {
      display: none;
    }
    height: 100%;
    min-height: 600px;
    overflow-x: hidden !important;
    .rolagemTela {
      position: absolute;
      left: 50%;
      margin-left: -7px;
      /* bottom: ${dist.h}; */
      bottom: 0px;
      img {
        height: 30px;
      }
      span {
        position: absolute;
        top: 0px;
        left: 20px;
        width: 100px;
        font-size: 11px;
        color: ${cor.cinzab};
      }
    }
    .plus1 {
      width: 30px;
      height: 30px;
      left: ${dist.w};
      top: ${dist.h};
      margin: -15px 0 0 -15px;
    }
    .plus2 {
      width: 30px;
      height: 30px;
      left: calc(((100% - (${dist.w} * 2)) / 4) * 3 + ${dist.w});
      top: calc(100% - ${dist.h});
      margin: -15px 0 0 -15px;
    }
    .corpo {
      position: absolute;
      left: calc(${dist.w} + 0px);
      top: ${dist.h};
      width: calc(100% - ${dist.w});
      padding: 0px !important;
      height: calc(100% - ${dist.h});
      overflow-x: hidden !important;
      .decoracao {
        position: absolute;
        color: ${cor.cinza};
      }

      .criatividade {
        top: 20px;
        left: 20px;
        letter-spacing: 18px;
        font-family: ${fonts.HelveticaNeueCyrMedium};
      }
      .performace {
        bottom: calc(${dist.h} - 80px);
        right: calc(${dist.h} + 60px);
        letter-spacing: 20px;
        font-family: ${fonts.HelveticaNeueCyrMedium};
        font-size: 12px;
      }

      .inovacao {
        top: -40px;
        left: calc(${dist.w} - 20px);
        letter-spacing: 50px;
        font-family: ${fonts.NeuePlakCompressedBold};
        font-size: 390px;
        z-index: 0;
        opacity: 0.3;
      }

      .mensagem {
        position: relative;

        width: 100%;
        padding: 210px 20px 0 0;
      }

      .m1 {
        bottom: calc(${dist.h} + 10px);
        right: calc(0%);
        width: 100%;
        font-family: ${fonts.proximaNova};
        color: ${cor.cinzab};
      }

      .m1::after {
        content: "";
        width: 2px;
        height: 20px;
        background: #000;
        position: absolute;
        left: 0px;
        top: 34px;
        display: none;
      }
      .titulos {
        margin-top: 120px;
        z-index: 2;
        position: relative;
      }
      h1 {
        margin: 0px;

        font-family: ${fonts.NeuePlakCompressedBold};
        font-size: 50px;
        letter-spacing: 6px;
      }
      h5 {
        margin: 0px;
        color: ${cor.azul};
        font-family: ${fonts.NeuePlakCompressedBold};
        letter-spacing: 6px;
      }

      .titulo-um {
        width: 100%;
        position: absolute;
        left: 0px;
        top: 15px;
      }
      .titulo-dois {
        width: 100%;
        position: absolute;
        left: 0px;
        top: 60px;
      }
    }
  }

  @media (min-width: ${breackPoint1}) and (max-height: 640px) {
    .LatRight {
      display: none;
    }

    height: 100%;
    min-height: 600px;
    overflow-x: hidden !important;
    .rolagemTela {
      position: absolute;
      left: 50%;
      margin-left: -7px;
      bottom: ${dist.h};
      img {
        height: 30px;
      }
      span {
        position: absolute;
        top: 0px;
        left: 18px;
        width: 100px;
        font-size: 11px;
        color: ${cor.cinzab};
      }
    }

    .corpo {
      position: absolute;
      left: calc(${dist.w} + 0px);
      top: ${dist.h};
      width: calc(100% - ${dist.w});
      padding: 0px !important;
      height: calc(100%);
      overflow-x: hidden !important;
      overflow-y: hidden !important;
      .decoracao {
        position: absolute;
        color: ${cor.cinza};
      }

      .criatividade {
        top: 20px;
        left: 20px;
        letter-spacing: 18px;
        font-family: ${fonts.HelveticaNeueCyrMedium};
      }
      .performace {
        bottom: calc(${dist.h} - 80px);
        right: calc(${dist.h} + 60px);
        letter-spacing: 20px;
        font-family: ${fonts.HelveticaNeueCyrMedium};
        font-size: 12px;
      }

      .inovacao {
        top: -40px;
        left: calc(${dist.w} - 20px);
        letter-spacing: 50px;
        font-family: ${fonts.NeuePlakCompressedBold};
        font-size: 390px;
        z-index: 0;
        opacity: 0.3;
      }

      .mensagem {
        position: relative;
        width: 400px !important;
        padding: 140px 20px 0 20px;
      }

      .m1 {
        bottom: calc(${dist.h} + 10px);
        right: 0rem;
        width: 100%;
        font-family: ${fonts.proximaNova};
        color: ${cor.cinzab};
        position: relative !important;
      }

      .m1::after {
        content: "";
        width: 2px;
        height: 20px;
        background: #000;
        position: absolute;
        left: 0px;
        top: 140px;
      }
      .titulos {
        margin-top: 80px;
        margin-left: 20px;
        z-index: 2;
        position: relative;
      }
      h1 {
        margin: 0px;

        font-family: ${fonts.NeuePlakCompressedBold};
        font-size: 50px;
        letter-spacing: 6px;
      }
      h5 {
        margin: 0px;
        color: ${cor.azul};
        font-family: ${fonts.NeuePlakCompressedBold};
        letter-spacing: 6px;
      }

      .titulo-um {
        width: 50%;
        position: absolute;
        left: 0px;
        top: 15px;
      }
      .titulo-dois {
        width: 50%;
        position: absolute;
        left: 0px;
        top: 60px;
      }
    }
  }
`;
