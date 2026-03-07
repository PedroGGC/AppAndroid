import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import TelaGato from './Componentes/TelaGato';
import TelaCachorro from './Componentes/TelaCachorro';

const Tabs = createBottomTabNavigator();

export default function TabNavigationPersonalizando3App() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Gato"
        component={TelaGato}
        options={{
          tabBarIcon: ({ color }) => (<FontAwesome5 name="cat" size={24} color={color} />),
        }}
      />
      <Tabs.Screen
        name="Cachorro"
        component={TelaCachorro}
        options={{
          tabBarIcon: ({ color }) => (<FontAwesome5 name="dog" size={24} color={color} />),
        }}
      />
    </Tabs.Navigator>
  );
}
