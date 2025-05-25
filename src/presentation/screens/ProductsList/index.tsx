import {useGetProductsByCategoryUseCase} from '@domain/useCases/useGetProductsByCategoryUseCase';
import {TStackRoutesProps} from '@presentation/routes/types';
import {RouteProp} from '@react-navigation/native';
import {FlatList, View} from 'react-native';

type ProductDetailsScreenRouteProp = RouteProp<
  TStackRoutesProps,
  'ProductsList'
>;

type Props = {
  route: ProductDetailsScreenRouteProp;
};

export const ProductsList = ({route}: Props) => {
  const {category} = route.params;
  const {productsByCategory} = useGetProductsByCategoryUseCase({
    category,
  });

  console.log(JSON.stringify(productsByCategory));
  return (
    <FlatList data={productsByCategory?.products} renderItem={() => <View />} />
  );
};
