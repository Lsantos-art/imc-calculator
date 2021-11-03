import React from "react";
import { StyleSheet, View } from "react-native";
import Form from "./src/components/form";
import Title from "./src/components/title";


export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e1e7e4",
  },
});
