import React from 'react';
import { Image, Text, View } from 'react-native';

import Capa from '../../../../../../assets/Aula04-CriandoComponente/img1.png';
import estilos from './estilos';

export default function Topo() {
  return(
    <View style={ estilos.containerTopo }>
      <Image source={ Capa } style={ estilos.topoImg } />
      <Text style={ estilos.topoTitulo }>Nintendo Switch</Text>
    </View>
  )
}
