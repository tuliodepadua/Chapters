import React, { Component } from "react";

import { Container } from "./styles";

export default class Lines extends Component {
  render() {
    return (
      <Container className={this.props.classe}>
        <div className={`lineH lH1 cor-${this.props.bg}`}></div>
        <div className={`lineH lH2 cor-${this.props.bg}`}></div>
        <div className={`lineH lH3 cor-${this.props.bg}`}></div>
        <div className={`lineH lH4 cor-${this.props.bg}`}></div>
        <div className={`lineH lH5 cor-${this.props.bg}`}></div>
        { this.props.tipo == 'home' && (
            <>
                <div className={`lineW lW1 cor-${this.props.bg}`}></div>
                <div className={`lineW lW2 cor-${this.props.bg}`}></div>
            </>
        ) }
        
      </Container>
    );
  }
}

Lines.defaultProps = {
  bg: "white",
  tipo: '',
  classe: ""
};
