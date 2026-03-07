import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imagem: {
    width: '100%',
    height: 300,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitulo: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  paragrafo: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    paddingHorizontal: 20,
    textAlign: 'center'
  }
});

export default estilos;
