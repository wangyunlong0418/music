import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {View, Text} from 'react-native';
import {useRegisterStore} from '../../store';
import store from './store';
import {useRankStore} from '../../utils';
import OfficialRank from './OfficialRank';

const paths = ['rank'];
const Rank = () => {
  useRegisterStore(paths, store);
  const rankStore = useRankStore();
  const {getRankInfo, sliceIndex, rankList} = rankStore;

  useEffect(() => {
    getRankInfo();
  }, [getRankInfo]);

  return (
    <View>
      <OfficialRank />
    </View>
  );
};

export default observer(Rank);
