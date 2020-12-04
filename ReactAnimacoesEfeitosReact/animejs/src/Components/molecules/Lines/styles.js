import styled from "styled-components";
import { cor, transicao, breackPoint1, dist } from "../../../assets/styles/default";

export const Container = styled.div`
  .cor-white {
    background: ${cor.cinza};
  }
  .cor-black {
    background: ${cor.cinza};
    opacity: 0.3;
  }
  .lineH {
    position: absolute;
    top: 0px;
    height: 100%;
    width: 1px;
  }
  .lineW {
    position: absolute;
    left: 0px;
    height: 1px;
    width: 100%;
  }

  .lW1 {
    top: ${dist.h};
  }
  .lW2 {
    bottom: ${dist.h};
  }

  .lH1 {
    left: ${dist.w};
  }

  .lH2 {
    left: calc(${dist.w} + ((100% - (${dist.w} * 2)) / 4));
  }
  .lH3 {
    left: calc(${dist.w} + ((100% - (${dist.w} * 2)) * 2 / 4));
  }
  .lH4 {
    left: calc(${dist.w} + ((100% - (${dist.w} * 2)) * 3 / 4));
  }
  .lH5 {
    left: calc(${dist.w} + ((100% - (${dist.w} * 2))));
  }

  @media (max-width: ${breackPoint1}) {
    .lH2 {
    background: transparent !important;
  }
    .lH4 {
    background: transparent !important;
  }
  .lW2 {
    background: transparent !important;
    /* bottom: ${dist.h}; */
  }
  

  }
`;
