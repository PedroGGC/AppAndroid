import React, { useState } from 'react';
import { ScrollView, View, TextInput } from 'react-native';

import { buscaBanco, retornaBancos } from '../../servicos/busca';
import ItemBanco from '../ItemBanco';

import styles from './styles';

export default function ListaBancos() {

  const [textoBusca, setTextoBusca] = useState("");
  const [listaBancos, setListaBancos] = useState(retornaBancos());

  function handleBusca(termoDigitado) {
    setTextoBusca(termoDigitado);
    
    const resultadoBusca = buscaBanco(termoDigitado);
    setListaBancos(resultadoBusca);
  }

  return (
    <View style={styles.Container}>

      <TextInput 
        style={styles.CampoBusca}
        placeholder="Busca"
        value={textoBusca}
        onChangeText={(termoDigitado) => handleBusca(termoDigitado)}
      />

      <ScrollView>
        {
          listaBancos.map((banco) => {
            return (
              <ItemBanco 
                codigo={banco.codigo}
                nome={banco.nome}
                key={banco.codigo}
              />
            )
          })
        }
      </ScrollView>

    </View>
  );
}
