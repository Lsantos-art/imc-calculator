import React from "react";
import { Share, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Display(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "Meu IMC hoje é: " + props.resultImc,
    });
  };

  return (
    <View style={styles.display}>
      <View style={styles.boxShareButton}>
        {props.resultImc ? (
          <TouchableOpacity style={styles.share} onPress={onShare}>
            <Text style={styles.sharedText}>Compartilhar</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <Text style={styles.information}>{props.messageResultImc}</Text>
      <Text style={styles.imc}>{props.resultImc}</Text>
    </View>
  );
}
