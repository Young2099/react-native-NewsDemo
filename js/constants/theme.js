'use strict';

import colors from './colors';
import {Platform,Dimensions,PixelRatio} from 'react-native';
import px2dx from '../utils/px2dp';
const favoriteColor = colors.lightBlue;

export default {
    mainThemeColor: favoriteColor,
    pageBackgroundColor: '#f4f4f4',
    screenWidth:Dimensions.get('window').width,
    screenHeight:Dimensions.get('window').height,
    touchableHighlightUnderlayColor: 'rgba(0,0,0,.6)',
    touchableOpacityActiveOpacity: 0.5,
    segment:{
        color:'#ccc',
        width:1/PixelRatio.get()
    },
    tabButton: {
        selectedColor: favoriteColor,
        normalColor: '#aaa',

    },

    toolbar: {
        height: (Platform.OS === 'android') ? px2dx(45) : px2dx(49),
        barColor: favoriteColor,
        titleColor: '#fff',
        titleSize: px2dx(20)
    }
}