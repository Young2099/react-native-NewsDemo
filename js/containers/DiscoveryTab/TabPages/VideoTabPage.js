/**
 * Created by panguso on 2016/12/12.
 */
'use strict';

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import theme from '../../../constants/theme';
import NavigationBar from '../../../component/NavigationBar';
export default class VideoTabPage extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: theme.pageBackgroundColor}}>
                <NavigationBar title={this.props.title} isBackBtnOnLeft={true}
                               leftBtnIcon="arrow-back" leftBtnPress={this._handleBack.bind(this)}
                />


            </View>
        );
    }
}
