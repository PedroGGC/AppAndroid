import axios from "axios";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Aula16ApiAssincrona2App() {
  function listarUFs() {
    console.log("A", new Date());

    axios.get("https://www.devmedia.com.br/projetos-api/ufs/19")
      .then((resposta) => {
        console.log(resposta.data); // Exibir apenas os dados da resposta
        console.log("B", new Date());
      })
      .catch((erro) => {
        console.error("Erro ao consumir API:", erro);
      });

    console.log("C", new Date());
  }

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Consumir API" onPress={listarUFs} />
    </SafeAreaView>
  );
}
