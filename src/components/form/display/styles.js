import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  display: {
    flex: 1,
    marginTop: 20,
    paddingTop: 60,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
  },
  information: {
    fontSize: 18,
    color: "#ff0043",
    fontWeight: "bold",
  },
  imc: {
    fontSize: 48,
    color: "#ff0043",
    fontWeight: "bold",
  },
  boxShareButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: 0,
  },
  share: {
    backgroundColor: "#1877f2",
    borderRadius: 50,
    paddingTop: 5,
    paddingBottom: 5,
  },
  sharedText: {
    color: "#ffff",
    fontWeight: "bold",
    paddingHorizontal: 30,
  },
});

export default styles;
