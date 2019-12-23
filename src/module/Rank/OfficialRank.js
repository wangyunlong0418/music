import React from 'react';
import {observer} from 'mobx-react';
import {View, Text} from 'react-native';
import RankImage from './RankImage';
import {useRankStore} from '../../utils';

const OfficialRank = () => {
  const rankStore = useRankStore();
  const {rankList} = rankStore;
  return (
    <View>
      <Text>官方榜</Text>
      <View>
        {rankList.map(({coverImgUrl}, index) => {
          return (
            <View key={index}>
              <RankImage imgUrl={coverImgUrl} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default observer(OfficialRank);
