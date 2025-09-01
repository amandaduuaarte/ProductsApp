/* eslint-disable react/no-unstable-nested-components */
import {Home} from '@presentation/screens/Home';
import {Search} from '@presentation/screens/Search';
import {Favorites} from '@presentation/screens/Favorites';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabBar} from '@presentation/shared/components/tabBar';
import {TStackRoutesProps} from './types';

const Tab = createBottomTabNavigator<Partial<TStackRoutesProps>>();

export const TabRoutes = () => (
  <Tab.Navigator
    tabBar={props => <TabBar {...props} />}
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Favorites" component={Favorites} />
  </Tab.Navigator>
);
