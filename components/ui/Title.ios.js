import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/color";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 0,
    borderColor: Colors.accent500,
    padding: 12,
    maxWidth: "80%",
    width: 300
  }
});
