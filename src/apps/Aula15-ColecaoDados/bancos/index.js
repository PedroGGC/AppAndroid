import React from 'react';
import { View } from 'react-native';

import ListaBancos from './componentes/ListaBancos';

export default function Aula15BancosApp() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ListaBancos />
    </View>
  );
}
