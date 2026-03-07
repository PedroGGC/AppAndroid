import React from 'react';
import { View } from 'react-native';

import Topo from './Componentes/Topo';
import Texto from './Componentes/Texto';
import Cards from './Componentes/Cards';

export default function EstilizandoFlexbox1App () {
  return (
    <View>
      <Topo />
      <Texto />
      <Cards />
    </View>
  );
}
