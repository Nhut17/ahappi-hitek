import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {strings} from '../../utils/constant';
import {FONTS} from '../../utils/typography';
import {ICONS} from '../../assets';
import ItemProduct from '../../components/product/ItemProduct';
import COLORS from '../../utils/color';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {useGetListProductQuery} from '../../services/authServices';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {FlatList} from 'react-native-gesture-handler';
import {addItemCart, clearItemCart} from '../../reducers/authReducer';

const ListProduct = () => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const {itemCart} = useAppSelector(state => state.authReducer);

  const [showModal, setShowModal] = useState<boolean>(false);

  console.log('itemCart: ', itemCart);

  const {isFetching} = useGetListProductQuery({
    data: {
      limit: 10,
      pagination: page,
    },
  });

  const listProduct = useAppSelector(state => state.authReducer.listProduct);

  const onEndReach = () => {
    setPage(prev => prev + 1);
    console.log('reach');
  };

  const handleAdd = () => {
    dispatch(addItemCart());
  };

  const renderFooterComponent = useCallback(() => {
    return <ActivityIndicator style={{marginBottom: 50}} size={'large'} />;
  }, []);

  const handleBuy = () => {
    if (itemCart === 0) {
      Alert.alert(strings.empty_cart, '', [
        {
          text: strings.cancel,
          style: 'cancel',
        },
      ]);
    } else {
      Alert.alert(strings.confirm_buy, '', [
        {
          text: strings.cancel,
          onPress: () => console.log('cancel'),
          style: 'cancel',
        },
        {
          text: strings.ok,
          onPress: () => {
            setShowModal(true);
            let timeout = setTimeout(() => {
              dispatch(clearItemCart());
              setShowModal(false);
            }, 1000);
            return () => {
              clearTimeout(timeout);
            };
          },
        },
      ]);
    }
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
          <TouchableOpacity onPress={handleBuy}>
            <Image source={ICONS.cart_shopping} style={styles.iconCart} />
            {itemCart ? (
              <View style={styles.amountItem}>
                <Text style={styles.amountItemText}>{itemCart}</Text>
              </View>
            ) : (
              <View style={styles.amountItem}>
                <Text style={styles.amountItemText}>0</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        {showModal && (
          <View style={styles.modalConfirm}>
            <View style={styles.modal}>
              <Image source={ICONS.confirm} style={{width: 25, height: 25}} />
              <Text style={styles.textModal}> {strings.buy_success}</Text>
            </View>
          </View>
        )}

        <FlatList
          style={styles.listProduct}
          data={listProduct}
          keyExtractor={(_, index: number) => index.toString()}
          renderItem={item => (
            <ItemProduct data={item.item} handleAdd={handleAdd} />
          )}
          onEndReached={onEndReach}
          onStartReached={() => console.log('start')}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
          ListFooterComponent={isFetching ? renderFooterComponent : null}
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
  modalConfirm: {
    position: 'absolute',
    zIndex: 10000,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '100%',
    height: '110%',
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 300,
    height: 150,
    backgroundColor: 'white',
    flexDirection: 'row',
    zIndex: 999,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.7,
    shadowRadius: 8,
  },
  textModal: {
    ...FONTS.FONT_16_600,
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
  amountItem: {
    backgroundColor: COLORS.BEST_SALER_COLOR,
    width: 16,
    height: 16,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -7,
    right: -7,
  },
  amountItemText: {
    ...FONTS.FONT_10_500,
  },
});
