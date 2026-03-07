import React from 'react';
import { View, Button } from 'react-native';

import BarraTitulo from './Componentes/BarraTitulo';
import Card from './Componentes/Card';
import Conteudo from './Componentes/Conteudo';

import estilos from '../../../estilos';

export default function ComponenteImportExportApp({ navigation }) {
  return (
    <View style={ estilos.container }>
      <BarraTitulo />
      <Card />
      <Conteudo />
      <View style={{ padding: 20 }}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
