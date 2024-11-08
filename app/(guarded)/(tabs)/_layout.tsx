import { Tabs } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';

const Layout = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#156651',
        tabBarInactiveTintColor: '#C2C2C2',
        tabBarItemStyle: { marginTop: 10 },
        tabBarLabelStyle: {
          fontSize: 14,
          // ...theme.typography.bold,
        },

        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          elevation: 5,
          height: 70 + insets.bottom,
          borderTopWidth: 0,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => <Feather name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'My Cart',
          tabBarIcon: ({ color, focused }) => (
            <Feather name="shopping-cart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'My Account',
          tabBarIcon: ({ color, focused }) => <Feather name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default Layout;
