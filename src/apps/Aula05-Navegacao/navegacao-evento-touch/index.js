import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from "./Componentes/Inicio";
import Carros from "./Componentes/Carros";
import Motos from "./Componentes/Motos";

const Stack = createStackNavigator();

export default function NavegacaoEventoTouchApp () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component = { Inicio } />
      <Stack.Screen name="Carros" component = { Carros } />
      <Stack.Screen name="Motos" component = { Motos } />
    </Stack.Navigator>
  );
}
