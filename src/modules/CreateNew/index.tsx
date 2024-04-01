import getIcons from '@assets/icons';
import { createStyles } from '@theme';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

export const CreateNew = () => {
  const styles = getCreateNewStyles();
  const Icons = getIcons();
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('back');

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    } else {
      setIsActive(true);
    }

    return () => {
      setIsActive(false);
    };
  }, []);

  if (!device) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <Pressable>
        <Icons.IcBack />
      </Pressable>
      <Camera style={styles.cameraView} device={device} isActive={isActive} />
    </View>
  );
};

const getCreateNewStyles = createStyles()(({ colors }) => ({
  container: {
    height: '100%',
  },
  cameraView: {
    flex: 1,
  },
}));
