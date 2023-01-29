import { FlatList } from "react-native";
import { CATEGORIES } from "../data/Dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigationTypes";

type Iitem = {
  item: {
    id: string;
    title: string;
    color: string;
  };
};

type Props = NativeStackScreenProps<RootStackParamList, "MealsCategories">;

function CategoriesScreen({ navigation }: Props) {
  function renderCategoryItem(itemData: Iitem) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  const length = 4;
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={length > 1 ? 2 : 1}
    />
  );
}

export default CategoriesScreen;
