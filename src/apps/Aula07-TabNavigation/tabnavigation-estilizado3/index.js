import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import TelaPerfil from "./Componentes/TelaPerfil";
import TelaContato from "./Componentes/TelaContato";

const Tabs = createBottomTabNavigator();

export default function TabNavigationEstilizado3App () {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#fff" },
        tabBarLabelStyle: { fontSize: 16 },
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveBackgroundColor: "#013987",
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#013987",
      }}
    >
      <Tabs.Screen 
        name="Perfil" 
        component = { TelaPerfil } 
        options={{
          tabBarIcon: ({ color }) => (<FontAwesome name="user" color={ color } size={ 24 } />),
        }}
      />
      <Tabs.Screen 
        name="Contato" 
        component = { TelaContato } 
        options={{
          tabBarIcon: ({ color }) => (<AntDesign name="contacts" size={ 24 } color={ color } />),
        }}
      />
    </Tabs.Navigator>
  );
};
