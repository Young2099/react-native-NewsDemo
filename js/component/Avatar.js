/**
 * Created by panguso on 2016/12/17.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Avatar extends Component {
    //初始化所需要的一些参数，我认为跟在java里面定义成员变量的类型一样
    static propTypes = {
        icon: PropTypes.string,
        width: PropTypes.number,
        backgroundColor: PropTypes.string,
        text: PropTypes.string,
        textSize: PropTypes.number,

    };
    //这是在初始化的时候定义一些特定需要的参数的值
    static defaultProps = {
        width: 40,
        backgroundColor: 'skyblue',
        textSize: 15
    };

    render() {
        const {icon, width, backgroundColor, text, textSize} = this.props;
        if (icon) {
            return (
                <View
                    style={[{
                        width: width,
                        height: width,
                        borderRadius: width / 2
                        , backgroundColor: backgroundColor
                    }, styles.cell]}>
                    <Icon name={icon} color="#fff" size={width / 2}/>

                </View>

            );
        } else if (text) {
            return (
                <View
                    style={[{
                        width: width,
                        height: width,
                        borderRadius: width / 2,
                        backgroundColor: backgroundColor
                    }, styles.cell]}>
                    <Text style={{color: '#fff', fontSize: textSize}}>{text}</Text>

                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    cell: {
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
        shadowColor: 'rgb(0,0,0)',
        shadowOffset: {height: 5, width: 1},
        shadowOpacity: 0.25,
        shadowRadius: 3
    }

});
