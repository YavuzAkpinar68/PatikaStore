import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import styles from "./styles";
interface AraProps {
  placeholder: string
  value: string
  onChangeText: () => void
}
const Ara = ({placeholder, onChangeText, value}: AraProps) => {
  return(
    <View>
      <TextInput
        style={styles.textInput_container}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}>
      </TextInput>
    </View>
  )
}
export default Ara