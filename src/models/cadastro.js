function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: true, texto: "CPF deve ter 11 diagitos." };
  } else {
    return { valido: false, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return { valido: true, texto: "Senha deve ter 4 e 72 digitos." };
  } else {
    return { valido: false, texto: "" };
  }
}

export { validarCpf, validarSenha };
