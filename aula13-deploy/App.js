import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaInicio from './telas/TelaInicio';
import TelaTabuada from "./telas/TelaTabuada";
import TelaRespostaCorreta from "./telas/TelaRespostaCorreta";
import TelaRespostaErrada from "./telas/TelaRespostaErrada";

const Navegacao = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navegacao.Navigator screenOptions={{ headerShown: false }}>
        <Navegacao.Screen name="Inicio" component = { TelaInicio } />
        <Navegacao.Screen name="Tabuada" component = { TelaTabuada } />
        <Navegacao.Screen name="RespostaCorreta" component = { TelaRespostaCorreta } />
        <Navegacao.Screen name="RespostaErrada" component = { TelaRespostaErrada } />
      </Navegacao.Navigator>
    </NavigationContainer>
  );
}
