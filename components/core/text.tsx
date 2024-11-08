import * as React from 'react';
import { Text, TextProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';

export interface AppTextProps extends TextProps {
  // other props here...
  darkColor?: boolean;
}

export function AppText(props: AppTextProps) {
  const { theme } = useStyles();

  return (
    <Text
      {...props}
      style={[
        {
          ...theme.typography.regular,
          // color: props.darkColor ? '#000' : theme.colors.white.
          color: '#000',
        },
        props.style,
      ]}
      allowFontScaling={props.allowFontScaling ?? false}
    />
  );
}
