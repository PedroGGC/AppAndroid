import React from 'react';
import { ImageBackground, View, Text } from 'react-native';

import imgRaposa from '../../../../assets/Aula06-ContainerExemplo/raposa.png';
import imgAterrissagem from '../../../../assets/Aula06-ContainerExemplo/aterrissagem.png';
import imgToxico from '../../../../assets/Aula06-ContainerExemplo/design-toxico.png';
import estilos from './estilos';

export default function ContainerExemplo3App() {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Top Fotografias</Text>
      <Text style={ estilos.subtitulo }>Candidatas a prêmio de fotografia da vida selvagem em 2021</Text>

      <ImageBackground style={ estilos.card } source={ imgRaposa }>
        <Text style={ estilos.cardTitulo }>Raposa da tempestade</Text>
        <Text style={ estilos.cardParagrafo }>Jonny Armstrong</Text>
      </ImageBackground>

      <ImageBackground style={ estilos.card } source={ imgAterrissagem }>
        <Text style={ estilos.cardTitulo }>Aterrissagem de Apolo</Text>
        <Text style={ estilos.cardParagrafo }>Ermelin Dupiex</Text>
      </ImageBackground>

      <ImageBackground style={ estilos.card } source={ imgToxico }>
        <Text style={ estilos.cardTitulo }>Design tóxico</Text>
        <Text style={ estilos.cardParagrafo }>Gheorghe Popa</Text>
      </ImageBackground>

    </View>
  );
}
