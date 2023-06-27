import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import COLORS from '../../utils/color';

interface Props {
  placeholder: string;
}

const InputText: React.FC<Props> = props => {
  const {placeholder} = props;

  return <TextInput style={styles.container} placeholder={placeholder} />;
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 12,
    height: 50,
    width: '100%',
    marginBottom: 17,
    borderColor: COLORS.BORDER_COLOR,
    borderRadius: 8,
  },
});
