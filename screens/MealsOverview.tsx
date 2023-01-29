import { View, FlatList, StyleSheet, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigationTypes";
import { MEALS, CATEGORIES } from "../data/Dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

type Iitem = {
  item: {
    id: string;
    categoryIds: string[];
    title: string;
    imageUrl: string;
    ingredients: string[];
    steps: string[];
    duration: number;
    complexity: string;
    affordability: string;
    isGlutenFree: boolean;
    isVegan: boolean;
    isVegetarian: boolean;
    isLactoseFree: boolean;
  };
};

function MealsOverviewScreen({ route, navigation }: Props) {
  const catId = route.params!.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderItem(itemData: Iitem) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
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
