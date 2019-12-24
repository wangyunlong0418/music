import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {View, ScrollView, Dimensions} from 'react-native';
import {useRegisterStore} from '../../store';
import store from './store';
import {useRankStore} from '../../utils';
import OfficialRank from './OfficialRank';
import GlobalRank from './GlobalRank';

const {width} = Dimensions.get('window');

const paths = ['rank'];
const Rank = props => {
  useRegisterStore(paths, store);
  const rankStore = useRankStore();
  const {getRankInfo} = rankStore;

  useEffect(() => {
    getRankInfo();
  }, [getRankInfo]);

  const wrap = {width};

  return (
    <View style={wrap}>
      <ScrollView>
        <OfficialRank {...props} />
        <GlobalRank {...props} />
      </ScrollView>
    </View>
  );
};

export default observer(Rank);
