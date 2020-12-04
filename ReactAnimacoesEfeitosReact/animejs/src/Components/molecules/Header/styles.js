import styled from "styled-components";
import {
  cor,
  dist,
  breackPoint1,
  breackPoint2,
  breackPoint3,
} from "../../../assets/styles/default";
const HeaderGeral = styled.nav`
  background: transparent;
  color: ${cor.preto};
  height: ${dist.h};
  line-height: 100px;
  padding: 0 calc(${dist.w} + 0.75rem);
  position: relative;
  line-height: ${dist.h};
  z-index: 9999;

  .brand-logo {
    padding-top: 18px;
    img {
      width: 90px;
      height: auto;
    }
  }
  a {
    color: ${cor.cinzab};
    line-height: ${dist.h};
  }
  .tour360 {
    cursor: pointer;
    margin: 0px;
    position: relative;
    line-height: 15px !important;
    text-align: center;
    text-transform: uppercase;
    font-size: 11px;
    padding-top: 42px;
    padding-left: 20px;
    img {
      position: absolute;
      left: 0px;
      top: 45px;
      margin: 0px !important;
    }
  }

  .btnMenub {
    text-align: center;
  }

  .menu-white {
    .btnMenu {
      line-height: 15px !important;
      position: relative;
      text-transform: uppercase;
      cursor: pointer;
      i.material-icons {
        position: absolute;
        left: -40px;
        top: -21px;
        font-size: 40px;
        transform: rotate(180deg);
      }
    }
  }
  .menu-black {
    .btnMenu {
      line-height: 15px !important;
      position: relative;
      text-transform: uppercase;
      color: ${cor.branco};
      cursor: pointer;
      i.material-icons {
        position: absolute;
        left: -40px;
        top: -21px;
        font-size: 40px;
        transform: rotate(180deg);
        color: ${cor.branco};
      }
    }
  }

  @media (min-width: ${breackPoint3}) {
    background: transparent;
    color: ${cor.preto};
    height: ${dist.h};
    line-height: 100px;
    padding: 0 calc(${dist.w} + 0.75rem);
    position: relative;
    line-height: ${dist.h};
    z-index: 9999;
    .iframe {
      position: fixed;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
      background: red;
      z-index: 20000;
    }
    .brand-logo {
      padding-top: 18px;
      img {
        width: 90px;
        height: auto;
      }
    }
    a {
      color: ${cor.cinzab};
      line-height: ${dist.h};
    }
    .tour360 {
      cursor: pointer;
      margin: 0px;
      position: relative;
      line-height: 15px !important;
      text-align: center;
      text-transform: uppercase;
      font-size: 11px;
      padding-top: 42px;
      img {
        position: absolute;
        left: 0px;
        top: 45px;
        margin: 0px !important;
      }
    }

    .menu-white {
      .btnMenu {
        line-height: 15px !important;
        position: relative;
        text-transform: uppercase;
        cursor: pointer;
        i.material-icons {
          position: absolute;
          left: -40px;
          top: -21px;
          font-size: 40px;
          transform: rotate(180deg);
        }
      }
    }
    .menu-black {
      .btnMenu {
        line-height: 15px !important;
        position: relative;
        text-transform: uppercase;
        color: ${cor.branco};
        cursor: pointer;
        i.material-icons {
          position: absolute;
          left: -40px;
          top: -21px;
          font-size: 40px;
          transform: rotate(180deg);
          color: ${cor.branco};
        }
      }
    }
  }

  @media (max-width: ${breackPoint1}) {
    background: transparent;
    color: ${cor.preto};
    height: ${dist.h};
    line-height: 100px;
    padding: 0px;
    position: relative;
    line-height: ${dist.h};
    z-index: 9999;
    .brand-logo {
      left: 10px;
      padding: 6px 0 0 0px;
      transform: translateX(0%);
      img {
        width: 60px;
      }
    }
    .t-black {
      color: ${cor.branco};
    }
  }
`;

export { HeaderGeral };
