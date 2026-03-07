import React from 'react';
import { Text, View, Button } from 'react-native';

export default function InlineStyleApp({ navigation }) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'darkblue',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text style={{
        fontSize: 36,
        color: 'white',
        marginBottom: 20
      }}>
        Estilizando (Inline)
      </Text>
      
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
