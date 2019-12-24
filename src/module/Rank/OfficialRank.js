import React from 'react';
import {observer} from 'mobx-react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import RankImage from './RankImage';
import {useRankStore} from '../../utils';

const OfficialRank = props => {
  const rankStore = useRankStore();
  const {rankList} = rankStore;
  const {title, listWrap, imgWrap, trackListWrap, trackText} = style;
  const {navigation} = props;
  const toRankDetail = id => {
    navigation.navigate('RankDetail', {rankId: id});
  };
  return (
    <View>
      <Text style={title}>官方榜</Text>
      <View style={listWrap}>
        {rankList.map(
          ({coverImgUrl, updateFrequency, tracks = [], id}, index) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => {
                  toRankDetail(id);
                }}
                key={index}>
                <View
                  style={[
                    imgWrap,
                    {borderBottomWidth: index < rankList.length - 1 ? 1 : 0},
                  ]}>
                  <View>
                    <RankImage
                      imgUrl={coverImgUrl}
                      updateFrequency={updateFrequency}
                    />
                  </View>
                  <View style={trackListWrap}>
                    {tracks.map(({first, second}, i) => {
                      return (
                        <Text style={trackText} key={i}>
                          {`${i + 1}. ${first} - ${second}`}
                        </Text>
                      );
                    })}
                  </View>
                </View>
              </TouchableWithoutFeedback>
            );
          },
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    margin: 10,
    fontSize: 18,
    fontWeight: '700',
    color: '#2E3030',
  },
  listWrap: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  imgWrap: {
    paddingTop: 5,
    paddingBottom: 5,
    position: 'relative',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#e4e4e4',
    flexDirection: 'row',
  },
  trackListWrap: {
    padding: 10,
    flex: 1,
    justifyContent: 'space-around',
  },
  trackText: {
    fontSize: 14,
    color: 'grey',
    lineHeight: 18,
  },
});

export default observer(OfficialRank);
