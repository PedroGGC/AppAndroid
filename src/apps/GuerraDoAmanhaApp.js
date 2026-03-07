import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';

export default function GuerraDoAmanhaApp({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Guerra do Amanhã</Text>
      <Text style={estilos.descricao}>Gêneros: Ação e ficção</Text>
      
      <Image
        source={require('../../imagens-aula2/capa.png')}
        style={estilos.img}
      />

      <View style={{ marginTop: 20 }}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    marginBottom: 10,
  },
  descricao: {
    marginBottom: 20
  },
  img: {
    width: 300,
    height: 300,
  },
});
