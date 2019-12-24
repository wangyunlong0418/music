import React from 'react';
import {observer} from 'mobx-react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {useRankStore} from '../../utils';
import RankImage from './RankImage';

const {width} = Dimensions.get('window');

const GlobalRank = props => {
  const rankStore = useRankStore();
  const {globalRankList} = rankStore;
  const {title, listWrap} = styles;
  const {navigation} = props;
  const toRankDetail = id => {
    navigation.navigate('RankDetail', {rankId: id});
  };
  return (
    <View>
      <Text style={title}>全球榜</Text>
      <View style={listWrap}>
        {globalRankList.map(({coverImgUrl, updateFrequency, id}, index) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                toRankDetail(id);
              }}
              key={index}>
              <View>
                <RankImage
                  imgUrl={coverImgUrl}
                  updateFrequency={updateFrequency}
                  size={width * 0.32}
                />
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  globalRankWrap: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    margin: 10,
    fontSize: 18,
    fontWeight: '700',
    color: '#2E3030',
  },
  listWrap: {
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default observer(GlobalRank);
