import React from 'react';
import {observer} from 'mobx-react';
import {View, Text} from 'react-native';
import {useRankDetailStore} from '../../utils';

const DetailTop = () => {
  const rankDetailStore = useRankDetailStore();
  const {rankDetail} = rankDetailStore;
  const {name} = rankDetail;

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default observer(DetailTop);
