import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaInicial from "./Componentes/TelaInicial";
import TelaPokemon1 from "./Componentes/TelaPokemon1";
import TelaPokemon2 from "./Componentes/TelaPokemon2";
import TelaPokemon3 from "./Componentes/TelaPokemon3";

const Drawer = createDrawerNavigator();

export default function NavegacaoDrawerApp () {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component = { TelaInicial } />
      <Drawer.Screen name="Pokémon 1" component = { TelaPokemon1 } />
      <Drawer.Screen name="Pokémon 2" component = { TelaPokemon2 } />
      <Drawer.Screen name="Pokémon 3" component = { TelaPokemon3 } />
    </Drawer.Navigator>
  );
}
