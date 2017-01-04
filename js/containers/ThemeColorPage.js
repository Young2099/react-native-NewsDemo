/**
 * Created by panguso on 2016/12/13.
 */
'use strict';

import React, {Component} from 'react';
import {View} from 'react-native';
import NavigatorBar from '../component/NavigationBar';
import BackPageComponent from './BackPageComponent';

export default class ThemeColorPage extends BackPageComponent {
    render() {
        return (
            <View>
                <NavigatorBar title="主题" isBackBtnOnLeft={true}
                              leftBtnIcon="arrow-back" leftBtnPress={this._handleBack.bind(this)}/>
            </View>
        );
    }


}