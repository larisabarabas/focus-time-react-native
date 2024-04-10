import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ProgressBar } from "react-native-paper";
import { colors } from "../utils/colors";
import { Countdown } from "../components/Countdown";
import { fontSizes, spacing } from "../utils/size";
import { RoundedButton } from "../components/RoundedButton";

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const handleProgressBar = (progress) => {
    setProgress(progress);
  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          onProgress={(value) => {
            setProgress(value);
          }}
          isPaused={!isStarted}
          onEnd={() => {}}
        />
        <View style={{ paddingTop: spacing.xxxl }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.pastelPurple}
          style={{ height: spacing.sm }}
        />
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            title="start"
            onPress={() => setIsStarted(true)}
            size={100}
          />
        )}
        {isStarted && (
          <RoundedButton
            title="pause"
            onPress={() => setIsStarted(false)}
            size={100}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: fontSizes.md,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colors.pastetDarkPurple,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: fontSizes.md,
  },
  task: {
    color: colors.pastetDarkPurple,
    textAlign: "center",
    fontSize: fontSizes.md,
  },
});
