import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-looped-carousel';

const {width, height} = Dimensions.get('window');

const Slider = ({banners = []}) => {
  useEffect(() => {});
  const size = {width, height: 100};
  return (
    <View style={{flex: 1}} onLayout={this._onLayoutDidChange}>
      <Carousel
        delay={2000}
        style={size}
        autoplay
        pageInfo
        onAnimateNextPage={p => console.log(p)}>
        <View style={[{backgroundColor: '#BADA55'}, size]}>
          <Image
            source={{
              uri:
                'http://p1.music.126.net/j84xWVoNxik3wSdc4Eb2MQ==/109951164564430757.jpg',
            }}
            style={{width, height: 100}}
          />
        </View>
        <View style={[{backgroundColor: 'red'}, size]}>
          <Image
            source={{
              uri:
                'http://p1.music.126.net/gSyS3me5OrurhiX6ZY84Aw==/109951164565547412.jpg',
            }}
            style={{width, height: 100}}
          />
        </View>
        <View style={[{backgroundColor: 'blue'}, size]}>
          <Image
            source={{
              uri:
                'http://p1.music.126.net/gSyS3me5OrurhiX6ZY84Aw==/109951164565547412.jpg',
            }}
            style={{width, height: 100}}
          />
        </View>
      </Carousel>
    </View>
  );
};

// {banners.map((banner, index) => {
//   const {imageUrl} = banner;
//   return (
//     <View key={index}>
//       <Image style={size} source={{uri: imageUrl}} />
//     </View>
//   );
// })}

export default Slider;
