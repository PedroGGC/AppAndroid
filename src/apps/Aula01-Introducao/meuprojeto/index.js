import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HelloWorldApp() {
  return (
    <View style={styles.container}>
      <Text style={ styles.texto }>Hello World</Text>
      <Text>Criado por Edilson Lima</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  texto: {
    marginTop: 20,
    fontSize: 36,
  }
});
