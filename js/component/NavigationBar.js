/**
 * Created by panguso on 2016/12/12.
 */

import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, Platform, TouchableNativeFeedback} from 'react-native';
import theme from '../constants/theme';
import px2dp from '../utils/px2dp';
import Icon from 'react-native-vector-icons/Ionicons';
//顶部的按钮框
export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        title: PropTypes.string.isRequired,//必要的参数
        leftBtnIcon: PropTypes.string,//bar左边的Image
        leftBtnPress: PropTypes.func,//左边点击事件的响应函数
        rightBtnIcon: PropTypes.string,//右边点击的Image
        rightBtnPress: PropTypes.func,
        isBackBtnOnLeft: PropTypes.bool//这个是点击事件的确定
    };
    static defaultProps = {
        isBackBtnOnLeft: false//默认返回的是false
    };

    render() {
        const {
            title, leftBtnIcon, leftBtnPress, rightBtnIcon,
            rightBtnPress, isBackBtnOnLeft
        }= this.props;//渲染的时候拿到初始时候的参数
        return (
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    <View style={styles.fixedCell}>
                        {leftBtnIcon ? <IconButton icon={leftBtnIcon} onPress={leftBtnPress}
                                                   isBackBtnOnLeft={isBackBtnOnLeft}/> : null}
                    </View>
                    <View style={styles.centerCell}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.fixedCell}>
                        {rightBtnIcon ? <IconButton icon={rightBtnIcon} onPress={rightBtnPress}
                                                    isBackBtnOnLeft={isBackBtnOnLeft}/> : null}
                    </View>
                </View>
            </View>
        );
    }

}
//自定的组件按钮
class IconButton extends Component {
    static propTypes = {
        icon: PropTypes.string.isRequired,
        onPress: PropTypes.func,
        isBackBtnOnLeft: PropTypes.bool
    }

    render() {
        if (Platform.OS === 'android') {
            const icon = 'md-' + this.props.icon;
            return (
                /*android平台表示组件触摸之后又点击反馈的效果*/
                <TouchableNativeFeedback
                    onPress={this.props.onPress}
                >
                    <View style={styles.backBtn}>
                        <Icon name={icon} color="#fff" size={23}/>
                    </View>

                </TouchableNativeFeedback>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        height: theme.toolbar.height + px2dp(4),
        width: theme.screenWidth
    },
    backBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: theme.toolbar.height,
        height: Platform.OS === 'android' ? theme.toolbar.height :
        theme.toolbar.height - px2dp(6),
    },
    toolbar: {
        height: theme.toolbar.height,
        backgroundColor: theme.toolbar.barColor,
        flexDirection: 'row',
        paddingTop: Platform.OS === 'android' ? 0 : px2dp(6),
        elevation: 3,
        shadowColor: 'rgb(0,0,0)',
        shadowOffset: {height: 2, width: 1},
        shadowOpacity: 0.25,
        shadowRadius: 3,

    },
    fixedCell: {
        width: theme.toolbar.height,
        height: theme.toolbar.height,
        flexDirection: 'row'
    },
    centerCell: {
        flex: 1,
        height: theme.toolbar.height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: theme.toolbar.titleSize,
        color: theme.toolbar.titleColor,
    }
});