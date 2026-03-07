import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function EstiloPalavraDestaqueApp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>
        Exemplo de palavra <Text style={styles.destaque}>destacada</Text> das demais
      </Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: "center",
    justifyContent: "center", 
    padding: 20,
  },
  destaque: {
    fontWeight: 'bold',
  }
});
