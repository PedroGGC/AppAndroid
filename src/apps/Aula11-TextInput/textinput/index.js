import React from 'react';
import { View } from 'react-native';

import Titulo from './Componentes/Titulo';
import TelaInicial from './Componentes/TelaInicial';

export default function Aula11TextInputApp() {
  return (
    <View style={{ flex: 1 }}>
      <Titulo />
      <TelaInicial />
    </View>
  );
}
