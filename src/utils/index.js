import {Dimensions, Platform} from 'react-native';
import {usePageStore} from '../store';

export const useRecommendStore = () => {
  return usePageStore(['recommend']);
};

export const useSingerStore = () => {
  return usePageStore(['singer']);
};

export const useRankStore = () => {
  return usePageStore(['rank']);
};

export const useSingerDetailStore = () => {
  return usePageStore(['singerDetail']);
};

export const isIphoneX = () => {
  const X_width = 375;
  const X_height = 812;
  let {height, width} = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    ((height === X_height && width === X_width) ||
      (height === X_width && width === X_height))
  );
};
