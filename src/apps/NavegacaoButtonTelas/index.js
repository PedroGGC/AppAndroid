import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaContato from "./Componentes/TelaContato";
import TelaHome from "./Componentes/TelaHome";
import TelaSobre from "./Componentes/TelaSobre";

const Abas = createBottomTabNavigator();

export default function NavegacaoButtonTelasApp () {
  return (
    <Abas.Navigator>
      <Abas.Screen name="Tela inicial" component = { TelaHome } />
      <Abas.Screen name="Contato" component = { TelaContato } />
      <Abas.Screen name="Sobre" component = { TelaSobre } />
    </Abas.Navigator>
  );
}
