import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/size";

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <View style={styles.container}>
        <Text style={styles.title}> We haven't focused on anything yet.</Text>
      </View>
    );

  const renderItem = ({ item }) => <Text style={styles.item}> ✅ {item}</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.pastelPurple,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.pastelPurple,
    fontSize: fontSizes.md,
    fontWeight: "bold",
    textAlign: "left",
  },
});
