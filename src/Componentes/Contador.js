import React from "react";
import styles from "./contador.module.css";

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div className={styles.cardcontador}>
        <h2 className={styles.titulo}>Contador:</h2>
        <p className={styles.numeros}>{this.state.contador}</p>
        <button className={styles.boton} onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}
export default Contador;
