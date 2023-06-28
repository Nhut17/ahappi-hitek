import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets';
import COLORS from '../../utils/color';
import {FONTS} from '../../utils/typography';

const ItemProduct = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={IMAGES.item_product} style={styles.imageProduct} />
      </View>

      <View style={styles.productContainer}>
        <Text style={styles.title}>
          Tai nghe không dây chống ồn Sony WH-XB900N
        </Text>
        <View style={styles.rating}>
          <Text>4sao</Text>
          <Text style={{paddingHorizontal: 9}}>|</Text>
          <Text>Đã bán 14</Text>
        </View>
        <Text>2100000</Text>
        <View style={styles.incomeContainer}>
          <Text style={{textAlign: 'center'}}>Hoa hồng 100.000</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemProduct;

const styles = StyleSheet.create({
  container: {
    width: 170,
    // height: 300,
    maxHeight: 320,
    borderRadius: 4,
    backgroundColor: COLORS.WHITE,
  },
  productContainer: {
    padding: 8,
  },
  imageProduct: {
    width: 170,
    height: 170,
  },
  title: {
    ...FONTS.FONT_14_500,
  },
  rating: {
    flexDirection: 'row',
  },
  incomeContainer: {
    padding: 4,
    borderRadius: 4,
    backgroundColor: COLORS.INCOME_COLOR,
    // opacity: 0.3,
  },
});
