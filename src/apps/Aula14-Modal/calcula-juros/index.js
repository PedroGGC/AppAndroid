import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CalculaJuros from './Componentes/CalculaJuros';

const Abas = createBottomTabNavigator();

const Aula14CalculaJurosApp = () => (
  <Abas.Navigator screenOptions={{ headerShown: false }}>
    <Abas.Screen 
      name="Juros" 
      component={CalculaJuros} 
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="percentage" size={24} color={color} />
        ),
      }} 
    />
  </Abas.Navigator>
);

export default Aula14CalculaJurosApp;
