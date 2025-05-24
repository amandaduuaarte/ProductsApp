import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '@presentation/screens/Home';
import {ProductDetails} from '@presentation/screens/ProductDetails';
import type {TStackRoutesProps} from './types';

const Stack = createStackNavigator<TStackRoutesProps>();

export const StackRoutes = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ProductDetails" component={ProductDetails} />
  </Stack.Navigator>
);
