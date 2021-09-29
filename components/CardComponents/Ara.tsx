import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import styles from "./styles";

const Ara = () => {
  const [text, onChangeText] = React.useState("Ara...");
  const [number, onChangeNumber] = React.useState(null);
  return(
    <View>
      <TextInput
        style={styles.textInput_container}
        value={text}
        onChangeText={onChangeText}>
      </TextInput>
    </View>
  )
}
export default Ara