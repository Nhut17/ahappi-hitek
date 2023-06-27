import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMAGES} from '../../assets';
import InputText from '../../components/login/InputText';
import {strings} from '../../utils/constant';
import COLORS from '../../utils/color';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={IMAGES.logo} style={styles.logo} />
        <View style={styles.inputContainer}>
          {/* email */}
          <InputText placeholder={strings.your_email} />

          {/* password */}
          <InputText placeholder={strings.your_password} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{strings.continue}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    marginTop: 130,
    paddingHorizontal: 36,
  },
  logo: {
    width: 156,
    height: 64,
    alignSelf: 'center',
    marginTop: 130,
  },
  button: {
    backgroundColor: COLORS.BUTTON_COLOR,
    paddingVertical: 15,
    height: 50,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});
