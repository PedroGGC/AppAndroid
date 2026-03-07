import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import imgCasal from '../../../aula6-imagens/casal.png';
import imgFilhos from '../../../aula6-imagens/filhos.png';
import imgVovo from '../../../aula6-imagens/vovo.png';
import imgIrmaes from '../../../aula6-imagens/irmaes.png';
import estilos from './estilos';

export default function ScrollView3App() {
  return (
    <ScrollView style={estilos.container}>
      <Text style={estilos.titulo}>Família Simpsons</Text>

      <View style={estilos.card}>
        <Image source={imgCasal} style={estilos.cardImg} resizeMode="cover" />
        <Text style={estilos.cardTitulo}>O Casal</Text>
        <Text style={estilos.cardParagrafo}>Homer Jay Simpson é o pai e patriarca da família Simpsons.</Text>
        <Text style={estilos.cardParagrafo}>Marjorie Jacqueline "Marge" Bouvier Simpson é a esposa de Homer Simpson e mãe de Lisa, Bart e Maggie Simpson na série animada Os Simpsons.</Text>
      </View>

      <View style={estilos.card}>
        <Image source={imgFilhos} style={estilos.cardImg} resizeMode="cover" />
        <Text style={estilos.cardTitulo}>Os Filhos</Text>
        <Text style={estilos.cardParagrafo}>Bartholomew JoJo ou apenas Bart é o filho mais velho e mais travesso.</Text>
        <Text style={estilos.cardParagrafo}>Lisa Marie é a filha do meio e a mais inteligente.</Text>
        <Text style={estilos.cardParagrafo}>Margaret Evelyn Lenny ou apenas Maggie é o bebê da casa.</Text>
      </View>

      <View style={estilos.card}>
        <Image source={imgVovo} style={estilos.cardImg} resizeMode="cover" />
        <Text style={estilos.cardTitulo}>O Vovô</Text>
        <Text style={estilos.cardParagrafo}>Abraham Jebediah "Abe" Simpson II, mais conhecido como Vovô é o pai de Hommer simpson.</Text>
      </View>

      <View style={estilos.card}>
        <Image source={imgIrmaes} style={estilos.cardImg} resizeMode="cover" />
        <Text style={estilos.cardTitulo}>As Cunhadas</Text>
        <Text style={estilos.cardParagrafo}>Patty e Selma são as irmãs de Margie e vivem de forma 'largada'.</Text>
      </View>
    </ScrollView>
  );
}
