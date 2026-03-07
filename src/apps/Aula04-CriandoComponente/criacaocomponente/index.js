import React from 'react';
import { Image, StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function CriacaoComponenteApp({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../../../assets/Aula04-CriandoComponente/logo.png')} style={styles.img} />
      <Text style={styles.paragrafo}>
        Windows 11 foi anunciado em 24 de junho de 2021, e desenvolvido pela Microsoft. É o sucessor do Windows 10, lançado seis anos antes.
      </Text>

      <View style={{ marginTop: 40 }}>
        <Button title="Voltar" onPress={() => navigation.goBack()} color="#333" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b6d4ed',
    padding: 20,
  },
  img: {
    width: 300,
    height: 50,
  },
  paragrafo: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
