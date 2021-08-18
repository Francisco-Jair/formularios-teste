import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulario de cadastro
        </Typography>
        <FormularioCadastro aoEnviar={aoEnviarForms} validarCPF={validarCpf} />
      </Container>
    );
  }
}

function aoEnviarForms(dados) {
  console.log(dados);
}

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: true, texto: "CPF deve ter 11 diagitos." };
  } else {
    return { valido: false, texto: "" };
  }
}

export default App;
