/**
 * Created by panguso on 2016/12/12.
 */

import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Image, Text} from 'react-native';
import NavigationBar from '../../component/NavigationBar';
import theme from '../../constants/theme'
export default class HomeFragment extends Component {
    constructor(props) {
        super(props);
        this.state = {opacity: 0,};
        this.imageHeight = 300;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.toolbar, {opacity: this.state.opacity}]}>
                    <NavigationBar title="今日Gank"/></View>
                <ScrollView onScroll={this._onScroll.bind(this)}>
                    <Image source={require('../../assets/a.jpeg')}
                           resizeMode="cover" style={{height: this.imageHeight, width: theme.screenWidth}}/>
                    <View style={styles.scrollContents}></View>
                    <Text>dsds</Text>
                </ScrollView>
            </View>
        );
    }

    //滑动的动作
    _onScroll(event) {
        //y轴方向移动的距离
        var offsetY = event.nativeEvent.contentOffset.y;
        if(offsetY<= this.imageHeight -theme.toolbar.height);
        var opacity = offsetY / (this.imageHeight - theme.toolbar.height);
        this.setState({opacity:opacity});
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    toolbar: {
        position: 'absolute',
        width: theme.screenWidth,
        left: 0,
        top: 0,
        zIndex:1,
        // elevation: 8 //通过使用Android特定的elevation属性实现了视图阴影。但只能在Android 5.0+上使用。
    },
    scrollContents: {
        height: theme.screenHeight,
    }
});