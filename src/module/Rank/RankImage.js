import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';

const RankImage = ({imgUrl}) => {
  const [uri, setUri] = useState('');

  useEffect(() => {
    setUri(imgUrl);

    return () => {
      setUri('');
    };
  }, [imgUrl]);
  console.log(uri);
  return (
    <View>
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri:
            'https://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg',
        }}
      />
    </View>
  );
};

export default RankImage;
