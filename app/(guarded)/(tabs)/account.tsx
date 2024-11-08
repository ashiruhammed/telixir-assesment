import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, ImageBackground, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { AppText } from '~/components/core/text';
import Entypo from '@expo/vector-icons/Entypo';

const settingsData = [
  { icon: <MaterialIcons name="receipt" size={24} color="black" />, label: 'Transactions' },
  { icon: <Feather name="heart" size={24} color="black" />, label: 'Wishlist' },
  { icon: <Feather name="bookmark" size={24} color="black" />, label: 'Saved Address' },
  { icon: <MaterialIcons name="payment" size={24} color="black" />, label: 'Payment Methods' },
  {
    icon: <Ionicons name="notifications-outline" size={24} color="black" />,
    label: 'Notifications',
  },
  {
    icon: <Feather name="lock" size={24} color="black" />,
    label: 'Security',
  },
];

const AccountScreen = () => {
  const width = Dimensions.get('window').width;
  const { theme } = useStyles();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <ScrollView style={{ flex: 1 }}>
        <ImageBackground
          source={require('~/assets/profile-banner.png')}
          style={{ width: '100%', height: 160 }}
          width={width}>
          <SafeAreaView edges={['top']} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 16,
            }}>
            <AppText
              style={[{ color: '#FFFFFF', fontSize: 24, maxWidth: 178 }, theme.typography.bold]}>
              My Account
            </AppText>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </View>
          <View
            style={{
              marginHorizontal: 16,
              backgroundColor: '#fff',
              borderRadius: 14,
              padding: 16,
              marginTop: 23,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            <Image
              source={require('~/assets/user-profile.png')}
              style={{ width: 58, height: 58 }}
            />
            <View style={{ flex: 1 }}>
              <AppText style={[{ fontSize: 20 }, theme.typography.bold]}>Claire Cooper</AppText>
              <AppText style={{ color: '#757575' }}>claire.cooper@mail.com</AppText>
            </View>
            <FontAwesome6 name="edit" size={20} color="black" />
          </View>
        </ImageBackground>
        <ScrollView style={{ paddingHorizontal: 16, flex: 1 }}>
          <AppText style={[theme.typography.bold, { marginTop: 76, fontSize: 16 }]}>
            General
          </AppText>
          <View style={{ marginTop: 24, gap: 16 }}>
            {settingsData.map((item, i) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 16,
                  backgroundColor: 'white',
                  gap: 18,
                  borderRadius: 8,
                }}>
                {item.icon}
                <AppText style={{ fontSize: 16, color: '#404040', flex: 1 }}>{item.label}</AppText>
                <Entypo name="chevron-thin-right" size={20} color="black" />
              </View>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styleSheet = createStyleSheet({});

export default AccountScreen;
