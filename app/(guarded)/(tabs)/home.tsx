import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import { AppButton } from '~/components/core/button';
import { AppText } from '~/components/core/text';
import { AppTextInput } from '~/components/core/text-input';
import AntDesign from '@expo/vector-icons/AntDesign';

const HomeScreen = () => {
  const { theme } = useStyles();
  const { width } = Dimensions.get('window');
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
        <AppTextInput
          inputContainerStyle={{
            borderRadius: 40,
          }}
          leftIcon={{
            name: 'search',
            color: '#000',
          }}
          placeholder="Search Candles"
          rightIcon={<Ionicons name="camera-outline" size={24} color="black" />}
        />
        <View style={{ marginTop: 10, flexDirection: 'row', gap: 4 }}>
          <EvilIcons name="location" size={24} color="black" />
          <AppText style={{ flex: 1, fontSize: 14 }}>
            Deliver to{' '}
            <AppText style={[{ color: '#404040', fontSize: 14 }, theme.typography.bold]}>
              3517 W. Gray St. Utica, Pennsylvania
            </AppText>
          </AppText>
          <EvilIcons name="chevron-down" size={24} color="black" />
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <ImageBackground
          source={require('~/assets/home-banner.png')}
          style={{ marginVertical: 24, width: '100%' }}
          width={width}>
          <View style={{ paddingHorizontal: 20, marginTop: 21 }}>
            <AppText
              style={[{ color: '#FFFFFF', fontSize: 24, maxWidth: 178 }, theme.typography.bold]}>
              Celebrate The Season With Us!
            </AppText>
            <AppText style={{ color: '#FFFFFF', fontSize: 14, marginTop: 10, maxWidth: 178 }}>
              Get discounts up to 75% for furniture & decoration
            </AppText>
            <AppButton
              type="solid"
              color="#fff"
              title={'Shop Now'}
              style={{ paddingVertical: 20, maxWidth: 150 }}
              buttonStyle={{ borderRadius: 40 }}
              titleStyle={{ color: '#156651' }}
            />
          </View>
        </ImageBackground>

        <View style={{ marginTop: 24, marginBottom: 16, paddingHorizontal: 16 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <AppText style={[{ fontSize: 24, color: '#404040' }, theme.typography.bold]}>
              Special Offers
            </AppText>
            <TouchableOpacity>
              <AppText style={[{ color: '#156651' }, theme.typography.bold]}>See More</AppText>
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={{ gap: 16 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ paddingTop: 16, paddingBottom: 16, flex: 1 }}>
            {[
              {
                imgSrc: require('~/assets/product-1.png'),
              },
              {
                imgSrc: require('~/assets/product-2.png'),
              },
            ].map((item, index) => (
              <View
                style={{
                  borderRadius: 14,
                  padding: 14,
                  backgroundColor: '#fff',
                  width: width * 0.4,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.41,

                  elevation: 2,
                }}>
                <View key={index} style={{}}>
                  <Image source={item.imgSrc} style={{ alignSelf: 'center' }} />
                  <View
                    style={{
                      backgroundColor: '#E44A4A',
                      alignSelf: 'flex-start',
                      position: 'absolute',
                      bottom: -18,
                      borderTopRightRadius: 8,
                      padding: 4,
                      borderBottomLeftRadius: 8,
                    }}>
                    <AppText
                      style={[{ color: '#fff', fontSize: 14, padding: 4 }, theme.typography.bold]}>
                      50% OFF
                    </AppText>
                  </View>
                </View>
                <AppText style={{ marginTop: 25 }}>EKERÖ</AppText>
                <AppText
                  style={[{ marginTop: 4, fontSize: 20, color: '#404040' }, theme.typography.bold]}>
                  $230.00
                </AppText>
                <AppText>$512.58</AppText>
                <View style={{ marginVertical: 4, flexDirection: 'row', gap: 4 }}>
                  <AntDesign name="star" size={24} color="#EBB65B" />
                  <AppText>4.9 (256)</AppText>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
