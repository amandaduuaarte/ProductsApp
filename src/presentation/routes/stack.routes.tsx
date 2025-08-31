import {createStackNavigator} from '@react-navigation/stack';

import {ProductDetails} from '@presentation/screens/ProductDetails';
import {Categories} from '@presentation/screens/Categories';
import {ProductsList} from '@presentation/screens/ProductsList';
import {BottomSheet} from '@presentation/shared/components/bottomSheet';

import type {TStackRoutesProps} from './types';
import {TabRoutes} from './tab.routes';

const Stack = createStackNavigator<TStackRoutesProps>();

export const StackRoutes = () => (
  <Stack.Navigator
    initialRouteName="TabRoutes"
    screenOptions={{
      headerShown: false,
    }}>
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

    <Stack.Screen name="TabRoutes" component={TabRoutes} />
    {/**
     * BottomSheet
     */}
    <Stack.Screen
      name="BottomSheet"
      component={BottomSheet}
      options={{
        presentation: 'transparentModal',
        headerShown: false,
        animation: 'fade',
      }}
    />
  </Stack.Navigator>
);
