import { memo, useMemo } from 'react';
import * as darkIcons from './dark';
import * as lightIcons from './light';
import { useAppSelector } from '@hooks';

const getIcons = () => {
  const theme = useAppSelector(s => s.app.theme);

  if (theme === 'dark') {
    return { ...darkIcons };
  }

  return { ...lightIcons };
};

export default getIcons;
