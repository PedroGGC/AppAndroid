import fatosHistoricos from "../dados/fatos";

export function buscaFatos() {
  return fatosHistoricos[Math.floor(Math.random() * fatosHistoricos.length)];
}

export function checaRespostaCerta(respostaUsuario, ano) {
  let respostaCerta = false;

  if(respostaUsuario == ano) {
    respostaCerta = true;
  }

  return respostaCerta;
}
