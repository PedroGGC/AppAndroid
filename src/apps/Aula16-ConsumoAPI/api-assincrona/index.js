import axios from "axios";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Aula16ApiAssincronaApp() {
  const [contador, setContador] = useState(0);

  function listarUFs() {
    axios.get("https://www.devmedia.com.br/projetos-api/ufs")
      .then((resposta) => {
        console.log(resposta.data); // Exibir apenas os dados da resposta
      })
      .catch((erro) => {
        console.error("Erro ao consumir API:", erro);
      });
  }

  function handleContador() {
    setContador(prevContador => prevContador + 1); // Atualização correta do estado
  }

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Consumir API" onPress={listarUFs} />
      <Text style={{ marginVertical: 20, fontSize: 32 }}>{contador}</Text>
      <Button title="+1" onPress={handleContador} />
    </SafeAreaView>
  );
}
