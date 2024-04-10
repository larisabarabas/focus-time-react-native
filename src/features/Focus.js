import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import { colors } from "../utils/colors";
import { spacing, fontSizes } from "../utils/size";
import { RoundedButton } from "../components/RoundedButton";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState("");
  console.log(subject);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Focus Time App ⌛ </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on ?"
          textColor={colors.pastetDarkPurple}
          mode="outlined"
          value={subject}
          onChangeText={(val) => setSubject(val)}
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  text: {
    fontSize: fontSizes.lg,
    color: colors.pastetDarkPurple,
    textAlign: "center",
    fontWeight: "600",
    marginTop: spacing.xxl,
    marginBottom: spacing.md,
  },
  button: {
    justifyContent: "center",
  },
  inputContainer: {
    padding: spacing.lg,
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
    backgroundColor: colors.white,
    color: colors.pastetDarkPurple,
  },
});
