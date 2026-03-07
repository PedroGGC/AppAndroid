import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome } from '@expo/vector-icons';

import TelaInicial from "./Componentes/TelaInicial";
import TelaSobre from "./Componentes/TelaSobre";

const Tabs = createBottomTabNavigator();

export default function TabNavigationIconesAbas1App () {
  return (
    <Tabs.Navigator screenOptions={{tabBarLabelStyle:{fontSize: 20}}} >
      <Tabs.Screen 
        name="Início" 
        component = { TelaInicial } 
        options={{
          tabBarIcon: ({ color }) => (<Entypo name="home" color={ color } size={ 24 } />),
        }}
      />
      <Tabs.Screen 
        name="Sobre" 
        component = { TelaSobre } 
        options={{
          tabBarIcon: ({ color }) => (<FontAwesome name="question-circle-o" color={ color } size={ 24 } />),
        }}
      />
    </Tabs.Navigator>
  );
};
