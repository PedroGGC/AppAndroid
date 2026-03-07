import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import TelaJavaScript from "./Componentes/TelaJavaScript";
import TelaReact from "./Componentes/TelaReact";
import TelaNode from "./Componentes/TelaNode";

const Stack = createStackNavigator();

export default function NavegacaoStackApp () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="JavaScript" component = { TelaJavaScript } />
      <Stack.Screen name="React" component = { TelaReact } />
      <Stack.Screen name="NodeJS" component = { TelaNode } />
    </Stack.Navigator>
  );
}
