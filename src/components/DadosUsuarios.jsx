import { TextField, Button } from "@material-ui/core";
import React from "react";
import { useState, useContext } from "react";
import ValidacoesCadastro from "../context/ValidacoesCadastro";
import useErros from "../hooks/useErros.js";

function DadosUsuarios({ aoEnviar }) {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        id="senha"
        name="senha"
        error={erros.senha.valido}
        helperText={erros.senha.texto}
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuarios;
