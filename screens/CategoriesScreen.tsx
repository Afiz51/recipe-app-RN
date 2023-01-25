import {FlatList} from "react-native" ;
import {CATEGORIES} from "../data/Dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


type Iitem = {
  item: {
    title: string;
    color: string;
  }
}

function renderCategoryItem(itemData: Iitem) {
  return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
}
function CategoriesScreen() {
  return <FlatList data={CATEGORIES} renderItem={renderCategoryItem} keyExtractor={(item) => item.id} />
}

export default CategoriesScreen
