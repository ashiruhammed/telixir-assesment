import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import { AppButton } from '~/components/core/button';
import { AppText } from '~/components/core/text';
import CustomSlider from '~/components/custom/custom-slider';
import { Pagination } from '~/components/custom/paginator';

const data = [
  {
    id: '1',
    title: 'Online Home Store and Furniture',
    description:
      'Discover all style and budgets of furniture, appliances, kitchen, and more from 500+ brands in your hand.',
    image: require('~/assets/onboarding-1.png'),
  },
  {
    id: '2',
    title: 'Delivery Right to Your Doorstep',
    description:
      'Sit back, and enjoy the convenience of our drivers delivering your order to your doorstep.',
    image: require('~/assets/onboarding-2.png'),
  },
  {
    id: '3',
    title: 'Get Support From Our Skilled Team',
    description: 'If our products dont meet your expectations, were available 24/7 to assist you.',
    image: require('~/assets/onboarding-3.png'),
  },
];

const OnboardingScreen = () => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const { theme } = useStyles();
  return (
    <View style={{ flex: 1 }}>
      <CustomSlider
        data={data}
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: 'auto' }}>
            <Image
              source={item.image}
              style={{
                width: width,
                paddingTop: insets.top,
              }}
              height={624}
            />
            <View style={{ maxWidth: 350, marginHorizontal: 'auto' }}>
              <AppText
                style={[
                  { fontSize: 32, textAlign: 'center', marginTop: 24 },
                  theme.typography.bold,
                ]}>
                {item.title}
              </AppText>
              <AppText
                style={{ fontSize: 16, textAlign: 'center', marginTop: 16, color: '#757575' }}>
                {item.description}
              </AppText>
            </View>
          </View>
        )}
        renderPaginator={({ scrollX, data }) => (
          <Pagination
            style={{ marginLeft: 0, justifyContent: 'center' }}
            scrollX={scrollX}
            data={data}
            activeColor="#156651"
            nonActiveColor="#E0E0E0"
          />
        )}
      />
    </View>
  );
};

export default OnboardingScreen;
