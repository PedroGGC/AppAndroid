import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import TelaInicial from "./Componentes/TelaInicial";
import TelaSobre from "./Componentes/TelaSobre";
import TelaContato from "./Componentes/TelaContato";

const Tabs = createBottomTabNavigator();

export default function TabNavigationEstilizado2App () {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#eab990",
        },
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: "bold",
        },
        tabBarActiveBackgroundColor: "#e07d42",
        tabBarInactiveTintColor: "#f00",
        tabBarActiveTintColor: '#150b13',
        tabBarLabelPosition: 'beside-icon'
      }}
    >
      <Tabs.Screen 
        name="Início" 
        component = { TelaInicial } 
        options={{
          tabBarIcon: ({ color }) => (<Entypo name="home" color={color} size={ 24 } />),
        }}
      />
      <Tabs.Screen 
        name="Sobre" 
        component = { TelaSobre } 
        options={{
          tabBarIcon: ({ color }) => (<FontAwesome name="question-circle-o" color={color} size={ 24 } />),
        }}
      />
      <Tabs.Screen 
        name="Contato" 
        component = { TelaContato } 
        options={{
          tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="contacts" color={color} size={ 24 } />),
        }}
      />
    </Tabs.Navigator>
  );
};
