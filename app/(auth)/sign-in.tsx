import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { AppText } from '~/components/core/text';
import { AppTextInput } from '~/components/core/text-input';
import Feather from '@expo/vector-icons/Feather';
import { AppButton } from '~/components/core/button';
import { useRouter } from 'expo-router';

const SignInScreen = () => {
  const { styles, theme } = useStyles(styleSheet);
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <AppText style={[theme.typography.bold, { fontSize: 32, marginTop: 24 }]}>
          Welcome Back!
        </AppText>
        <AppText style={{ marginTop: 4, color: '#757575', fontSize: 16 }}>
          Enter your email to start shopping and get awesome deals today!
        </AppText>
        <View style={{ marginTop: 24, gap: 16 }}>
          <AppTextInput
            placeholder="Email"
            leftIcon={<Feather name="mail" size={24} color="#404040" />}
            label="Email"
          />
          <AppTextInput
            placeholder="********"
            leftIcon={<Feather name="lock" size={24} color="#404040" />}
            label="Password"
            isPassword
            secureTextEntry
          />
          <TouchableOpacity>
            <AppText
              style={{
                marginTop: 16,
                marginBottom: 18,
                fontSize: 16,
                color: theme.colors.primary,
              }}>
              Forgot your password
            </AppText>
          </TouchableOpacity>
          <AppButton
            type="solid"
            title="Log In"
            onPress={() => {
              router.push('/(guarded)/home');
            }}
          />

          <View style={{ marginVertical: 32, flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <View style={{ height: 1, backgroundColor: '#C2C2C2', flex: 1 }} />
            <AppText>OR</AppText>
            <View style={{ height: 1, backgroundColor: '#C2C2C2', flex: 1 }} />
          </View>
          <View style={{ gap: 16 }}>
            <AppButton
              type="outline"
              titleStyle={{
                color: theme.colors.primary,
              }}
              title={'Log In with Google'}
            />
            <AppButton
              type="outline"
              titleStyle={{
                color: theme.colors.primary,
              }}
              title={'Log In with Facebook'}
            />
          </View>

          <View
            style={{
              marginTop: 16,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            }}>
            <AppText>Don't have an account?</AppText>
            <TouchableOpacity
              onPress={() => {
                router.push('/(auth)/sign-up');
              }}>
              <AppText style={{ color: theme.colors.primary }}>Register</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styleSheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },
}));

export default SignInScreen;
