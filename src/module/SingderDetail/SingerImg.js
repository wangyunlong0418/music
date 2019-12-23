import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const SingerImg = ({uri}) => {
  const {img} = style;
  const [imgUri, setImgUri] = useState('');

  useEffect(() => {
    const updateUri = () => {
      setImgUri(uri);
    };

    updateUri();
  }, [uri]);

  return (
    <View>
      <Image style={img} source={{uri: imgUri}} />
    </View>
  );
};

const style = StyleSheet.create({
  imgWrap: {
    width,
  },
  img: {
    width,
    height: height * 0.5,
  },
});

export default SingerImg;
