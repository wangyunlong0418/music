import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const HotSong = ({songList = []}) => {
  const {
    hotSongWrap,
    hotSongHeadWrap,
    playIcon,
    headTitle,
    itemWrap,
    indexWrap,
    singerNameWrap,
    songDetailWrap,
    songName,
    singerNameText,
  } = style;
  const [hotSongs, setHotSongs] = useState([]);

  useEffect(() => {
    const updateHotSong = () => {
      setHotSongs(songList);
    };

    updateHotSong();
  }, [songList]);

  console.log(hotSongs);

  return (
    <View style={hotSongWrap}>
      <ScrollView>
        <View style={hotSongHeadWrap}>
          <Text style={playIcon}>&#xe80f;</Text>
          <Text style={headTitle}>播放全部</Text>
        </View>
        {hotSongs.map(({name, ar = [], al = {}}, index) => {
          return (
            <View style={itemWrap} key={index}>
              <View style={indexWrap}>
                <Text>{index + 1}</Text>
              </View>
              <View style={songDetailWrap}>
                <Text style={songName}>{name}</Text>
                <View style={singerNameWrap}>
                  {/* eslint-disable */}
                  {ar.map(({name: singerName}, i) => {
                      return <Text style={singerNameText} key={i}>{singerName}</Text>
                    })
                  }
                  <Text style={singerNameText}> - </Text>
                  <Text style={singerNameText}>{al.name}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  hotSongWrap: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  hotSongHeadWrap: {
    marginLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
  },
  playIcon: {
    fontSize: 24,
    fontFamily: 'iconfont',
    color: '#2E3030',
  },
  headTitle: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#2E3030',
  },
  itemWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indexWrap: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
  },
  songDetailWrap: {
    flex: 1,
    height: 60,
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 5,
    borderStyle: 'solid',
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
  },
  songName: {
    fontSize: 16,
    color: '#2E3030',
  },
  singerNameWrap: {
    flexDirection: 'row',
  },
  singerNameText: {
    fontSize: 12,
    color: '#bba8a8',
  },
});

export default HotSong;
