import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {Text, View} from 'react-native';
import {useRegisterStore} from '../../store';
import store from './store';
import {useSingerDetailStore} from '../../utils';
import Header from './Header';
import SingerImg from './SingerImg';
import HotSong from './HotSong';

const paths = ['singerDetail'];
const SingerDetail = props => {
  useRegisterStore(paths, store);
  const {navigation} = props;
  const singerId = navigation.getParam('singerId');
  const singerDetailStore = useSingerDetailStore();
  const {
    getSingerDetail,
    artist,
    hotSongs,
    updateSingerDetail,
  } = singerDetailStore;

  useEffect(() => {
    getSingerDetail(singerId);

    return () => {
      updateSingerDetail({});
    };
  }, [getSingerDetail, singerId, updateSingerDetail]);

  const {name, picUrl} = artist;

  return (
    <View style={{position: 'relative'}}>
      <Header name={name} {...props} />
      <SingerImg uri={picUrl} />
      <HotSong songList={hotSongs} />
    </View>
  );
};

export default observer(SingerDetail);
