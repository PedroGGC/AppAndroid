import React from 'react';
import { Image, StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function EstiloTelaAplicativoApp({ navigation }) {
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Image style={estilos.img} source={require('../../../../assets/Aula03-EstilizacaoBasica/lua.png')} />

      <View style={estilos.boxTexto}>
        <Text style={estilos.titulo}>Lua</Text>
        <Text style={estilos.texto}>A Lua é o satélite natural do <Text style={estilos.destaque}>planeta Terra</Text>, distanciados por aproximadamente 384.405 km.</Text>
      </View>

      <View style={{ marginTop: 40 }}>
        <Button title="Voltar" onPress={() => navigation.goBack()} color="#1e1e1e" />
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 30,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 50
  },
  boxTexto: {
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 20,
    borderStyle: 'dotted',
    width: 300,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  titulo: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  texto: {
    color: '#fff',
    textAlign: 'center'
  },
  destaque: {
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});
