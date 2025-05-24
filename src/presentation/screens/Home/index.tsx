import {useGetProducts} from '@domain/useCases/useGetProductsUseCase';
import {Text, View} from 'react-native';

export const Home = () => {
  const {data, isLoading} = useGetProducts();
  console.log('aquii', JSON.stringify(data));

  return (
    <View>
      <Text>HOME</Text>
    </View>
  );
};
