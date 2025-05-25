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
};
export const CategoriesList = ({
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
        <Text>{item.name}</Text>
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
      bounces={false}
      ListEmptyComponent={<View />}
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
    borderColor: 'blue',
    borderRadius: 12,
    borderWidth: 1,
    height: 164,
    justifyContent: 'center',
    padding: 12,
    width: '45%',
  },
});
