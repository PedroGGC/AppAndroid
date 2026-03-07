import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function StyleSheetApp({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Estilizando (StyleSheet)</Text>
      
      <View style={{ marginTop: 20 }}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: 'darkblue',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  texto: {
    fontSize: 36,
    color: 'white'
  }
});
