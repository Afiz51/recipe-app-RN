import { View, Text, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigationTypes";
import { MEALS } from "../data/Dummy-data";

type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

function MealsOverviewScreen({ route }: Props) {
  const catId = route.params!.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals OVerview Screen - {catId}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
