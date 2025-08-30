import {useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';

type TFiltersProps = {
  label: string;
  action: (value?: boolean) => void;
};

export const Filters = ({label, action}: TFiltersProps) => {
  const handleFilter = useCallback(() => {
    action(false);
  }, [action]);

  return (
    <View style={styles.filterContainer}>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleFilter}>
          <Text style={styles.value}>{label}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    alignItems: 'center',
    backgroundColor: '#a7c957',
    borderRadius: 24,
    marginHorizontal: 12,
    padding: 24,
    width: '40%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 16,
    fontWeight: '400',
  },
});
