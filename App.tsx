import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import MealsOverviewScreen from "./screens/MealsOverview";
import { RootStackParamList } from "./types/navigationTypes";

import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <>
      <StatusBar></StatusBar>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
