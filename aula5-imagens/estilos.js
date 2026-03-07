import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    backgroundColor: '#CC0000',
    height: '100%',
  },
  titulo: {
    fontSize: 50,
    textAlign: 'center',
    marginVertical: 25,
    color: 'white',
  },

  areaItem: {
    margin: 25,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  imagem: {
    width: '80%',
    height: 115,
  },

  areaInformativa: {
    width: '100%',
    height: 35,
    backgroundColor: '#DCDCDC',
    justifyContent:'center',
  },
  textoInformativo: {
    color: '#CC0000',
    fontSize: 20,
    paddingHorizontal: 15,
  },
});

export default estilo;