import React, {useEffect} from 'react';
import {observer} from 'mobx-react';
import {View, Text, StyleSheet} from 'react-native';
import {useRegisterStore, useStore} from '../../store';
import Scroller from '../../components/Scroller';
import {alphaTypes, categoryTypes} from '../../constants';
import {useSingerStore} from '../../utils';
import store from './store';
import Singers from './Singers';

const paths = ['singer'];

const Singer = props => {
  const {scrollerBox} = styles;
  useRegisterStore(paths, store);

  const singerStore = useSingerStore();

  const {getSingerList, updateKey} = singerStore;

  const onChooseCategory = key => {
    updateKey('category', key);
    getSingerList();
  };

  const onChooseInitial = key => {
    updateKey('initial', key);
    getSingerList();
  };

  useEffect(() => {
    getSingerList();
  }, [getSingerList]);

  return (
    <View>
      <View style={scrollerBox}>
        <Scroller
          title="分类(默认热门):"
          scrollList={categoryTypes}
          onChoose={onChooseCategory}
        />
        <Scroller
          title="首字母:"
          scrollList={alphaTypes}
          onChoose={onChooseInitial}
        />
      </View>
      <Singers {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollerBox: {
    padding: 5,
  },
});

export default observer(Singer);
