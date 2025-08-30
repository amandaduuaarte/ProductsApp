/* eslint-disable global-require */
import {
  TProductCategory,
  TProductsCategories,
} from '@data/schema/productsCategories.schema';
import {useCallback} from 'react';
import {
  FlatList,
  ImageBackground,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const categoryImages: {[key: string]: ReturnType<typeof require>} = {
  Beauty: require('../../../../assets/images/Beauty.jpg'),
  Fragrances: require('../../../../assets/images/Fragrances.jpg'),
  Furniture: require('../../../../assets/images/Furniture.jpg'),
  Groceries: require('../../../../assets/images/Groceries.jpg'),
};

type TProductCategoriesProps = {
  categories: TProductsCategories | undefined;
  selectCategory: (category: string) => void;
  scrollEnabled?: boolean;
};
export const CategoriesList = ({
  scrollEnabled = true,
  categories,
  selectCategory,
}: TProductCategoriesProps) => {
  const handleSelectedCategory = useCallback(
    (category: string) => {
      selectCategory(category);
    },
    [selectCategory],
  );

  const renderCategoryCard = useCallback(
    ({item}: ListRenderItemInfo<TProductCategory>) => (
      <TouchableOpacity onPress={() => handleSelectedCategory(item.name)}>
        <ImageBackground
          source={categoryImages[item.name]}
          style={styles.imageBackground}>
          <View style={styles.categoryNameContainer}>
            <Text style={styles.categoryName}>{item.name}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    ),
    [handleSelectedCategory],
  );

  return (
    <FlatList
      numColumns={2}
      data={categories}
      renderItem={renderCategoryCard}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.categories}
      columnWrapperStyle={styles.categories}
      ListEmptyComponent={<View />}
      scrollEnabled={scrollEnabled}
    />
  );
};

const styles = StyleSheet.create({
  categories: {
    gap: 24,
    rowGap: 24,
  },
  categoryName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 400,
  },
  categoryNameContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#000',
    padding: 12,
  },
  imageBackground: {
    height: 224,
    justifyContent: 'flex-end',
    width: 170,
  },
});
