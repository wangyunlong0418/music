import React from 'react';
import {observer} from 'mobx-react';
import {View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import {useRegisterStore, useStore} from '../../store';
import store from './store';
import {useRecommendStore} from '../../utils';
import Slider from '../../components/Slider';
import SongRecommend from './SongRecommend';

const { width } = Dimensions.get('window')
const paths = ['recommend'];

const Recommend = observer(() => {
  
  useRegisterStore(paths, store);
  const recommendStore = useRecommendStore();
  const { banners, getBannerList} = recommendStore;
  const { sliderWrap, sliderBefore } = style;

  React.useEffect(() => {
    getBannerList();
  }, [getBannerList]);

  return (
    <View>
      <View style={sliderWrap}>
        <View style={sliderBefore}></View>
        <Slider banners={banners} />
      </View>
      <SongRecommend />
    </View>
  );
});


const style = StyleSheet.create({
    sliderWrap: {
        paddingTop: 4,
        position: 'relative',
    },
    sliderBefore: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 100,
        width,
        backgroundColor: '#d44439'
    }
})

export default Recommend;
