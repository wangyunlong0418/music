import React from 'react';
import {Text} from 'react-native';

const SingerDetail = props => {
  const {navigation} = props;
  const singerId = navigation.getParam('singerId');
  console.log(singerId);
  return <Text>222</Text>;
};

export default SingerDetail;
