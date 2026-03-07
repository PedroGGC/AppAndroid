import React from "react";
import { View, Image } from "react-native";

import imrCapa from '../../../../../../assets/Aula07-TabNavigationEvanescence/capa.png';
import estilos from './estilos';

export default function TelaGato() {
  return (
    <View style={estilos.container}>
      <Image resizeMode="contain" source={ imrCapa } style={ estilos.img } />
    </View>
  )
}
