import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f4f66',
    marginBottom: 20
  },
  areaCalculo: {
    width: '100%',
    marginBottom: 30
  },
  campoDias: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16
  },
  areaResultado: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    width: '100%'
  },
  textoDias: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10
  },
  textoResultado: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0fc3d4'
  }
});

export default estilos;
