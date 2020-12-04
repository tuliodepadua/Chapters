import styled from "styled-components";
import { cor, transicao, dist } from "../../../assets/styles/default";

export const Container = styled.div`
  width: 124px;
  
  
  
  position: absolute;
  top: 0px;
  right: 0px;
  /* border-right: 1px solid ${cor.cinza}; */
  height: ${props =>
    props.reduzido
      ? `
           calc(100vh - ${dist.h})
        `
      : `
           100vh
        `
        };




  header{
    width: ${dist.w};
    height: ${dist.h};
    text-align: center;
    padding-top: 24px;
    img{
        display: inline-block;
    }
  }

  #redesSociais{
    position: absolute;
    bottom: ${dist.h};
    width: 100%;
    li{
      text-align: center;
      padding: 0px 0;
      img{
        width: 50px;
      }
      ${transicao()}
    }
    li:hover{
      opacity: .5;
      ${transicao()}

    }
  }
  
  .cor-white{
    color: ${cor.preto};    
  }
  .cor-black{
    color: ${cor.branco};
  }
  
`;
