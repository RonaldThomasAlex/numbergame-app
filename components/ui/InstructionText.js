import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/color";

function InstructionText({ children }) {
  return <Text style={styles.instructionTex}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionTex: {
    color: Colors.accent500,
    fontSize: 24
  }
});
