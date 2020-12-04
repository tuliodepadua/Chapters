import React, { Component } from "react";

import { HeaderGeral } from "./styles";
import { Bsp } from "../../atoms/button/";
import history from "../../../Utils/history";

import { Icon } from "../../atoms/icon";
import marcaW from "../../../assets/img/marcaW.png";
import marcaB from "../../../assets/img/marcaB.png";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { Creators as MenuActions } from "../../../store/ducks/menu";
import anime from "animejs";

class Header extends Component {
  constructor() {
    super();
    this.logoutUser.bind();
  }

  componentDidMount() {}

  logoutUser = () => {
    localStorage.setItem("token", "");
    history.push("/login");
    history.go();
  };

  state = {
    marca: {
      white: marcaW,
      black: marcaB,
    },
  };

  fechar() {
    let self = this;

    let tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 300,
      update: function (anim) {},
      begin: function (anim) {},
    });

    tl.add({
      targets: ".corpoLevel",
      opacity: "0",
      height: "0px",
      loop: false,
    }).add({
      targets: ".bgCol",
      height: "0%",
      easing: "easeInOutQuad",
      duration: 1000,

      loop: false,
      delay: function (el, i, l) {
        return i * 50;
      },
      endDelay: function (el, i, l) {
        return (l - i) * 0;
      },
      complete: function (anim) {
        self.props.acaoMenu();
      },
    });
  }

  render() {
    return (
      <HeaderGeral
        id={this.props.id}
        className={`z-depth-0 ${this.props.classe}`}
      >
        <div className='row'>
          <div className='col s4 l5'>
            <Link
              className='brand-logo'
              to='/'
              onClick={() => {
                if (this.props.acao == "close") {
                } else {
                  this.fechar();
                }
              }}
            >
              <img src={this.state.marca[this.props.bg]} alt='Agência Um' />
            </Link>
          </div>
          <div className={`col s4 l2 btnMenub menu-${this.props.bg}`}>
            <span
              className='btnMenu'
              onClick={() => {
                if (this.props.acao == "close") {
                  this.props.acaoMenu();
                } else {
                  this.fechar();
                }
              }}
            >
              <Icon icon='short_text' />
              Menu
            </span>
          </div>

          <div className={`col s4 l5 t-${this.props.bg}`}>
            {(this.props.bg == "white" || window.innerWidth < 600) && (
              <div className='col s12 l4 offset-l8'></div>
            )}
          </div>
        </div>
      </HeaderGeral>
    );
  }
}

Header.defaultProps = {
  bg: "white",
  closeMenu: "",
  classe: "",
};

const mapStateToProps = (state) => ({
  acao: state.menu,
  acaoiframe: state.IframeMenu,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(MenuActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
