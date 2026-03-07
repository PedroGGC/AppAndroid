import React from 'react';
import { View } from 'react-native';

import ListaCarros from './componentes/ListaCarros';

export default function Aula15CarrosApp() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ListaCarros />
    </View>
  );
}
