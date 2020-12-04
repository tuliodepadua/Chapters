import styled from "styled-components";
import {
  cor,
  dist,
  breackPoint1,
  breackPoint2,
  fonts,
} from "../../../assets/styles/default";

export const Container = styled.div`
  background: ${cor.preto};
  padding: ${dist.h} calc(${dist.w}) !important;
  position: relative;
  .marcaBrancaB {
    text-align: center;
  }

  #modal2 {
    h1,
    h2,
    h3,
    h4 {
      font-family: ${fonts.NeuePlakCompressedBold};
    }
    .titulo {
      padding-left: 1.5rem;
    }
    .modal-close {
      position: absolute;
      right: 0.75rem;
      top: 0.75rem;
      border-radius: 10pc;
    }
    .modal-content {
      margin-top: 56px;
    }
    .divider {
      background: black;
    }
    .corpoMod {
      background: ${cor.cinza};
      margin: 10px 0;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      h2 {
        font-size: 30px;
        margin: 0px 0px 20px 0px;
      }
      p {
        margin: 0px;
      }
    }
  }

  .marcaBranca {
    width: 90px;
    height: auto;
    display: inline-block;
  }
  .inf1 {
    position: absolute;
    bottom: 0.75rem;
    left: calc(${dist.w} + ((100% - (${dist.w} * 2)) / 4));
    color: ${cor.cinzab};
  }
  .inf2 {
    position: absolute;
    bottom: 0.75rem;
    left: calc(${dist.w} + (((100% - (${dist.w} * 2)) / 4) * 2));
    color: ${cor.cinzab};
  }
  .inf3 {
    position: absolute;
    bottom: 0.75rem;
    left: calc(${dist.w} + (((100% - (${dist.w} * 2)) / 4) * 3));
    color: ${cor.cinzab};
    cursor: pointer;
  }
  .entreEmContato {
    h2 {
      color: ${cor.azul};
      font-size: 22px;
      font-family: "NeuePlakCondensedBold";
      text-transform: uppercase;
      margin: 0px;
      letter-spacing: 4px;
    }
    p {
      margin: 5px 0px;
      color: ${cor.cinzab};
      font-family: "NeuePlakBold";
      font-size: 14px;
    }
  }

  .end1 {
    margin-bottom: 40px;
  }
  .endAg {
    width: 80%;
    h2 {
      color: ${cor.branco};
      font-size: 18px;
      font-family: "NeuePlakCondensedBold";
      margin: 0px;
      letter-spacing: 4px;
    }
    p {
      margin: 5px 0px;
      color: ${cor.cinzab};
      font-family: "NeuePlakRegular";
      font-size: 12px;
      padding-right: 10px;
    }
  }

  @media (min-width: ${breackPoint2}) {
    background: ${cor.preto};
    padding: ${dist.h} calc(${dist.w}) !important;
    position: relative;
    .marcaBrancaB {
      img {
        width: 120px;
      }
      margin-top: 60px;
      text-align: center;
    }

    #modal2 {
      h1,
      h2,
      h3,
      h4 {
        font-family: ${fonts.NeuePlakCompressedBold};
      }
      .titulo {
        padding-left: 1.5rem;
      }
      .modal-close {
        position: absolute;
        right: 0.75rem;
        top: 0.75rem;
        border-radius: 10pc;
      }
      .modal-content {
        margin-top: 56px;
      }
      .divider {
        background: black;
      }
      .corpoMod {
        background: ${cor.cinza};
        margin: 10px 0;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        h2 {
          font-size: 30px;
          margin: 0px 0px 20px 0px;
        }
        p {
          margin: 0px;
        }
      }
    }

    .marcaBranca {
      width: 90px;
      height: auto;
      display: inline-block;
    }
    .inf1 {
      position: absolute;
      bottom: 0.75rem;
      left: calc(${dist.w} + ((100% - (${dist.w} * 2)) / 4));
      color: ${cor.cinzab};
    }
    .inf2 {
      position: absolute;
      bottom: 0.75rem;
      left: calc(${dist.w} + (((100% - (${dist.w} * 2)) / 4) * 2));
      color: ${cor.cinzab};
    }
    .inf3 {
      position: absolute;
      bottom: 0.75rem;
      left: calc(${dist.w} + (((100% - (${dist.w} * 2)) / 4) * 3));
      color: ${cor.cinzab};
      cursor: pointer;
    }
    .entreEmContato {
      margin-top: 80px;
      h2 {
        color: ${cor.azul};
        font-size: 30px;
        font-family: "NeuePlakCondensedBold";
        text-transform: uppercase;
        margin: 0px;
        letter-spacing: 8px;
      }
      p {
        margin: 5px 0px;
        color: ${cor.cinzab};
        font-family: "NeuePlakBold";
        font-size: 16px;
        letter-spacing: 4px;
      }
    }

    .end3 {
      margin-top: 80px;
    }
    .end1 {
      margin-bottom: 40px;
    }
    .endAg {
      width: 80%;
      h2 {
        color: ${cor.branco};
        font-size: 24px;
        font-family: "NeuePlakCondensedBold";
        margin: 0px;
        letter-spacing: 4px;
      }
      p {
        margin: 5px 0px;
        color: ${cor.cinzab};
        font-family: "NeuePlakRegular";
        font-size: 14px;
        padding-right: 10px;
      }
    }
  }

  @media (max-width: ${breackPoint1}) {
    background: ${cor.preto};
    padding: ${dist.h} calc(${dist.w}) !important;
    position: relative;

    .inf1 {
      position: absolute;
      bottom: 0.75rem;
      left: ${dist.w};
      color: ${cor.cinzab};
    }
    .inf2 {
      position: absolute;
      bottom: 0.75rem;
      left: 50%;
      color: ${cor.cinzab};
    }
    .inf3 {
      position: absolute;
      bottom: 0.75rem;
      left: calc(${dist.w} + (((100% - (${dist.w} * 2)) / 4) * 3));
      color: ${cor.cinzab};
    }
  }
`;
