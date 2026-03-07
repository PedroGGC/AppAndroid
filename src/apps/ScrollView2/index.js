import React from 'react';
import { Text, ScrollView, View, Image } from 'react-native';

import Capa from '../../../aula6-imagens/capa.png';
import estilos from './estilos';

export default function ScrollView2App() {
  return (
    <View style={estilos.container}>
      <Image source={ Capa } style={ estilos.imagem } />

      <Text style={estilos.titulo}>The Beatles</Text>
      <Text style={estilos.subtitulo}>Help</Text>

      <ScrollView>
        <Text style={estilos.paragrafo}>
          Help, I need somebody{"\n"}
          Help, not just anybody{"\n"}
          Help, you know I need someone, help!
        </Text>

        <Text style={estilos.paragrafo}>
          When I was younger, so much younger than today{"\n"}
          I never needed anybody's help in any way{"\n"}
          But now these days are gone, I'm not so self assured{"\n"}
          Now I find I've changed my mind and opened up the doors
        </Text>

        <Text style={estilos.paragrafo}>
          Help me if you can, I'm feeling down{"\n"}
          And I do appreciate you being round{"\n"}
          Help me, get my feet back on the ground{"\n"}
          Won't you please, please help me?
        </Text>

        <Text style={estilos.paragrafo}>
          And now my life has changed in oh so many ways{"\n"}
          My independence seems to vanish in the haze{"\n"}
          But every now and then I feel so insecure{"\n"}
          I know that I just need you like I've never done before
        </Text>

        <Text style={estilos.paragrafo}>
          Help me if you can, I'm feeling down{"\n"}
          And I do appreciate you being round{"\n"}
          Help me, get my feet back on the ground{"\n"}
          Won't you please, please help me?
        </Text>

        <Text style={estilos.paragrafo}>
          When I was younger, so much younger than today{"\n"}
          I never needed anybody's help in any way{"\n"}
          But now these days are gone, I'm not so self assured{"\n"}
          Now I find I've changed my mind and opened up the doors
        </Text>

        <Text style={estilos.paragrafo}>
          Help me if you can, I'm feeling down{"\n"}
          And I do appreciate you being round{"\n"}
          Help me, get my feet back on the ground{"\n"}
          Won't you please, please help me?
        </Text>
      </ScrollView>
    </View>
  );
}
