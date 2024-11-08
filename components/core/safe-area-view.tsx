import React from 'react';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

export interface AppSafeAreaViewProps extends SafeAreaViewProps {
  // other props here...
}

export const AppSafeAreaView = (props: AppSafeAreaViewProps) => {
  return (
    <SafeAreaView {...props} style={[{ flex: 1, paddingHorizontal: 13 }, props.style]}>
      {props.children}
    </SafeAreaView>
  );
};
