import Navigator from '@/components/Container/cpns/Navigator';
import { View } from '@tarojs/components';
import React, { memo, PropsWithChildren } from 'react';
import styles from './index.module.scss';
interface Props {
  title?: string;
}

const Container: React.FC<PropsWithChildren<Props>> = memo((props) => {
  const { children, title = '' } = props;
  return (
    <View className={styles.ContainerWrapper}>
      {title && <Navigator title={title} />}
      {children}
    </View>
  );
});

export default Container;
