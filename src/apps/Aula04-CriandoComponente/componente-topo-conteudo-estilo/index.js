import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import Capa from '../../../../assets/Aula04-CriandoComponente/img1.png';
import Jogos from '../../../../assets/Aula04-CriandoComponente/img2.png';

function Topo() {
  return(
    <View style={ estilos.containerTopo }>
      <Image source={ Capa } style={ estilos.topoImg } />
      <Text style={ estilos.topoTitulo }>Nintendo Switch</Text>
    </View>
  )
}

function Conteudo() {
  return(
    <View style={ estilos.containerConteudo }>
      <Text style={ estilos.titulo }>Os principais jogos estão aqui</Text>
      <Image source={ Jogos } style={ estilos.img } />
      <Text style={ estilos.descricao }>A família Nintendo Switch é o lar de jogos exclusivos de séries como Super Smash Bros., The Legend of Zelda, Mario Kart e muitas outras.</Text>
    </View>
  )
}

export default function ComponenteTopoConteudoEstiloApp({ navigation }) {
  return (
    <View style={estilos.containerApp}>
      <Topo />
      <Conteudo />
      <View style={{ padding: 20 }}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  containerApp: {
    flex: 1,
  },
  containerTopo: {
    backgroundColor: '#e60012',
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  topoTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  topoImg: {
    width: 100,
    height: 100
  },
  containerConteudo: {
    padding: 30,
    alignItems: "center",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  descricao: {
    textAlign: "center",
    marginBottom: 30,
  },
  img: {
    width: 200,
    height: 120,
    marginBottom: 10,
  }
});
