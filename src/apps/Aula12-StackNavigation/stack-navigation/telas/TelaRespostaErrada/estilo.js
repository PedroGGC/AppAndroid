import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  fundo: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },

  boxConteudo: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 100
  },

  texto: {
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 26,
    textTransform: "uppercase",
    fontWeight: "700",
    textAlign: "center",
    color:"#1f4f66"
  },
  boxBotoes: {
    flexDirection: 'row',
  },

  boxBotao: {
    width: 130,
    marginBottom: 10,
    paddingHorizontal: 5
  }
});

export default estilo;
