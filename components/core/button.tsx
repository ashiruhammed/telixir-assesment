import { Button, ButtonProps } from '@rneui/base';
import { useStyles } from 'react-native-unistyles';

export interface AppButtonProps extends ButtonProps {
  // other props
  type: 'solid' | 'outline' | 'clear';
  color?: string;
}

export function AppButton({ color, ...props }: AppButtonProps) {
  const { colors, typography } = useStyles().theme;
  return (
    <Button
      // breaker
      {...props}
      titleStyle={[
        // breaker
        typography.regular,
        props.type === 'solid' && {
          color:
            color && parseInt(color.replace('#', ''), 16) > 0xffffff / 1.1 ? colors.text : '#fff',
        },
        props.type === 'clear' && { color: color || colors.primary[900] },
        props.type === 'outline' && { color: color || colors.white },
        props.titleStyle,
        {
          fontSize: 16,
          ...typography.bold,
        },
      ]}
      containerStyle={[
        // breaker
        props.containerStyle,
      ]}
      buttonStyle={[
        // breaker
        {
          // other default styles
          borderRadius: 6,
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderWidth: props.type === 'outline' ? 1 : 0,
        },
        props.type === 'solid' && { backgroundColor: color || colors.primary },
        props.type === 'outline' && { borderColor: colors.primary || colors.white },
        props.buttonStyle,
      ]}
      disabledTitleStyle={[
        // breaker

        props.type === 'solid' && {
          color:
            color && parseInt(color.replace('#', ''), 16) > 0xffffff / 1.1
              ? colors.text
              : colors.white,
        },
        props.type === 'clear' && { color: colors.grey[500] },
        props.type === 'outline' && { color: colors.grey[500] },
        props.disabledTitleStyle,
      ]}
      disabledStyle={[
        // breaker
        props.type === 'solid' && { backgroundColor: colors.grey[500] },
        props.type === 'clear' && { backgroundColor: 'transparent' },
        props.type === 'outline' && { backgroundColor: 'transparent' },
        props.disabledStyle,
      ]}
    />
  );
}
