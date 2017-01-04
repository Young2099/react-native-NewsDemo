/**
 * Created by panguso on 2016/12/12.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, ScrollView,StyleSheet} from 'react-native';
import theme from '../../constants/theme';
import NavigatorBar from '../../component/NavigationBar';
import RowItem from '../../component/SimpleRowItem';
import ThemeColorPage from '../ThemeColorPage';
import px2dp from '../../utils/px2dp';
export default class MoreFragment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigatorBar title="更多"/>
                <ScrollView >
                    <View style={[styles.block,styles.intro]}>
                    </View>
                    <View style={styles.block}>
                        <RowItem title="首页内容展示顺序" icon="md-reorder" onPress={this._itemClickCallBack.bind(this)}/>
                        <RowItem title="自定义主题" icon="md-brush" onPress={this._itemClickCallBack.bind(this)}/>
                        <RowItem title="选择语言/language" icon="md-globe" onPress={this._itemClickCallBack.bind(this)}/>
                    </View>
                    <View style={styles.block}>
                        <RowItem title="关于作者" icon="md-happy"
                                 renderSegment={false} onPress={this._itemClickCallBack.bind(this)}
                        />
                    </View>
                    <View style={styles.block}>
                        <RowItem title="关于Demo" icon="md-aperture"
                                 renderSegment={false} onPress={this._itemClickCallBack.bind(this)}/>
                        <RowItem title="反馈" icon="md-text"
                                 renderSegment={false} onPress={this._itemClickCallBack.bind(this)}/>
                        <RowItem title="分享" icon="md-share"
                                 renderSegment={false} onPress={this._itemClickCallBack.bind(this)}/>
                    </View>
                </ScrollView>
            </View>
        );
    }

    _itemClickCallBack() {
        this.props.navigator.push({component: ThemeColorPage});
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:theme.pageBackgroundColor
    },
    intro:{
        height:100,
        marginTop:px2dp(18),
        backgroundColor:'#fff'
    },
    block:{
        marginTop:px2dp(12),
        borderBottomColor:theme.segment.color,
        borderBottomWidth:theme.segment.width,
        borderTopColor:theme.segment.color,
        borderTopWidth: theme.segment.width
    }
});
