import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";

//Usando descontrução para pegar a propriedade
function FormularioCadastro({ aoEnviar }) {
  //Função dentro de funções
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const formularios = [
    <DadosUsuarios aoEnviar={coletaDados} />,
    <DadosPessoais aoEnviar={coletaDados} />,
    <DadosEntrega aoEnviar={coletaDados} />,
    <Typography variant="h5">Obrigado pelo cadastro!</Typography>,
  ];

  function coletaDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }

  function proximo() {
    // Muda o estado
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
