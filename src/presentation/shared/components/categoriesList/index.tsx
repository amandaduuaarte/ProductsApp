import {
  TProductCategory,
  TProductsCategories,
} from '@data/schema/productsCategories.schema';
import {useCallback} from 'react';
import {
  FlatList,
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
  const handleSelectedCategory = useCallback((category: string) => {
    selectCategory(category);
  }, []);

  const renderCategoryCard = useCallback(
    ({item}: ListRenderItemInfo<TProductCategory>) => (
      <TouchableOpacity
        style={styles.categoryContainer}
        onPress={() => handleSelectedCategory(item.name)}>
        <Text style={styles.categoryName}>{item.name}</Text>
      </TouchableOpacity>
    ),
    [],
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
    justifyContent: 'center',
    padding: 12,
    textAlign: 'center',
    width: '45%',
  },
  categoryName: {
    color: '#2b2d42',
    fontSize: 20,
    fontWeight: 400,
  },
});
