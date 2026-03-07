import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import Conteudo from './Componentes/Conteudo';
import Topo from './Componentes/Topo';

export default function ComponenteTopoConteudoApp({ navigation }) {
  return (
    <View style={estilos.containerTopo}>
      <Topo />
      <Conteudo />
      <View style={{ padding: 20 }}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  containerTopo: {
    flex: 1,
  }
});
