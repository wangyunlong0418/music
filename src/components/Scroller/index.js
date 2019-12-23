import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const { width } = Dimensions.get('window');

const Scroller = ({ title, scrollList = [], onChoose }) => {
    const { scrollerBox, titleBox, nameBox, active } = style;
    const [ items, setItems ] = useState([]);
    const [ activeIndex, setActiveIndex ] = useState(-1);

    useEffect(() => {
        setItems(scrollList);

    }, [scrollList])

    const updateActiveIndex = (index) => {
        setActiveIndex(index);

        if (onChoose && typeof onChoose === 'function') {
            onChoose(items[index].key);
        }
    }

    return (
        <View style={scrollerBox}>
            <ScrollView horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <Text style={titleBox}>{title}</Text>
                {
                    items.map(({ name }, index) => {
                        return (
                            <TouchableWithoutFeedback
                                onPress={() => { updateActiveIndex(index) }}
                                key={index}
                            >
                                <Text style={[nameBox, activeIndex === index ? active: {} ]}>{ name }</Text>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    scrollerBox: {
        marginTop: 8,
        width: width
    },
    titleBox: {
      marginRight: 8,
      paddingTop: 5,
      paddingBottom: 5,
      fontSize: 14,
      color: 'grey',
    },
    nameBox: {
      minWidth: 50,
      fontSize: 14,
      padding: 5,
      borderRadius: 8,
      textAlign: 'center'
    },
    active: {
      color: '#d44439',
      borderColor: '#d44439',
      borderStyle: 'solid',
      borderWidth: 1,
    }
})

export default Scroller;
