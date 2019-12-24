import React, {useState, useEffect} from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const RankImage = ({imgUrl, updateFrequency, size = width * 0.27}) => {
  const [uri, setUri] = useState('');
  const [frequency, setFrequency] = useState('');

  useEffect(() => {
    setUri(imgUrl);
    setFrequency(updateFrequency);

    return () => {
      setUri('');
    };
  }, [imgUrl, updateFrequency]);
  return (
    <View style={style.wrap}>
      <Image
        style={[style.img, {width: size, height: size}]}
        source={{
          uri: uri,
        }}
      />
      <Text style={style.updateFrequencyWrap}>{frequency}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  wrap: {
    position: 'relative',
  },
  img: {
    borderRadius: 4,
  },
  updateFrequencyWrap: {
    position: 'absolute',
    left: 7,
    bottom: 7,
    fontSize: 14,
    color: '#f1f1f1',
  },
});

export default RankImage;
