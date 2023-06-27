import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IMAGES} from '../../assets';
import InputText from '../../components/login/InputText';
import {strings} from '../../utils/constant';
import COLORS from '../../utils/color';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FONTS} from '../../utils/typography';
import {Controller, useForm} from 'react-hook-form';
import {LoginAuthType} from '../../model/userModel';
import {useLoginAuthMutation} from '../../services/authServices';

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<LoginAuthType>();

  const [loginAuth] = useLoginAuthMutation();

  // handle Login
  const handleLogin = (dataForm: LoginAuthType) => {
    console.log(dataForm);
    loginAuth({data: dataForm})
      .unwrap()
      .then(res => {
        console.log(res);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={IMAGES.logo} style={styles.logo} />
        <View style={styles.inputContainer}>
          {/* email */}
          <Controller
            name="username"
            control={control}
            rules={{
              required: true,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: strings.invalid_email,
              },
            }}
            render={({field: {value, onChange}}) => (
              <InputText
                placeholder={strings.your_email}
                value={value}
                onChange={onChange}
                error={
                  (errors.username?.type === 'required' &&
                    strings.please_input_key) ||
                  (errors.username?.type === 'pattern' && strings.invalid_email)
                }
              />
            )}
          />

          {/* password */}
          <Controller
            name="password"
            rules={{required: true}}
            control={control}
            render={({field: {value, onChange}}) => (
              <InputText
                placeholder={strings.your_password}
                value={value}
                onChange={onChange}
                error={
                  errors.password?.type === 'required' &&
                  strings.please_input_key
                }
              />
            )}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(handleLogin)}>
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
    ...FONTS.FONT_16_600,
  },
});
