import getIcons from '@assets/icons';
import { createStyles } from '@theme';
import { Pressable, Text, TextInput, View } from 'react-native';

type SearchBarCommonProps = {
  type: 'button' | 'textInput';
  placeholder?: string;
};

type SearchBarTextInputProps = SearchBarCommonProps & {
  type: 'textInput';
  onChangeText?: (text: string) => void;
};

type SearchBarButtonProps = SearchBarCommonProps & {
  type: 'button';
  onPress?: () => void;
};

export const SearchBar = ({
  ...props
}: SearchBarTextInputProps | SearchBarButtonProps) => {
  const { type, placeholder, ...rest } = props;
  const styles = getSearchBarStyles();
  const Icons = getIcons();

  switch (type) {
    case 'button':
      const buttonProps = rest as SearchBarButtonProps;
      return (
        <Pressable onPress={buttonProps.onPress} style={styles.container}>
          <Icons.IcSearch width={20} height={20} />
          <Text style={styles.text}>{placeholder}</Text>
        </Pressable>
      );
    case 'textInput':
      const textInputProps = rest as SearchBarTextInputProps;
      return (
        <View style={styles.container}>
          <Icons.IcSearch width={20} height={20} />
          <TextInput
            placeholder={placeholder}
            onChangeText={textInputProps.onChangeText}
            style={styles.textInput}
          />
        </View>
      );
  }
};

const getSearchBarStyles = createStyles()(({ colors }) => ({
  container: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#262626',
    height: 33,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  text: {
    flex: 1,
    marginLeft: 10,
  },
  textInput: {
    marginLeft: 10,
    padding: 0,
  },
}));
