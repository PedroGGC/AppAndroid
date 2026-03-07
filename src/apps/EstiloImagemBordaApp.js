import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';

export default function EstiloImagemBordaApp({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Os Simpsons</Text>
      
      <Image 
        style={estilos.img} 
        source={require('../../aula3-img/bart-img.png')} 
      />
      
      <Text style={estilos.texto}>Bart o filho mais velho</Text>

      <View style={{ marginTop: 30 }}>
        <Button title="Voltar" onPress={() => navigation.goBack()} color="#000" />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fedaa0',
  },
  titulo: {
    color: '#000',
    fontSize: 32,
    marginBottom: 20,
  },
  texto: {
    color: '#000',
    marginBottom: 20,
    fontSize: 20,
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 75,
    borderColor: '#000',
    borderWidth: 2,
  }
});
