import React from 'react';
import {observer} from 'mobx-react';
import {View, Text, Button} from 'react-native';
import {useRegisterStore, useStore} from '../../store';
import store from './store';
import {useRecommendStore} from '../../utils';
import Slider from '../../components/Slider';

const Recommend = observer(() => {
  const paths = ['recommend'];
  useRegisterStore(paths, store);
  const recommendStore = useRecommendStore();
  const {text, setText, banners, getBannerList} = recommendStore;

  React.useEffect(() => {
    getBannerList();
  }, [getBannerList]);

  return (
    <View>
      <Slider banners={banners} />
    </View>
  );
});

export default Recommend;
