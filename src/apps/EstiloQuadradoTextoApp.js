import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';

export default function EstiloQuadradoTextoApp({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Raposa</Text>
      <Text style={estilos.texto}>Mamífero da família Canidae.</Text> 
      
      <Image 
        style={estilos.img} 
        source={require('../../aula3-img/raposa.png')} 
      />

      <View style={{ marginTop: 30 }}>
        <Button title="Voltar" onPress={() => navigation.goBack()} color="#1e1e1e" />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#4530b2'
  },
  titulo: {
    color: '#fff',
    fontSize: 22
  }, 
  texto: {
    color: '#a7abff'
  },
  img: {
    marginTop: 20,
    width: 150,
    height: 200,
  },
});
