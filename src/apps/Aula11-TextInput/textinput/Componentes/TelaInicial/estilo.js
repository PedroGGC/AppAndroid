import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  tela: {
    width: '100%',
    justifyContent: "center",
    alignItems: 'center',
  },

  boxNumero:{
    borderColor: '#13b0c5',
    backgroundColor: '#13b0c5',
    borderWidth: 5,
    height: 150,
    width: 150,
    borderRadius: 75,
    justifyContent: "center",
    alignItems:"center",
    marginBottom: 50
  },

  titulo: {
    fontSize: 14,
    marginVertical: 30,
    paddingHorizontal: 20,
    textAlign: "center"
  },

  numero: {
    fontSize: 70,
    color: '#fff'
  },
  
  boxBotao: {
    width:200
  },

  linhaInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  
  inputNormal: {
    borderWidth: 1,
    borderColor: '#000',
    width: 100,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft: 10
  },

  inputFocus: {
    borderWidth: 1,
    borderColor: '#1f4f66',
    width: 100,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft: 10
  }
});

export default estilo;
