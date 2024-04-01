import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { MainNavigator } from './Main';
import { useEffect } from 'react';
import { useAppDispatch } from '@hooks';
import { setTheme } from '@redux/slices';

type AppNavigationType = {};

export const AppNavigator = () => {
  const dispatch = useAppDispatch();
  const appNavigationRef = useNavigationContainerRef<AppNavigationType>();

  useEffect(() => {
    dispatch(setTheme('dark'));
  }, []);

  return (
    <NavigationContainer ref={appNavigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
};
