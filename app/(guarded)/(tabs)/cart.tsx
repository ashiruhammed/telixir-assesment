import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';
import { AppText } from '~/components/core/text';
const CartScreen = () => {
  const { theme } = useStyles();
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
      <StatusBar style="dark" />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 16,
        }}>
        <AppText style={[{ fontSize: 24 }, theme.typography.bold]}>My Cart</AppText>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <FlatList
        style={{ marginTop: 24 }}
        contentContainerStyle={{ gap: 16 }}
        data={[1, 2, 3]}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 16,
              backgroundColor: 'white',
              borderRadius: 16,
              flexDirection: 'row',
              gap: 20,
            }}>
            <Image
              style={{ width: 90, aspectRatio: 1 }}
              source={require('~/assets/product-1.png')}
            />
            <View style={{ gap: 4 }}>
              <AppText style={{ color: '#404040', fontSize: 16 }}>EKERO</AppText>
              <AppText
                style={[{ marginTop: 4, fontSize: 20, color: '#404040' }, theme.typography.bold]}>
                $230.00
              </AppText>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <AppText style={{ color: '#404040' }}>$512.58</AppText>
                <View
                  style={{
                    backgroundColor: '#E44A4A',
                    alignSelf: 'flex-start',
                    borderBottomRightRadius: 8,
                    padding: 2,
                    borderTopLeftRadius: 8,
                  }}>
                  <AppText
                    style={[{ color: '#fff', fontSize: 14, padding: 4 }, theme.typography.bold]}>
                    50% OFF
                  </AppText>
                </View>
              </View>
              <AppText style={{ marginVertical: 8, color: '#9E9E9E' }}>Grey</AppText>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default CartScreen;
