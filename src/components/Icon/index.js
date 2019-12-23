import React, {useState, useEffect} from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';

const Icon = ({code, color, size = 12, onPress}) => {
  const [iconCode, setIconCode] = useState('');
  const [iconColor, setIconColor] = useState('');
  const [iconSize, setIconSize] = useState('');

  useEffect(() => {
    const updateCode = () => {
      setIconCode(code);
    };

    const updateColor = () => {
      setIconColor(color);
    };

    const updateSize = () => {
      setIconSize(size ? size : 12);
    };

    updateCode();
    updateColor();
    updateSize();
  }, [code, color, size]);

  const style = {
    fontFamily: 'iconfont',
    fontSize: 18,
    color: iconColor,
  };

  if (onPress) {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Text style={style}>{iconCode}</Text>
      </TouchableWithoutFeedback>
    );
  }

  return <Text style={style}>{iconCode}</Text>;
};

export default Icon;
