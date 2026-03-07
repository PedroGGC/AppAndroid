import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

import imgPlaneta from '../../../../../../assets/Aula06-ContainerExemplo/planetas1.png';
import estilos from './estilos';

export default function TelaInicial(props) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Explorador Espacial</Text>
      <Text style={estilos.descricao}>O Universo é tudo o que existe fisicamente, a soma do espaço e do tempo e as mais variadas formas de matéria.</Text>
      
      <Image source={imgPlaneta} style={estilos.cardImg} />

      <View style={estilos.boxBotoes}>
        <Pressable 
          onPress={() => { props.navigation.navigate("Planetas") }} 
          style={estilos.botaoContainer}
        >
          <Text style={estilos.botaoLabel}>Planetas</Text>
        </Pressable>

        <Pressable 
          onPress={() => { props.navigation.navigate("Buraco Negro") }}
          style={estilos.botaoContainer}
        >
          <Text style={estilos.botaoLabel}>Buraco Negro</Text>
        </Pressable>

        <Pressable 
          onPress={() => { props.navigation.navigate("Galáxias") }}
          style={estilos.botaoContainer}
        >
          <Text style={estilos.botaoLabel}>Galáxias</Text>
        </Pressable>
      </View>
    </View>
  );
}
