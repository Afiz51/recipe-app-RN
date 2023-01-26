import {FlatList} from "react-native";
import {CATEGORIES} from "../data/Dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";


type Iitem = {
    item: {
        title: string;
        color: string;
    }
}

function renderCategoryItem(itemData: Iitem) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
}

function CategoriesScreen() {
    const length = 4
    return <FlatList data={CATEGORIES} renderItem={renderCategoryItem} keyExtractor={(item) => item.id} numColumns={length > 1 ? 2 : 1} />
}

export default CategoriesScreen
