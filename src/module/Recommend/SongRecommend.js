import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import {useRecommendStore} from '../../utils';

const { width } = Dimensions.get('window');

const SongRecommend = observer(() => {
    const recommendStore = useRecommendStore();
    const { personalized, getPersonalizeList} = recommendStore;
    const { songRecommendWrap, title, songRecommendList } = style;

    useEffect(() => {
        getPersonalizeList();
    }, [getPersonalizeList])

    return (
        <View style={songRecommendWrap, { height: 400 }}>
            <Text style={title}>推荐歌单</Text>
            <ScrollView>
                <View style={songRecommendList}>
                    {
                        personalized.map((detail, index) => {
                            return <SongRecommendItem detail={detail} key={index}  />
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
})

const SongRecommendItem = ({ detail = {} }) => {
    const { itemBox, nameBox, imgWrap, itemImg } = style;
    
    const [recommendDetail, setRecommendDetail] = useState({})

    useEffect(() => {
         const updateDetail = () => {
            setRecommendDetail(detail)
         }

         updateDetail()
        
    }, [detail])
    const { name, number, picUrl } = recommendDetail;

    return (
        <View style={itemBox}>
            <Image style={itemImg} source={{ uri: picUrl }}></Image>
            <Text style={nameBox}>{name}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    songRecommendWrap: {
        backgroundColor: 'rgb(238, 240, 241)'
    },
    title: {
        paddingLeft: 6,
        fontSize: 16,
        color: '#333333',
        fontWeight: '700',
        lineHeight: 60,
    },

    songRecommendList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },

    itemBox: {
        width: width * 0.32
    },

    imgWrap: {
        position: 'relative',  
    },

    itemImg: {
        width: '100%',
        height: width * 0.32,                                 
        borderRadius: 4,
    },

    nameBox: {
        marginTop: 4,
        paddingLeft: 2,
        paddingRight: 2,
        height: 50,
        fontSize: 14,
        lineHeight: 18,
    }
})

export default SongRecommend;