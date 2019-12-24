import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {View, Text} from 'react-native';
import Header from '../../components/Header';
import {useRegisterStore} from '../../store';
import store from './store';
import {useRankDetailStore} from '../../utils';
const paths = ['rankDetail'];
const RankDetail = props => {
  useRegisterStore(paths, store);
  const rankDetailStore = useRankDetailStore();
  const {navigation} = props;
  const rankId = navigation.getParam('rankId');
  const {getRankDetailInfo, updateRankDetail, rankDetail} = rankDetailStore;

  useEffect(() => {
    getRankDetailInfo(rankId);

    return () => {
      updateRankDetail({});
    };
  }, [getRankDetailInfo, rankId, updateRankDetail]);

  const {name} = rankDetail;

  return (
    <View>
      <Header name={name} {...props} />
    </View>
  );
};

export default observer(RankDetail);
