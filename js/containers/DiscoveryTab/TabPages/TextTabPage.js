/**
 * Created by panguso on 2016/12/12.
 */
'use strict';

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import theme from '../../../constants/theme';

export default class TextTabPage extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: theme.pageBackgroundColor}}>
                <Text>文本</Text>
            </View>
        );
    }
}
