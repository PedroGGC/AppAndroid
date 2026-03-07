import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import estilo from '../estilos';

import start from '../../../../../../assets/Aula05-NavegacaoEventoTouch/motos/CG-start.png';
import titan from '../../../../../../assets/Aula05-NavegacaoEventoTouch/motos/CG-titan.png';
import crf from '../../../../../../assets/Aula05-NavegacaoEventoTouch/motos/CRF-250F.png';
import pop from '../../../../../../assets/Aula05-NavegacaoEventoTouch/motos/POP-110i.png';

export default function Motos () {
  return (
    <ScrollView style={estilo.container}>
      <Text style={estilo.titulo}>
        Motos
      </Text>

      <View style={estilo.areaItem}>
        <Image source={start} style={estilo.imagem}/>
        <View style={estilo.areaInformativa}>
          <Text style={estilo.textoInformativo}>CG Start</Text>
        </View>
      </View>

      <View style={estilo.areaItem}>
        <Image source={titan} style={estilo.imagem}/>
        <View style={estilo.areaInformativa}>
          <Text style={estilo.textoInformativo}>CG Titan</Text>
        </View>
      </View>

      <View style={estilo.areaItem}>
        <Image source={crf} style={estilo.imagem}/>
        <View style={estilo.areaInformativa}>
          <Text style={estilo.textoInformativo}>CRF 250F</Text>
        </View>
      </View>

      <View style={estilo.areaItem}>
        <Image source={pop} style={estilo.imagem}/>
        <View style={estilo.areaInformativa}>
          <Text style={estilo.textoInformativo}>POP 110i</Text>
        </View>
      </View>
    </ScrollView>
  );
}
