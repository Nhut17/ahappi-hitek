import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import COLORS from '../../utils/color';
import {FONTS} from '../../utils/typography';

interface Props {
  placeholder: string;
  error?: string | boolean;
  value: string;
  onChange: (value: string) => void;
}

const InputText: React.FC<Props> = props => {
  const {placeholder, error, value, onChange} = props;

  return (
    <View style={{marginBottom: 17}}>
      <TextInput
        style={[styles.container]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        autoCapitalize="none"
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
    color: 'red',
    ...FONTS.FONT_12_400,
  },
});
