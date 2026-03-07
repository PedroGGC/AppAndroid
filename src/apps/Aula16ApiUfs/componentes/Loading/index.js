import { ActivityIndicator, View } from "react-native";
import styles from "../../estilos";

export default function Loading({ isLoading }) {
  return (
    <>
      {
        isLoading ?
        <View style={styles.Loading}>
          <ActivityIndicator size="large" color="#1693f4" />
        </View>
        :
        <></>
      }
    </>
  )
}
