import React from "react";
import styles from "./ciclodevida.module.css";

class Mensaje extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mensaje: "Hola Bienvenido!!" };
  }

  cambiarmensaje = () => {
    this.setState({ mensaje: "Adios, vuelve pronto!" });
  };

  componentDidMount() {
    console.log("El componente se ha montado");
  }

  componentDidUpdate() {
    console.log("el componente se ha actualizado");
  }

  componentWillUnmount() {
    console.log("El componente ha muerto ");
  }
  render() {
    return (
      <div className={styles.tarjeta}>
        <p className={styles.texto}>{this.state.mensaje}</p>
        <button className={styles.boton}onClick={this.cambiarmensaje}>Cambiar mensaje</button>
      </div>
    );
  }
}
export default Mensaje;