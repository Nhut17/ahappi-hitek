import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import COLORS from '../../utils/color';
import {FONTS} from '../../utils/typography';

interface Props {
  placeholder: string;
  error?: string | boolean;
  value: string;
  onChange: (value: string) => void;
  secureText?: boolean;
}

const InputText: React.FC<Props> = props => {
  const {placeholder, error, value, onChange, secureText} = props;

  return (
    <View style={{marginBottom: 17}}>
      <TextInput
        style={[styles.container, error ? styles.invalidText : {}]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        autoCapitalize="none"
        secureTextEntry={secureText ? true : false}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 12,
    height: 50,
    width: '100%',
    borderColor: COLORS.BORDER_COLOR,
    borderRadius: 8,
  },
  errorText: {
    paddingTop: 8,
    paddingHorizontal: 8,
    color: COLORS.DARK_RED_COLOR,
    ...FONTS.FONT_12_400,
  },
  invalidText: {
    borderColor: COLORS.DARK_RED_COLOR,
    backgroundColor: COLORS.LIGHT_RED_COLOR,
  },
});
