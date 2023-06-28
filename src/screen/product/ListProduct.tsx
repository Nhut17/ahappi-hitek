import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {strings} from '../../utils/constant';
import {FONTS} from '../../utils/typography';
import {ICONS} from '../../assets';
import ItemProduct from '../../components/product/ItemProduct';
import COLORS from '../../utils/color';

const ListProduct = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View></View>
        <Text style={styles.title}>{strings.title_product}</Text>
        <View>
          <Image source={ICONS.cart_shopping} style={styles.iconCart} />
        </View>
      </View>

      <View style={styles.listProduct}>
        <ItemProduct />
      </View>
    </SafeAreaView>
  );
};

export default ListProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 14,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    ...FONTS.FONT_18_500,
  },
  iconCart: {
    width: 24,
    height: 24,
  },
  listProduct: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY_COLOR,
  },
});
