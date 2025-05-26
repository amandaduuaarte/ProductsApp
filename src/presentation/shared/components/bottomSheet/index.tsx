import {EOrderBy, ESortBy, TSortByProps} from '@data/queryFn/getProducts';
import {TStackRoutesProps} from '@presentation/routes/types';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';

type TBottomSheetNavigationProp = StackNavigationProp<
  TStackRoutesProps,
  'BottomSheet'
>;

const filterOptions = [
  {
    label: 'Price',
    options: [
      {label: 'Big price', sortBy: ESortBy.price, orderBy: EOrderBy.than},
      {label: 'Less price', sortBy: ESortBy.price, orderBy: EOrderBy.lest},
    ],
  },
  {
    label: 'Rating',
    options: [
      {label: 'Good rating', sortBy: ESortBy.ratting, orderBy: EOrderBy.than},
      {label: 'Bad rating', sortBy: ESortBy.ratting, orderBy: EOrderBy.lest},
    ],
  },
];

export const BottomSheet = () => {
  const {goBack, reset} = useNavigation<TBottomSheetNavigationProp>();
  const [filtersApplied, setFiltersApplied] = useState<TSortByProps>({});

  const handleFilter = useCallback(({orderBy, sortBy}: TSortByProps) => {
    setFiltersApplied({orderBy, sortBy});
  }, []);

  const handleAppliedFilter = () => {
    reset({
      index: 1,
      routes: [
        {
          name: 'Home',
          params: {
            orderBy: filtersApplied.orderBy,
            sortBy: filtersApplied.sortBy,
          },
        },
      ],
    });
  };

  const handleClearFilter = () => {
    reset({
      index: 1,
      routes: [
        {
          name: 'Home',
          params: {},
        },
      ],
    });
  };

  const isActive = (sortBy: ESortBy, orderBy: EOrderBy) =>
    filtersApplied.sortBy === sortBy && filtersApplied.orderBy === orderBy;

  return (
    <Pressable style={styles.bottomSheet} onPressOut={goBack}>
      <View style={styles.sheet}>
        <Text style={styles.title}>Filter by</Text>

        {filterOptions.map(({label, options}) => (
          <View key={label}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.row}>
              {options.map(({label: optionLabel, sortBy, orderBy}) => (
                <TouchableOpacity
                  key={optionLabel}
                  style={
                    isActive(sortBy, orderBy)
                      ? styles.optionContainerActive
                      : styles.optionContainer
                  }
                  onPress={() => handleFilter({sortBy, orderBy})}>
                  <Text style={styles.value}>{optionLabel}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        <TouchableOpacity onPress={handleAppliedFilter} style={styles.button}>
          <Text style={styles.buttonText}>Apply filters</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleClearFilter} style={styles.button}>
          <Text style={styles.buttonText}>Clear filters</Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#219ebc',
    borderRadius: 12,
    height: 45,
    justifyContent: 'center',
    marginVertical: 12,
  },
  buttonText: {
    color: '#ffffff',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    marginTop: 12,
  },
  optionContainer: {
    alignItems: 'center',
    backgroundColor: '#fcf6bd',
    borderRadius: 24,
    marginHorizontal: 12,
    padding: 24,
    width: '40%',
  },
  optionContainerActive: {
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
  sheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
  },
  value: {
    fontSize: 16,
    fontWeight: '400',
  },
});
