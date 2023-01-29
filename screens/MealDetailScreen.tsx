import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, Text, View } from "react-native";
import { RootStackParamList } from "../types/navigationTypes";
import { CATEGORIES } from "../data/Dummy-data";
import { useNavigation, useRoute } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, "MealDetail">;
function MealDetailScreen({ navigation, route }: Props) {
  function pressHandler() {
    console.log(route);
  }
  return (
    <View>
      <Pressable onPress={pressHandler}>
        <Text>This is the detail screen {route.params.mealId}</Text>
      </Pressable>
    </View>
  );
}

export default MealDetailScreen;
