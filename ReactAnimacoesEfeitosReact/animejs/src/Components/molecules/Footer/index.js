import React, { Component } from "react";
import { Container } from "./styles";
import marcaBranca from "../../../assets/img/marcaBranca.png";
import Lines from "../Lines";
import M from 'materialize-css'

export default class Footer extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".modal2");

    var instances = M.Modal.init(elems, {
      dismissible: false
    });
  }
  render() {
    return (
      <Container className={this.props.classe}>
          <Lines bg="black"/>


          <p className="inf1">© Agência UM</p>
          <p className="inf2">Privacidade</p>
          
          <p className="inf3 modal-trigger"  
              href="#modal2">Coleta Pública</p> 

        <div className="col s6 no-padding">
          <div className="col l6 no-padding marcaBrancaB">
            <img src={marcaBranca} alt="Marca Branca" className="marcaBranca" />
          </div>
          <div className="col l6 entreEmContato no-padding">
            <h2>Entre em contato</h2>
            <p>contato@agenciaum.ag</p>
          </div>
        </div>
        <div className="col s6 no-padding">
          <div className="col l6 no-padding">
          <div className="col l12 no-padding ">
            <div className='endAg end1'>
            <h2>Recife-PE</h2>
            <p>
              Empresarial Charles Darwin Rua Senador José Henrique, 231, 28º
              andar Ilha do Leite | CEP: 50070-460
            </p>
            </div>
         
          
          </div>
          <div className="col l12 no-padding ">
          <div className='endAg'>

            <h2>Maceió-AL</h2>
            <p>
              Empresarial JTR - Torre Itália Rua José Pontes de Magalhães, 70,
              sala 502 Jatiúca | CEP: 57036-250
            </p>
          </div>
          </div>
          </div>
          <div className="col l6 no-padding ">
          <div className='endAg end3'>

            <h2>Rio de Janeiro-RJ</h2>
            <p>
            Rua Domício da Gama, 1014. Sala 205, Centro - Maricá/RJ. CEP 24900-815
            </p>
          </div>
          </div>
        </div>










        <div id="modal2" className="modal modal2 modal-fixed-footer">
        <div className=" col s12 no-padding">
            <h4 className='titulo'>Coleta Pública</h4>
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
              onClick={() => {
                this.setState({
                  blur: ""
                });
              }}
            >
              {" "}
              X{" "}
            </a>

            <div className="divider"></div>

            </div>
          <div className="modal-content">

          

             <div className="col s12 corpoMod">
               <h2>
                  Nota 01
               </h2>
               <div className="col s12 no-padding">
                    {
                      <>
                          <p><strong>Teste</strong></p>

                          <p>sadasdsad</p>
                          
                          <p><strong>sadsadsadsad</strong></p>
                          
                          <p>sadsadsadsadasd</p>
                          
                          <p><strong>sadsadsad</strong></p>
                          
                          <p>sadsadsadsadasd</p>
                    </>
                    }
               </div>
               <div className="divider"></div>

             </div>
             <div className="col s12 corpoMod">
               <h2>
                  Nota 02
               </h2>
               <div className="col s12 no-padding">
                    {
                      <>
                          <p><strong>Teste</strong></p>

                          <p>sadasdsad</p>
                          
                          <p><strong>sadsadsadsad</strong></p>
                          
                          <p>sadsadsadsadasd</p>
                          
                          <p><strong>sadsadsad</strong></p>
                          
                          <p>sadsadsadsadasd</p>
                    </>
                    }
               </div>
               <div className="divider"></div>

             </div>
              

            </div>
          
         
          
        </div>





      </Container>
    );
  }
}
