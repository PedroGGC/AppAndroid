import { ScrollView, Text, View } from "react-native";
import styles from "../../estilos";

export default function ListagemUFs({ listaUFs }) {
  return (
    <>
      {
        (listaUFs !== null) ?
        <ScrollView>
        {
          listaUFs.map((uf) => (
            <View style={styles.ItemLista} key={uf.id}>
              <Text style={styles.TextoLista}>{uf.nome}</Text>
            </View>
          ))
        }
        </ScrollView>
        :
        <></>
      }
    </>
  )
}
