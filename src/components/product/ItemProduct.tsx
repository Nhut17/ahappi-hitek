import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../utils/color';
import {FONTS} from '../../utils/typography';
import {AirbnbRating} from 'react-native-ratings';
import {ProductType} from '../../model/productModel';

interface Props {
  data: ProductType;
}

const ItemProduct: React.FC<Props> = props => {
  const {data} = props;
  const price = 100000;
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={
            data.image[0]
              ? {uri: data?.image[0] as string}
              : {uri: 'https://www.namepros.com/attachments/empty-png.89209/'}
          }
          style={styles.imageProduct}
        />
        <View style={styles.bestSeller}>
          <Text style={styles.textBestSaler}>Best saler</Text>
        </View>
        <View style={styles.discount}>
          <Text style={styles.textDiscount}>10%</Text>
        </View>
      </View>

      <View style={styles.productContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {data?.title}
        </Text>
        <View style={styles.rating}>
          <AirbnbRating
            count={5}
            defaultRating={data?.star ? data?.star : 0}
            reviews={[]}
            size={15}
            showRating={false}
            isDisabled
            starContainerStyle={{paddingHorizontal: 0}}
          />
          <Text style={{paddingHorizontal: 4, opacity: 0.2}}>|</Text>
          <Text style={{fontSize: 10, opacity: 0.8}}>
            Đã bán {data?.inventory_amount ? data?.inventory_amount : 0}
          </Text>
        </View>
        <Text style={styles.priceText}>
          {data?.fake_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ
        </Text>
        <View style={styles.incomeContainer}>
          <Text style={styles.incomeText}>
            Hoa hồng {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemProduct;

const styles = StyleSheet.create({
  container: {
    width: 200,
    maxHeight: 350,
    borderRadius: 4,
    backgroundColor: COLORS.WHITE,
  },
  ratingStars: {},
  productContainer: {
    padding: 8,
  },
  imageProduct: {
    width: 200,
    height: 200,
  },
  title: {
    ...FONTS.FONT_14_500,
    minHeight: 35,
    overflow: 'hidden',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  incomeContainer: {
    padding: 4,
    borderRadius: 4,
    backgroundColor: COLORS.INCOME_COLOR(0.2),
  },
  incomeText: {
    color: COLORS.INCOME_COLOR(1),
    textAlign: 'center',
    ...FONTS.FONT_10_500,
  },
  priceText: {
    ...FONTS.FONT_16_600,
    color: COLORS.TEXT_RED,
    paddingBottom: 8,
  },
  bestSeller: {
    width: 70,
    height: 24,
    backgroundColor: COLORS.BEST_SALER_COLOR,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 12,
  },
  textBestSaler: {
    ...FONTS.FONT_14_600,
    paddingHorizontal: 5,
  },
  discount: {
    width: 36,
    height: 36,
    borderRadius: 999,
    backgroundColor: COLORS.DISCOUNT_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  textDiscount: {
    ...FONTS.FONT_12_700,
    color: 'white',
  },
});
