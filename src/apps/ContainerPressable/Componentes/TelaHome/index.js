import React from 'react';
import { View, Text, Pressable } from 'react-native';
import estilos from './estilos';

export default function TelaHome(props) {
  return (
    <View style={estilos.container}>
      <Pressable 
        style={estilos.botao} 
        onPress={() => { props.navigation.navigate('Sobre') }}
      >
        <Text style={estilos.botaoTitle}>Sobre</Text>
      </Pressable>
    </View>
  );
}
