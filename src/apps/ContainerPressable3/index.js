import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './Componentes/TelaInicial';
import TelaPlanetas from './Componentes/TelaPlanetas';
import TelaGalaxias from './Componentes/TelaGalaxias';
import TelaBuracoNegro from './Componentes/TelaBuracoNegro';

const Stack = createStackNavigator();

export default function ContainerPressable3App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tela Inicial" component={TelaInicial} options={{ headerShown: false }} />
      <Stack.Screen name="Planetas" component={TelaPlanetas} options={{ headerShown: false }} />
      <Stack.Screen name="Galáxias" component={TelaGalaxias} options={{ headerShown: false }} />
      <Stack.Screen name="Buraco Negro" component={TelaBuracoNegro} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
