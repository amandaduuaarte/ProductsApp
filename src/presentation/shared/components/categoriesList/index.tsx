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
      <ImageBackground
        source={{uri: `src/assets/images/${item.name}.jpg`}}
        style={styles.imageBackground}>
        <TouchableOpacity
          style={styles.categoryContainer}
          onPress={() => handleSelectedCategory(item.name)}>
          <Text style={styles.categoryName}>{item.name}</Text>
        </TouchableOpacity>
      </ImageBackground>
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
  categoryContainer: {
    alignItems: 'center',
    backgroundColor: '#84a59d',
    borderColor: '#415a77',
    borderRadius: 12,
    borderWidth: 2,
    height: 164,
    justifyContent: 'center',
  },
  categoryName: {
    color: '#2b2d42',
    fontSize: 20,
    fontWeight: 400,
  },
  imageBackground: {
    height: 164,
    width: '45%',
  },
});
