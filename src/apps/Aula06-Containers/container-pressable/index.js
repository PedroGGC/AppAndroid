import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TelaHome from './Componentes/TelaHome';
import TelaSobre from './Componentes/TelaSobre';

const Stack = createStackNavigator();

export default function ContainerPressableApp() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TelaHome} />
      <Stack.Screen name="Sobre" component={TelaSobre} />
    </Stack.Navigator>
  );
}
