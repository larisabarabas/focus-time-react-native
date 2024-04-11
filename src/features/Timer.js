import React, { useState } from "react";
import { View, StyleSheet, Text, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";
import { colors } from "../utils/colors";
import { Countdown } from "../components/Countdown";
import { fontSizes, spacing } from "../utils/size";
import { RoundedButton } from "../components/RoundedButton";
import { Timing } from "./Timing";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          onProgress={setProgress}
          isPaused={!isStarted}
          onEnd={onEnd}
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
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
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
      <View style={styles.clearWrapper}>
        <RoundedButton title="-" onPress={clearSubject} size={50} />
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
  timingWrapper: {
    flex: 0.1,
    flexDirection: "row",
    paddingTop: spacing.xxl,
  },
  clearWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
