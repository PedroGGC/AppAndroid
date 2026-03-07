import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from "./Componentes/TelaInicial";
import TelaConsoles from "./Componentes/TelaConsoles";
import TelaJogos from "./Componentes/TelaJogos";
import TelaNuvem from "./Componentes/TelaNuvem";

const Stack = createStackNavigator();

export default function ContainerExemploApp () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tela inicial" component = { TelaInicial } />
      <Stack.Screen name="Consoles" component = { TelaConsoles } />
      <Stack.Screen name="Jogos" component = { TelaJogos } />
      <Stack.Screen name="Nuvem" component = { TelaNuvem } />
    </Stack.Navigator>
  );
};
