import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from '../../components/Icon';

const SingderDetail = props => {
  const {headerWrap, nameWrap} = style;
  const {name, navigation} = props;

  const exit = () => {
    console.log(1);
    navigation.goBack();
  };

  return (
    <View style={headerWrap}>
      <Icon code="&#xe8de;" size={24} color="#f1f1f1" onPress={exit} />
      <Text style={nameWrap}>{name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  headerWrap: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 999,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  nameWrap: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '700',
    color: '#f1f1f1',
  },
});

export default SingderDetail;
