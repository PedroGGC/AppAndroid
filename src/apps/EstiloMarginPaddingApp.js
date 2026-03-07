import React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';

export default function EstiloMarginPaddingApp({ navigation }) {
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      
      <View style={estilos.card}>
        <Text style={estilos.titulo}>Mobile Developer</Text>
        <Text style={estilos.texto}>Michonne Hawthorne</Text>
        <Image style={estilos.img} source={require('../../aula3-img/mobile-img.png')} />
      </View>

      <View style={estilos.card}>
        <Text style={estilos.titulo}>Backend Developer</Text>
        <Text style={estilos.texto}>Elijah Price / Mr Glass</Text>
        <Image style={estilos.img} source={require('../../aula3-img/backend-img.png')} />
      </View>

      <View style={estilos.card}>
        <Text style={estilos.titulo}>Full Stack Developer</Text>
        <Text style={estilos.texto}>Chuck Norris</Text>
        <Image style={estilos.img} source={require('../../aula3-img/fullstack-img.png')} />
      </View>

      <View style={{ marginTop: 10, marginBottom: 30 }}>
        <Button title="Voltar" onPress={() => navigation.goBack()} color="#2d1f76" />
      </View>

    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dbe9f8',
    paddingVertical: 20
  },
  card: {
    backgroundColor: '#5450d6',
    width: 300,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#2d1f76',
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  titulo: {
    color: '#fff',
    fontSize: 18,
  },
  texto: {
    color: '#a7abff',
    marginBottom: 10,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 75, // 25 seria o correto para círculo, mas mantive o seu código 75
    borderColor: '#fff',
    borderWidth: 2,
  }
});
