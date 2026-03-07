import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { buscaFatos, checaRespostaCerta } from '../../servicos/buscaFatos';

import styles from './styles';

export default function Trivia() {

  const [pergunta, setPergunta] = useState(buscaFatos());
  const [respostaUsuario, setRespostaUsuario] = useState("");
  const [acertou, setAcertou] = useState(null);

  function handleResposta() {
    const respostaCerta = checaRespostaCerta(respostaUsuario, pergunta.Ano);
    setAcertou(respostaCerta);
  }

  function handleProxima() {
    setAcertou(null);
    setRespostaUsuario("");
    setPergunta(buscaFatos());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Trivia - Fatos Históricos</Text>
      <Text style={styles.subtitulo}>Em que ano ocorreu esse fato?</Text>
      
      {
        (acertou === true)
        ?
        <View style={styles.acertouArea}>
          <Text style={styles.status}>Você Acertou</Text>
          <Button style={styles.btnProxima} onPress={handleProxima} title="Próxima Pergunta" color="#1f4f66" />
        </View>
        : (acertou === false) ?
        <View style={styles.errouArea}>
          <Text style={styles.status}>Você Errou</Text>
          <Button style={styles.btnProxima} onPress={handleProxima} title="Próxima Pergunta" color="#1f4f66" />
        </View>
        :
        <></>
      }

      <Text style={styles.pergunta}>Fato: {pergunta.Fato}</Text>
      
      <TextInput style={styles.input}
        value={respostaUsuario}
        onChangeText={(respostaDigitada) => setRespostaUsuario(respostaDigitada)}
        placeholder='Resposta'
        keyboardType="numeric"
      />
      <Button onPress={handleResposta} title='Responder' color="#0fc3d4" />
    </View>
  );
}
