import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import TelaGato from './Componentes/TelaGato';
import TelaCachorro from './Componentes/TelaCachorro';

const Tabs = createBottomTabNavigator();

export default function TabNavigationPersonalizando2App() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4530b2'
        },
        headerTitleStyle: {
          color: '#fff',
          fontWeight: 'bold'
        },
        headerTitleAlign: 'center',

        tabBarStyle: {
          backgroundColor: '#fff',
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveBackgroundColor: '#ff7a00',
        tabBarActiveTintColor: '#fff',
      }}
    >
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
