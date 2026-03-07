import React from 'react';
import { Image, Text, View } from 'react-native';

import convidado from '../../../../../aula8-imagens/convidado.png';
import carne from '../../../../../aula8-imagens/carne.png';
import refrigerante from '../../../../../aula8-imagens/refrigerante.png';
import cerveja from '../../../../../aula8-imagens/cerveja.png';

import estilo from './estilo';

export default function Cards () {
  return (
    <View style={ estilo.boxDados }>
      <View style={ estilo.boxCard }>
        <Image style={ estilo.boxCardIcone } source={ convidado }/>
        
        <Text style={ estilo.boxCardTexto }>
          Convidados
        </Text>
        
        <Text style={ estilo.boxCardValor }>
          1
        </Text>
      </View>

      <View style={ estilo.boxCard }>
        <Image style={ estilo.boxCardIcone } source={ carne }/>
        
        <Text style={ estilo.boxCardTexto }>
          Carne
        </Text>
        
        <Text style={ estilo.boxCardValor }>
          400 GR
        </Text>
      </View>

      <View style={ estilo.boxCard }>
        <Image style={ estilo.boxCardIcone } source={ refrigerante }/>
        
        <Text style={ estilo.boxCardTexto }>
          Refrigerante
        </Text>
        
        <Text style={ estilo.boxCardValor }>
          700 ML
        </Text>
      </View>

      <View style={ estilo.boxCard }>
        <Image style={ estilo.boxCardIcone } source={ cerveja }/>
        
        <Text style={ estilo.boxCardTexto }>
          Cerveja
        </Text>
        
        <Text style={ estilo.boxCardValor }>
          4 Latas
        </Text>
      </View>
    </View>
  );
}
