import { createStackNavigator } from '@react-navigation/stack';
import { TopTrending } from './TopTrending';
import { RecentSearch } from './RecentSearch';

type SearchStackParams = {
  TopTrending?: {};
  RecentSearch?: {};
};

const Stack = createStackNavigator<SearchStackParams>();

export const Search = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Stack.Screen name="TopTrending" component={TopTrending} />
      <Stack.Screen name="RecentSearch" component={RecentSearch} />
    </Stack.Navigator>
  );
};
