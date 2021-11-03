import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function Display(props) {
  return (
    <View style={styles.display}>
      <Text style={styles.information}>{props.messageResultImc}</Text>
      <Text style={styles.imc}>{props.resultImc}</Text>
    </View>
  ); 
}
