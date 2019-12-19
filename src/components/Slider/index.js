import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })

const Slider = ({banners = []}) => {
    const [sliderSwiper, setSliderSwiper] = useState(null);
    useEffect(() => {
       
    })
    return (
        <Swiper style={styles.wrapper} showsButtons={true}>
            <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
            </View>
        </Swiper>
    )
}

export default Slider;