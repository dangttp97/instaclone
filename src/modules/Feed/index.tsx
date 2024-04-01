import getIcons from '@assets/icons';
import { createStyles } from '@theme';
import {
  FlatList,
  ListRenderItemInfo,
  Pressable,
  ScrollView,
  View,
} from 'react-native';

const FeedHeader = () => {
  const styles = getHeaderStyles();
  const Icons = getIcons();

  return (
    <View style={styles.container}>
      <View style={styles.instagramTextWrapper}>
        <Icons.IcInstagramText height={28} width={104} />
      </View>
      <View style={styles.rightButtonsWrapper}>
        <Pressable style={styles.buttonWrapper}>
          <Icons.IcLike />
        </Pressable>
        <Pressable style={[styles.buttonWrapper, { marginLeft: 10 }]}>
          <Icons.IcMessenger />
        </Pressable>
      </View>
    </View>
  );
};

const FeedStories = () => {
  const renderItem = ({ item }: ListRenderItemInfo<any>) => {
    return <View></View>;
  };
  return <FlatList data={[]} renderItem={renderItem} style={{ flex: 1 }} />;
};

export const Feed = () => {
  const styles = getScreenStyles();

  return (
    <ScrollView style={styles.container}>
      <FeedHeader />
      <FeedStories />
    </ScrollView>
  );
};

const getHeaderStyles = createStyles()(({ colors }) => ({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  rightButtonsWrapper: {
    flexDirection: 'row',
  },
  instagramTextWrapper: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 5,
  },
}));

const getScreenStyles = createStyles()(({ colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
}));
