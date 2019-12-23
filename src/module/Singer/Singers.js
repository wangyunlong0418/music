import React, {useState, useEffect} from 'react';
import {observer} from 'mobx-react';
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useSingerStore} from '../../utils';

const {height} = Dimensions.get('window');

const Singers = props => {
  const singerStore = useSingerStore();
  const {singers} = singerStore;
  const {singerListWrap} = styles;
  return (
    <View style={singerListWrap}>
      <ScrollView>
        <View>
          {singers.map((singerInfo, index) => {
            return <SingerItem singer={singerInfo} {...props} key={index} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const SingerItem = props => {
  const [singerInfo, setSingerInfo] = useState({});
  const {singerWrap, avatar} = styles;
  const {navigation, singer} = props;
  useEffect(() => {
    const updateSinger = () => {
      setSingerInfo(singer);
    };

    updateSinger();

    return () => {
      setSingerInfo({});
    };
  }, [singer]);

  const {picUrl, name, id} = singerInfo;

  const toSingerDetail = () => {
    navigation.navigate('Detail', {singerId: id});
  };

  return (
    <TouchableWithoutFeedback onPress={toSingerDetail}>
      <View style={singerWrap}>
        <Image style={avatar} source={{uri: picUrl}} />
        <Text>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  singerListWrap: {
    height: height - 68,
    paddingBottom: 120,
  },
  singerWrap: {
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 20,
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  name: {
    fontSize: 14,
    color: '#2E3030',
    fontWeight: '500',
  },
});

export default observer(Singers);
