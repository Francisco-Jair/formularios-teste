import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../context/ValidacoesCadastro";
import useErros from "../hooks/useErros.js";

//Usando descontrução para pegar a propriedade
function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const arr = useState("");
  const sobrenome = arr[0];
  const setSobrenome = arr[1];
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (possoEnviar) {
          aoEnviar({ nome, sobrenome, promocoes, novidades });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="nome"
        label="Nome"
        name="nome"
        variant="outlined"
        margin="normal"
        name="nome"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        name="sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        name="cpf"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            name="Promoções"
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            name="Novidades"
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Proximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
