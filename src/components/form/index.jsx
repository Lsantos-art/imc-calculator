import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Display from "./display/display";
import styles from "./styles";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    var imc = (weight / (height * height)).toFixed(2);
    setImc(imc);
  }

  function validator() {
    if (height && weight) {
      imcCalculator();
      setMessageImc("Seu IMC é igual a: ");
      setTextButton("Calcular novamente");
      setWeight(null);
      setHeight(null);
      return;
    } else {
      alert("Preencha o peso e altura!");
      setHeight(null);
      setWeight(null);
    }
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.formInput}
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={(height) => setHeight(height)}
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.formInput}
          value={weight}
          placeholder="Ex. 75.365"
          keyboardType="numeric"
          onChangeText={(weight) => setWeight(weight)}
        />
        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => validator()}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <Display messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
