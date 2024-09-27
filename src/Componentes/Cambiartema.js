import React from "react";

class CambiarTema extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temaOscuro: false }; //se inicia el componente con un estado false ya que se va a iniciar en un tema claro
  }

  CambiarTema = () => {
    this.setState((prevState) => { //Toma el estado anterior y devuelve un nuevo estado
      return { temaOscuro: !prevState.temaOscuro }; 
    });
  };

  componentDidMount() {
    console.log("Componente montado");
  }

  componentDidUpdate() {
    console.log("el componente se ha actualizado");
  }

  componentWillUnmount() {
    console.log("Componente desmontado");
  }

  render() {
    const { temaOscuro } = this.state; // se usa esto para acceder al estado y construir la interfaz

    const estilos = {
      backgroundColor: temaOscuro ? "#333" : "#fff",
      color: temaOscuro ? "#fff" : "#000",
      padding: "20px",
      textAlign: "center",
    };

    return (
      <div style={estilos}>
        <h1>{temaOscuro ? "Tema Oscuro" : "Tema Claro"}</h1>
        <button onClick={this.CambiarTema}>
          cambiar a {temaOscuro ? "Tema Claro" : "Tema Oscuro"}
        </button>
      </div>
    );
  }
}
export default CambiarTema;
