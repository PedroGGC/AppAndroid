import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  texto: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#0fc3d4',
    marginBottom: 20
  },
  botoesContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20
  }
});

export default estilos;
