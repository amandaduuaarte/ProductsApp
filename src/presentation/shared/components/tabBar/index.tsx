import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import FavoriteIcon from '@assets/icons/favIcon.svg';
import HomeIcon from '@assets/icons/home.svg';
import SearchIcon from '@assets/icons/search.svg';

enum TAB_LABELS {
  Home = 'Home',
  Search = 'Search',
  Categories = 'Categories',
}

const renderIcon = (routeName: string) => {
  return (
    <View>
      {routeName === TAB_LABELS.Categories && <FavoriteIcon />}
      {routeName === TAB_LABELS.Search && <SearchIcon />}
      {routeName === TAB_LABELS.Home && <HomeIcon />}
    </View>
  );
};
export const TabBar = ({state, navigation}: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();

  const handleTabPress = (routeName: string, isFocused: boolean) => {
    if (!isFocused) {
      navigation.navigate(routeName);
    }
  };

  return (
    <View style={[styles.container, {paddingBottom: insets.bottom}]}>
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={{selected: isFocused}}
              onPress={() => handleTabPress(route.name, isFocused)}
              style={styles.tabButton}>
              {renderIcon(route.name)}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
  },
  content: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 99,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
    marginHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    position: 'relative',
  },
});
