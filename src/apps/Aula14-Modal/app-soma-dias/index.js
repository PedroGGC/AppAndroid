import React from 'react';
import { View } from 'react-native';

import { CalculadoraDias } from './componentes/calculadoraDias';

export default function Aula14AppSomaDias() {
  return (
    <View style={{ flex: 1 }}>
      <CalculadoraDias />
    </View>
  );
}
