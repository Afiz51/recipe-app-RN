import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import MealsOverviewScreen from "./screens/MealsOverview";
import { RootStackParamList } from "./types/navigationTypes";

import { createStackNavigator } from "@react-navigation/stack";
import MealDetailScreen from "./screens/MealDetailScreen";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "red",
  },
};

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
