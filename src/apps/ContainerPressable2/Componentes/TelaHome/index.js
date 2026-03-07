import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

import estilos from './estilos';
import icon from '../../../../../aula6-imagens/info.png';
import iconBR from '../../../../../aula6-imagens/info-branco.png';

export default function TelaHome(props) {
  return (
    <View style={estilos.container}>
      
      <Pressable 
        style={estilos.botao}
        onPress={() => { props.navigation.navigate('Sobre') }}
      >
        <Text style={estilos.botaoTitle}>Sobre</Text>
      </Pressable>

      <Pressable 
        style={estilos.botao2}
        onPress={() => { props.navigation.navigate('Sobre') }}
      >
        <Image style={estilos.botao2Icon} source={icon}/>
        <Text style={estilos.botao2Title}>Sobre</Text>
      </Pressable>

      <Pressable 
        style={estilos.botao3}
        onPress={() => { props.navigation.navigate('Sobre') }}
      >
        <Image style={estilos.botao3Icon} source={iconBR}/>
      </Pressable>

      <Pressable 
        style={estilos.botao4}
        onPress={() => { props.navigation.navigate('Sobre') }}
      >
        <Text style={estilos.botao4Titulo}>
          Navegar para tela sobre
        </Text>
        <Text>
          Clique nesta caixa de texto para navegar para a tela Sobre
        </Text>
      </Pressable>

    </View>
  );
}
