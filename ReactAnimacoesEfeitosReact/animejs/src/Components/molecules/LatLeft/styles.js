import styled from "styled-components";
import { transicao, breackPoint1, dist } from "../../../assets/styles/default";

export const Container = styled.div`
  width: ${dist.w};
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 300;
  ul {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    li {
      cursor: pointer;
      text-align: center;
      width: 100%;
      img {
        display: inline-block;
        width: 70px;
        height: auto;
        ${transicao(".2")}
      }
    }
    li:hover {
      width: 100%;
      img {
        width: 100px;
        height: auto;
        ${transicao(".2")}
      }
    }
  }
  @media (max-width: ${breackPoint1}) {
    width: 100%;
    height: 64px;
    position: absolute;
    top: 100px;
    left: 0px;
    z-index: 9;
    ul {
      position: relative;
      left: 0px;
      width: 100%;
      text-align: center;
      li {
        cursor: pointer;
        text-align: center;
        height: 100%;
        width: 10%;
        display: inline-block;
        margin: 0px 1%;
        img {
          display: inline-block;
          width: 100%;
          height: auto;
          ${transicao(".2")}
        }
      }
      li:hover {
        width: 100%;
        img {
          width: 100px;
          height: auto;
          ${transicao(".2")}
        }
      }
    }
  }

  @media screen and (max-height: 640px) {
    ul {
      li {
        img {
          display: inline-block;
          width: 50px;
        }
      }
      li:hover {
        img {
          display: inline-block;
          width: 70px;
        }
      }
    }
  }
`;
