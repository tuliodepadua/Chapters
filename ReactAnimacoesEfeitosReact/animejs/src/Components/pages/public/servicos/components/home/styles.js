import styled from "styled-components";
import {
  cor,
  dist,
  breackPoint1,
  breackPoint2,
  fonts,
} from "../../../../../../assets/styles/default";
export const Container = styled.div`
  height: 100%;
  min-height: ${dist.minD};

  .letter {
    display: inline-block;
    line-height: 1em;
  }
  .text-wrapper {
    position: relative;
    display: inline-block;
    overflow: hidden;
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
    left: calc(${dist.w});
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
    .titulos {
      margin-top: 100px;
      padding-left: 50px;
      position: relative;
      z-index: 9;
      p {
        max-width: 410px;
        margin: 20px 0px 0px 0px;
        font-family: "NeuePlakRegular";
        font-size: 14px;
      }
    }
    h1 {
      margin: 0px;
      font-family: ${fonts.NeuePlakCompressedBold};
      color: ${cor.azul};
      font-size: 50px;
      letter-spacing: 20px;
      text-transform: uppercase;
    }

    .titulo-um {
      width: 50%;
    }
    .rolagemTela {
      position: absolute;
      left: 50%;
      margin-left: -5px;
      bottom: 5px;
    }
  }

  @media (min-width: ${breackPoint2}) {
    height: 100%;
    min-height: ${dist.minD};
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
      left: calc(${dist.w});
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
      .titulos {
        margin-top: 120px;
        padding-left: 50px;
        position: relative;
        z-index: 9;
        p {
          max-width: 650px;
          margin: 20px 0px 0px 0px;
          font-family: "NeuePlakRegular";
          font-size: 16px;
        }
      }

      h1 {
        margin: 0px;
        font-family: ${fonts.NeuePlakCompressedBold};
        color: ${cor.azul};
        font-size: 100px;
        letter-spacing: 25px;
        text-transform: uppercase;
      }

      .confText {
        position: absolute;
        bottom: -30px;
        left: -20px;
        font-weight: 400;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${cor.azul};
        font-size: 45px;
        color: transparent;
        text-transform: uppercase;
        font-family: ${fonts.NeuePlakCompressedBold};
        margin: 0px;

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

      .titulo-um {
        width: 50%;
      }
      .rolagemTela {
        position: absolute;
        left: 50%;
        margin-left: -5px;
        bottom: 5px;
      }
    }
  }

  @media (max-width: ${breackPoint1}) {
    overflow: hidden;
    min-height: ${dist.minM};

    .LatLeft {
      display: none;
    }
    .LatRight {
      display: none;
    }

    .corpo {
      position: absolute;
      left: 0px;
      top: ${dist.h};
      width: calc(100%);
      height: calc(100% - ${dist.h});
      overflow: hidden;
      min-height: ${dist.minM};

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
      .titulos {
        margin-top: 120px;
        padding-left: 50px;
        p {
          max-width: 400px;
          margin: 20px 0px 0px 0px;
          font-family: "NeuePlakRegular";
          font-size: 12px;
          padding-right: 40px;
        }
      }
      h1 {
        margin: 0px;
        font-family: ${fonts.NeuePlakCompressedBold};
        color: ${cor.azul};
      }

      .titulo-um {
        width: 100%;
        font-size: 50px;
      }
      .rolagemTela {
        position: absolute;
        left: 50%;
        margin-left: -5px;
        bottom: 5px;
      }
    }
  }
`;
