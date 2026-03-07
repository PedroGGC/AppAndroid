export default function retornaHora() {
  const dataHora = new Date();
  const horaAtual = dataHora.getHours() + ":" + dataHora.getMinutes();
  return horaAtual;
}
