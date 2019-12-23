import React, {useEffect, useMemo, useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-looped-carousel';

const {width, height} = Dimensions.get('window');
const size = {width, height: 180};

const Slider = ({banners = []}) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const upateList = () => {
            const bannerList = banners.map((banner) => {
                return banner.imageUrl;
            })
            setList(bannerList);
        }
        upateList();

    }, [banners]);
    const { imageWrap, img } = style;
  return (
    <View style={{ height: size.height, paddingLeft: 4,}}>
        {
            list.length > 0 ? 
            <Carousel
                delay={2000}
                style={size}
                autoplay
                bullets
                chosenBulletStyle={{backgroundColor: '#d44439'}}
                >
                {
                    list.map((url, index) => {
                        return (
                            <View style={size} key={index}>
                                <Image style={img} source={{uri: url}} />
                            </View>
                        )
                    })
                }
            </Carousel> : <View style={[size, imageWrap]}><Text>暂无图片</Text></View>
        }
      
    </View>
  );
};


const style = StyleSheet.create({
    sliderWrap: {
        height: size.height, 
        paddingLeft: 4,
    },
    imageWrap: {
        width: width - 8,
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize: 16,
        backgroundColor: '#ffffff',
        color: '#ffffff',
        flex: 1,
        borderRadius: 6,
    },
    img: {
        width: width - 8,
        flex: 1,
        borderRadius: 6,
    }
})

export default Slider;
