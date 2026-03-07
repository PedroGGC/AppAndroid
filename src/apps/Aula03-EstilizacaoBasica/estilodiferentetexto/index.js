import React from 'react';
import { Image, StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function EstiloDiferenteTextoApp({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.imagem} source={require('../../../../assets/Aula03-EstilizacaoBasica/capa-livro.webp')} />
      <Text style={styles.titulo}>Uma Breve História do Tempo</Text>
      <Text style={styles.descricao}>
        Marco definitivo da literatura de divulgação científica, Uma breve história do tempo é relançado em edição revista e atualizada.
      </Text>
      <Text style={styles.citacao}>
        "Uma obra magistral." The Wall Street Journal
      </Text>
      <Text style={styles.citacao}>
        "Uma breve história do tempo é a união do entusiasmo de uma criança ao intelecto de um gênio." The Sunday Times
      </Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  imagem: {
    width: 175,
    height: 250,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  descricao: {
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: "center"
  },
  citacao: {
    fontStyle: 'italic',
    marginBottom: 10,
    textAlign: "center"
  }
});
