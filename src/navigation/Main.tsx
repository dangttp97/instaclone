import Icons from '@assets/icons';
import { CreateNew, Feed, Profile, Reels, Search } from '@modules';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useAppSelector } from '@hooks';
import getIcons from '@assets/icons';
import { useTheme } from '@theme';
import FastImage from 'react-native-fast-image';

const UserIcon = ({
  uri,
  focused,
  size,
}: {
  uri?: string;
  focused: boolean;
  size: number;
}) => {
  const theme = useTheme();
  return (
    <FastImage
      source={{
        uri:
          uri ??
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBqYEUHs9SPync2bo8AmdYjzW5WYicOWF8lreCXnMcQ&s',
      }}
      style={{
        width: size + 3,
        height: size + 3,
        borderRadius: (size + 3) / 2,
        borderWidth: focused ? 1.5 : undefined,
        borderColor: focused ? theme.colors.border : undefined,
      }}
    />
  );
};

type MainNavigatorScreenParams = {
  Feed?: {};
  CreateNew?: {};
  Search?: {};
  Reels?: {};
  Profile?: {};
};

const Tab = createBottomTabNavigator<MainNavigatorScreenParams>();

export const MainNavigator = () => {
  const Icons = getIcons();
  const theme = useTheme();
  const avatar = useAppSelector(s => s.user.info?.avatar);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: theme.colors.background },
        tabBarActiveTintColor: '#000',
        headerShown: false,
        tabBarLabel: () => undefined,
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ focused, size }) =>
            !focused ? (
              <Icons.IcHome width={size} height={size} />
            ) : (
              <Icons.IcHomeFilled width={size} height={size} />
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, size }) =>
            !focused ? (
              <Icons.IcSearch width={size} height={size} />
            ) : (
              <Icons.IcSearchFilled width={size} height={size} />
            ),
        }}
      />
      <Tab.Screen
        name="CreateNew"
        component={CreateNew}
        options={{
          tabBarIcon: ({ size }) => (
            <Icons.IcTabAdd width={size} height={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarIcon: ({ focused, size }) =>
            !focused ? (
              <Icons.IcReels width={size} height={size} />
            ) : (
              <Icons.IcReelsFilled width={size} height={size} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <UserIcon uri={avatar} size={size} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
