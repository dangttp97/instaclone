import FastImage from 'react-native-fast-image';
import { createStyles } from '@theme';

type AvatarCompProps = {
  uri: string;
  outlineBorder?: boolean;
  onPress?: () => void;
};

export const AvatarComp = ({ ...props }: AvatarCompProps) => {
  const { uri, outlineBorder, onPress } = props;
  return <FastImage style={styles.container} />;
};

const styles = createStyles()({
  container: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
})();
