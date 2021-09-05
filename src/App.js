import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { validarCpf, validarSenha } from "./models/cadastro";
import "fontsource-roboto";
import "./App.css";
import ValidacoesCadastro from "./context/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulario de cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{
            cpf: validarCpf,
            senha: validarSenha,
            nome: validarSenha,
          }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForms} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForms(dados) {
  console.log(dados);
}

export default App;
