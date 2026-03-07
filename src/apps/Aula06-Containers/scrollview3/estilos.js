import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 30
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center'
  },
  cardImg: {
    width: 250,
    height: 250,
    marginBottom: 15,
    borderRadius: 8
  },
  cardTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  cardParagrafo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
    lineHeight: 22
  }
});

export default estilos;
