import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {strings} from '../../utils/constant';
import {FONTS} from '../../utils/typography';
import {ICONS} from '../../assets';
import ItemProduct from '../../components/product/ItemProduct';
import COLORS from '../../utils/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {useGetListProductQuery} from '../../services/authServices';
import {useAppSelector} from '../../store/hooks';
import {FlatList} from 'react-native-gesture-handler';

const ListProduct = () => {
  const [page, setPage] = useState<number>(1);

  const {data} = useGetListProductQuery({
    data: {
      limit: 10,
      pagination: page,
    },
  });

  const listProduct = useAppSelector(state => state.authReducer.listProduct);

  console.log(listProduct.length);
  console.log('data: ', data?.length);

  const onEndReach = () => {
    // setPage(prev => prev + 1);
    console.log('reach');
  };

  return (
    <LinearGradient
      colors={['#85DBE9', '#C0F9EE']}
      style={{flex: 1}}
      start={{x: 0.5, y: 0.5}}
      end={{x: 1, y: 0.5}}>
      <SafeAreaView edges={['right', 'left', 'top']} style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{strings.title_product}</Text>
          <View>
            <Image source={ICONS.cart_shopping} style={styles.iconCart} />
          </View>
        </View>
        <FlatList
          style={styles.listProduct}
          data={listProduct}
          keyExtractor={(_, index: number) => index.toString()}
          renderItem={item => <ItemProduct data={item.item} />}
          onEndReached={onEndReach}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ListProduct;

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    ...FONTS.FONT_18_500,
    position: 'absolute',

    left: width / 2 - 40,
  },
  iconCart: {
    width: 24,
    height: 24,
  },
  listProduct: {
    flex: 1,
    backgroundColor: COLORS.SECONDARY_COLOR,
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
});
