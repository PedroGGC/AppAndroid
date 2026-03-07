import React, { useState } from "react";
import { Button, Text, View } from "react-native";

import retornaHora from "../../servicos/hora";
import estilos from "./estilos";

export function Hora() {
  const [hora, setHora] = useState(retornaHora());
  
  function handleBotaoHora() {
    const horaAtual = retornaHora();
    setHora(horaAtual);
  }
  
  function handleBotaoLimpar() {
    setHora("");
  }
  
  return(
    <View style={estilos.container}>
      <Text style={estilos.texto}>{hora}</Text>
      
      <View style={estilos.botoesContainer}>
        <Button title="Hora Atual" onPress={handleBotaoHora} color="#1f4f66"/>
        <Button title="Limpar" onPress={handleBotaoLimpar} color="#e53b62"/>
      </View>
    </View>
  );
}
