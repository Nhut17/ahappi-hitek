type DispatchFunc = () => AppDispatch;

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from './store';
import {RootStackParam} from '../navigation/navigator';
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useRootNavigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParam>>();
  return navigation;
};
