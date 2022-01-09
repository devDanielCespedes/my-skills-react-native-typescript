import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1F1E25",
    color: "#FFF",
    fontSize: 20,
    marginTop: 30,
    borderRadius: 7,
    padding: Platform.OS === "ios" ? 15 : 10,
  },
  gretting: {
    color: "#FFF"
  }
});
