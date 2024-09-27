import React from "react";
import Mensaje from "./mensaje";
import styles from "./ciclodevida.module.css"

class Ciclodevida extends React.Component {
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
        <button className= {styles.botonMostrar}onClick={this.toggleComponente}>
          {this.state.mostrarComponente
            ? "Ocultar Ciclodevida"
            : "Mostar Ciclodevida"}
        </button>
        {this.state.mostrarComponente && <Mensaje />}
      </div>
    );
  }
}
export default Ciclodevida;
