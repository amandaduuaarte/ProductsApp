import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '@presentation/screens/Home';
import {ProductDetails} from '@presentation/screens/ProductDetails';
import {Categories} from '@presentation/screens/Categories';
import {ProductsList} from '@presentation/screens/ProductsList';
import type {TStackRoutesProps} from './types';

const Stack = createStackNavigator<TStackRoutesProps>();

export const StackRoutes = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen
      name="ProductDetails"
      component={ProductDetails}
      options={{
        title: 'Product Details',
        headerBackTitle: '',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="Categories"
      component={Categories}
      options={{
        title: 'Categories',
        headerBackTitle: '',
        headerShown: true,
      }}
    />
    <Stack.Screen
      name="ProductsList"
      component={ProductsList}
      options={{
        title: 'Products List',
        headerBackTitle: '',
        headerShown: true,
      }}
    />
  </Stack.Navigator>
);
