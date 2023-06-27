import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ROUTES from './route-key';
import Login from '../screen/login/Login';
import ListProduct from '../screen/product/ListProduct';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.LOGIN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.PRODUCT_SCREEN} component={ListProduct} />
    </Stack.Navigator>
  );
};

export default Navigation;
