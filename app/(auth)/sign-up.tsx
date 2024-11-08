import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { AppButton } from '~/components/core/button';
import { AppText } from '~/components/core/text';
import { AppTextInput } from '~/components/core/text-input';

const SignUpScreen = () => {
  const { styles, theme } = useStyles(styleSheet);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <AppText style={[theme.typography.bold, { fontSize: 32, marginTop: 24 }]}>
          Create Account
        </AppText>
        <AppText style={{ marginTop: 4, color: '#757575', fontSize: 16 }}>
          Fill in your details below to get started on a seamless shopping experience.
        </AppText>
        <View style={{ marginTop: 24, gap: 16 }}>
          <AppTextInput
            placeholder="First Name"
            leftIcon={<Feather name="user" size={24} color="#404040" />}
            label="First Name"
          />
          <AppTextInput
            placeholder="Last Name"
            leftIcon={<Feather name="user" size={24} color="#404040" />}
            label="Last Name"
          />
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
          <AppText>
            By clicking Create Account, you acknowledge you have read and agreed to our{' '}
            <AppText
              style={{
                color: theme.colors.primary,
              }}>
              Terms of Use{' '}
            </AppText>
            and
            <AppText
              style={{
                color: theme.colors.primary,
              }}>
              {' '}
              Privacy Policy
            </AppText>
          </AppText>

          <AppButton type="solid" title="Create Account" onPress={() => {}} />

          <View style={{ marginVertical: 24, flexDirection: 'row', alignItems: 'center', gap: 4 }}>
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
            <TouchableOpacity>
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

export default SignUpScreen;
