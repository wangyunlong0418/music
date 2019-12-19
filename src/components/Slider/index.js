import React, {useEffect, useMemo, useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-looped-carousel';

const {width, height} = Dimensions.get('window');

const Slider = ({banners = []}) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const aa = () => {
            const bannerList = banners.map((banner) => {
                return banner.imageUrl;
            })
            setList(bannerList);
        }
        aa();

    }, [banners]);
    const size = {width, height: 160};
    console.log(list, 111)
  return (
    <View style={{flex: 1}} onLayout={this._onLayoutDidChange}>
        {/* {
                    list.map((url, index) => {
                        return (
                            <View style={size} key={index}>
                                <Image style={{width, height: 160}} source={{uri: url}} />
                            </View>
                        )
                    })
                } */}
        {
            list.length > 0 ? 
            <Carousel
                delay={2000}
                style={size}
                autoplay
                bullets
                >
                {
                    list.map((url, index) => {
                        return (
                            <View style={size} key={index}>
                                <Image style={{width, height: 160}} source={{uri: url}} />
                            </View>
                        )
                    })
                }
            </Carousel> : <Text>11</Text>
        }
      
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
