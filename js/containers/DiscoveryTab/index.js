/**
 * Created by panguso on 2016/12/12.
 */
'use strict';
import React, {Component} from 'react';

import {Text, View, ScrollView, StyleSheet, Platform, TouchableNativeFeedback, TouchableHighlight} from 'react-native';
import px2dp from '../../utils/px2dp';
import NavigatorBar from '../../component/NavigationBar';
import Avatar from '../../component/Avatar';
import theme from '../../constants/theme';
import ImageTabPage from './TabPages/ImageTabPage';
import TextTabPage from './TabPages/TextTabPage';
import VideoTabPage from './TabPages/VideoTabPage';
export default class DiscoveryFragment extends Component {
    constructor(props) {
        super(props);
        this.tabNames = [['Android', 'iOS', '前端'], ['福利', '休息视频', '扩展阅读']];
        this.tabIcon = [['logo-android', 'logo-apple', 'logo-chrome'], ['ios-images', 'ios-film', 'ios-book']];
        this.tabColor = [['rgb(141,192,89)', '#000', 'rgb(51,154,237)'], ['rgb(249,89,58)', 'rgb(154,53,172)', 'rgb(65,87,175)']];

    }

    render() {
        return (
            // //可以滚动的ScrollableTabView..
            // <ScrollableTabView//类似android的TabBar
            //     initialPage={0}
            //     renderTabBar={() => <ScrollableTabBar/>}//所设置的渲染tabBar的组件
            //     tabBarUnderlineStyle={{backgroundColor: '#fff'}}
            //     tabBarBackgroundColor={theme.mainThemeColor}
            //     tabBarTextStyle={{color: '#fff'}}>
            //     <ImageTabPage tabLabel={this.tabNames[0]}/>
            //     <TextTabPage tabLabel={this.tabNames[1]}/>
            //     <TextTabPage tabLabel={this.tabNames[2]}/>
            //     <VideoTabPage tabLabel={this.tabNames[3]}/>
            //     <TextTabPage tabLabel={this.tabNames[4]}/>
            //     <TextTabPage tabLabel={this.tabNames[5]}/>
            // </ScrollableTabView>
            <View style={styles.container}>
                <NavigatorBar title="发现"/>
                <ScrollView>
                    <View style={styles.btnPanel}>
                        {this.tabNames.map((item, i) => {
                            return (
                                <View style={styles.btnRow} key={i}>
                                    {this.tabNames[i].map((subItem, index) => {
                                        return (
                                            <View style={styles.btnCell} key={i + index}>
                                                {Platform.OS === 'android' ?
                                                    <TouchableNativeFeedback
                                                        onPress={this._itemPressCallBack.bind(this, i + index, subItem)}
                                                        background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.2)', true)}>
                                                        {this.__renderBtnContent(i, index)}
                                                    </TouchableNativeFeedback> :
                                                    <TouchableHighlight
                                                        onPress={this._itemPressCallBack.bind(this, i + index, subItem)}
                                                        underlayColor={theme.touchableHighlightUnderlayColor}>
                                                        {this.__renderBtnContent(i, index)}
                                                    </TouchableHighlight>}

                                                <Text style={styles.label}>{subItem}</Text>
                                            </View>
                                        );
                                    })}
                                </View>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }

    //跳转对应的Fragment的函数
    _itemPressCallBack() {
        switch (id) {
            case 3:  //福利Page
                this._pushScene(ImageTabPage, title);
                break;
            case 4: //视频Page
                this._pushScene(VideoTabPage, title);
                break;
            default:
                this._pushScene(TextTabPage, title);
                break;
        }
    }

    _pushScene(component, title) {
        this.props.navigator.push({
            component: component,
            args: {title: title}
        })
    }

    __renderBtnContent(i, index) {
        return (
            <View style={{width: 100, height: 100, alignItems: 'center', justifyContent: 'center'}}>
                <Avatar icon={this.tabIcon[i][index]} width={70} backgroundColor={this.tabColor[i][index]}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor,
    },
    btnPanel: {
        backgroundColor: '#fff',
        height: px2dp(260),
        width: theme.screenWidth,
        marginTop: px2dp(12),
        borderBottomColor: theme.segment.color,
        borderBottomWidth: theme.segment.width,
        borderTopColor: theme.segment.color,
        borderTopWidth: theme.segment.width,
        padding: px2dp(10),
        paddingTop: px2dp(20)
    },
    btnCell: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    label: {
        marginTop: px2dp(-5),
        color: "#000"
    }
});