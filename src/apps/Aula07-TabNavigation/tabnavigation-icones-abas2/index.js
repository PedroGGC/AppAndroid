import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import TelaInicial from "./Componentes/TelaInicial";
import TelaQuartos from "./Componentes/TelaQuartos";
import TelaContato from "./Componentes/TelaContato";

const Tabs = createBottomTabNavigator();

export default function TabNavigationIconesAbas2App () {
  return (
    <Tabs.Navigator>
      <Tabs.Screen 
        name="Início" 
        component = { TelaInicial } 
        options={{
          tabBarIcon: ({ color }) => (<Entypo name="home" color={ color } size={ 24 } />),
        }}
      />
      <Tabs.Screen 
        name="Quartos" 
        component = { TelaQuartos } 
        options={{
          tabBarIcon: ({ color }) => (<FontAwesome name="bed" color={ color } size={ 24 } />),
        }}
      />
      <Tabs.Screen 
        name="Contato" 
        component = { TelaContato } 
        options={{
          tabBarIcon: ({ color }) => (<FontAwesome5 name="phone-alt" color={ color } size={ 24 } />),
        }}
      />
    </Tabs.Navigator>
  );
};
