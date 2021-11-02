import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Result from "../result";

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
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          value={height}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={(height) => setHeight(height)}
        />
        <Text>Peso</Text>
        <TextInput
          value={weight}
          placeholder="Ex. 75.365"
          keyboardType="numeric"
          onChangeText={(weight) => setWeight(weight)}
        />
        <Button onPress={() => validator()} title={textButton} />
      </View>
      <Result messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
