import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {View, Text} from 'react-native';
import {useRegisterStore} from '../../store';
import store from './store';
import {useRankStore} from '../../utils';

const paths = ['rank'];
const Rank = () => {
  useRegisterStore(paths, store);
  const rankStore = useRankStore();
  const {getRankInfo} = rankStore;

  useEffect(() => {
    getRankInfo();
  }, [getRankInfo]);

  return (
    <View>
      <Text>Rank</Text>
    </View>
  );
};

export default observer(Rank);
