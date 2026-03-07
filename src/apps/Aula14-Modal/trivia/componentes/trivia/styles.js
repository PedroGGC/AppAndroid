import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 32,
  },
  subtitulo: {
    fontSize: 18,
    marginBottom: 24,
  },
  errouArea: {
    backgroundColor: '#F94545',
    width: '80%',
    padding: 20,
    marginBottom: 20,
  },
  acertouArea: {
    backgroundColor: '#45F9B3',
    width: '80%',
    padding: 20,
    marginBottom: 20,
  },
  status: {
    fontSize: 20,
    marginBottom: 12,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    width: "85%",
    marginHorizontal: 20,
    paddingHorizontal: 10,
    height: 40,
    borderWidth: 2,
    marginBottom: 24,
  },
  pergunta: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 24,
    fontSize: 20,
    textAlign: 'center',
  },
  btnProxima: {
    marginBottom: 24,
  }
});

export default styles;
