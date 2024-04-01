import { useMemo } from 'react';
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { font } from '@assets/font';
import { keys } from 'lodash';
import { AppColorsType } from '@assets/colors';
import { RootState, store } from '@redux/store';
import { darkColors, lightColors } from '@assets/colors';
import { useSelector } from 'react-redux';

export const getColors = () => {
  const theme = useSelector((s: RootState) => s.app.theme);
  return theme === 'dark' ? darkColors : lightColors;
};

export type Theme = {
  font: typeof font;
  colors: AppColorsType;
};

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

type NamedStylesFn<Props extends {}, T> = {
  [P in keyof T]:
    | ((args: Props) => ViewStyle | TextStyle | ImageStyle)
    | ViewStyle
    | TextStyle
    | ImageStyle;
};

type StyleThemFn<
  Props extends {},
  T extends NamedStyles<T> | NamedStyles<any> | NamedStylesFn<Props, T>,
> = (args: Theme) => T | NamedStyles<any> | NamedStylesFn<Props, T>;

type ReturnNameStyled<T> = T;

export const useTheme = () => {
  const colors = getColors();
  return { font, colors: colors } as Theme; // here
};

const getStylesWithProps = (styles: any, props?: any) => {
  return keys(styles).reduce((results, key) => {
    if (typeof styles[key] === 'function') {
      results[key] = styles[key](props);
    } else {
      results[key] = styles[key];
    }
    return results;
  }, {} as any);
};

export const createStyles =
  <Props extends {}>() =>
  <T extends NamedStyles<T> | NamedStyles<any> | NamedStylesFn<Props, T>>(
    styles:
      | StyleThemFn<Props, T>
      | T
      | NamedStyles<T>
      | NamedStylesFn<Props, T>,
  ) => {
    return (props?: Props) => {
      const colors = getColors();

      return useMemo<{
        [P in keyof ReturnNameStyled<T>]: {};
      }>(
        () =>
          StyleSheet.create({
            ...getStylesWithProps(
              typeof styles === 'function'
                ? styles({
                    font,
                    colors, // here
                  })
                : styles,
              props,
            ),
          }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [props],
      );
    };
  };
