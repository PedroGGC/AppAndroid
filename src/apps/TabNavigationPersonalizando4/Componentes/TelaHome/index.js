import React from "react";
import { View, Image } from "react-native";

import imrCapa from '../../../../../aula7-imagens/capa.png';
import estilos from './estilos';

export default function TelaGato() {
  return (
    <View style={estilos.container}>
      <Image resizeMode="contain" source={ imrCapa } style={ estilos.img } />
    </View>
  )
}
