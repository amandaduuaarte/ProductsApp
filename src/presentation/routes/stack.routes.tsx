import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '@presentation/screens/Home';
import type {TStackRoutesProps} from './types';

const Stack = createStackNavigator<TStackRoutesProps>();

export const StackRoutes = () => (
  <Stack.Group>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Group>
);
