import React from "react";
import { Text, View } from "react-native";
import { Entypo, FontAwesome } from '@expo/vector-icons';

import estilos from "./estilos";

export default function TabNavigationIcones1App () {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.texto }>Casa (home)</Text>
      <Entypo name="home" size={ 24 } color="black" />

      <Text style={ estilos.texto }>Usuário (user)</Text>
      <FontAwesome name="user" size={24} color="black" />
    </View>
  );
};
