const colors = {
  white: '#ffffff',
  background: '#000',
  text: '#000',
  primary: '#156651',
  yellow: {
    '50': '#fcfbea',
    '100': '#f9f9c8',
    '200': '#f4f094',
    '300': '#EEE159',
    '400': '#e7ce28',
    '500': '#d7b71b',
    '600': '#b99015',
    '700': '#946914',
    '800': '#7b5318',
    '900': '#69451a',
    '950': '#3d250b',
  },

  error: {
    '50': '#fff1f1',
    '100': '#ffdfdf',
    '200': '#ffc5c5',
    '300': '#ff9d9d',
    '400': '#ff6464',
    '500': '#ff4e4e',
    '600': '#ed1515',
    '700': '#c80d0d',
    '800': '#a50f0f',
    '900': '#881414',
    '950': '#4b0404',
  },
  grey: {
    '50': '#f6f6f6',
    '100': '#e7e7e7',
    '200': '#d1d1d1',
    '300': '#b0b0b0',
    '400': '#808080',
    '500': '#6d6d6d',
    '600': '#5d5d5d',
    '700': '#4f4f4f',
    '800': '#454545',
    '900': '#3d3d3d',
    '950': '#262626',
  },
} as const;

const typography = {
  h1: {
    fontFamily: 'Manrope_700Bold',
    fontSize: 32,
  },
  h2: {
    fontFamily: 'Manrope_700Bold',
    fontSize: 32,
  },
  extraLight: {
    fontFamily: 'Manrope_200ExtraLight',
  },
  light: {
    fontFamily: 'Manrope_300Light',
  },
  regular: {
    fontFamily: 'Manrope_400Regular',
  },
  medium: {
    fontFamily: 'Manrope_500Medium',
  },
  semiBold: {
    fontFamily: 'Manrope_600SemiBold',
  },
  bold: {
    fontFamily: 'Manrope_700Bold',
  },
  extraBold: {
    fontFamily: 'Manrope_800ExtraBold',
  },
} as const;

export const lightTheme = {
  colors,
  typography,
  components: {
    container: {
      alignItems: 'center',
      flex: 1,
      padding: 24,
    },
    separator: {
      height: 1,
      marginVertical: 30,
      width: '80%',
      backgroundColor: 'grey',
    },
    title: {
      ...typography.h1,
    },
    subtitle: {
      color: colors.grey[500],
    },
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
  spacing(value: number) {
    return value * 4;
  },
} as const;
