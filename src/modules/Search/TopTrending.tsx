import { useNavigation } from '@react-navigation/native';
import { createStyles } from '@theme';
import React from 'react';
import { View } from 'react-native';
import { SearchBar } from './components';

const SearchHeader = () => {
  const styles = getSearchHeaderStyles();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SearchBar
        type="button"
        placeholder="Search"
        onPress={() => navigation.navigate('RecentSearch')}
      />
    </View>
  );
};

export const TopTrending = () => {
  return (
    <View>
      <SearchHeader />
    </View>
  );
};

const getSearchHeaderStyles = createStyles()(({ colors }) => ({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    // height: 50,
    backgroundColor: colors.headerBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
