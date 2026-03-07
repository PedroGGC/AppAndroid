import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function EstiloTextoApp({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Estilizando o aplicativo</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rebeccapurple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 36,
    color: 'white'
  },
});
