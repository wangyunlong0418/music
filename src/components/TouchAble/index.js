import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

const TouchAble = ({ children, onPress }) => {
    return <TouchableWithoutFeedback onPress={onPress}>{children}</TouchableWithoutFeedback>

}