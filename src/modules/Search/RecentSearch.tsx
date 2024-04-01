import { Pressable, View } from 'react-native';
import { SearchBar } from './components';
import { createStyles } from '@theme';
import getIcons from '@assets/icons';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const styles = getBackButtonStyles();
  const Icons = getIcons();
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()} style={styles.container}>
      <Icons.IcBack />
    </Pressable>
  );
};

const Header = () => {
  const styles = getHeaderStyles();
  return (
    <View style={styles.container}>
      <BackButton />
      <SearchBar type="textInput" placeholder="Search" />
    </View>
  );
};

export const RecentSearch = () => {
  return (
    <View>
      <Header />
    </View>
  );
};

const getBackButtonStyles = createStyles()(() => ({
  container: {
    marginHorizontal: 10,
    paddingRight: 10,
  },
}));

const getHeaderStyles = createStyles()(({ colors }) => ({
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
