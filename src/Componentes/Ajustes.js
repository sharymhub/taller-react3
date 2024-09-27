import React from "react";
import CambiarTema from "./Cambiartema";

class Ajustes extends React.Component {
    constructor(props) {
      super(props);
      this.state = { mostrarComponente: true };
    }
  
    toggleComponente = () => {
      this.setState((prevState) => ({
        mostrarComponente: !prevState.mostrarComponente,
      }));
    };
  
    render() {
      return (
        <div>
          <button onClick={this.toggleComponente}>
            {this.state.mostrarComponente
              ? "Ocultar Ajuste "
              : "Mostar Ajuste"}
          </button>
          {this.state.mostrarComponente && <CambiarTema/>}
        </div>
      );
    }
  }
  export default Ajustes;