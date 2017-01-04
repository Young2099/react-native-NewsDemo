/**
 * Created by panguso on 2016/12/13.
 * 这应该是类似android里面自定义view，而这里是为了定制一个按钮点击响应的方法
 */
import React, {Component} from 'react';
import {BackAndroid} from 'react-native';

export default class BackPageComponent extends Component {

    constructor(props) {
        super(props);
        this.handleBack = this._handleBack.bind(this);
    }

    /**
     * 组件的生命周期
     */
    componentDidMount() {
        BackAndroid.addEventListener('handleBackPress', this.handleBack);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('handleBacKPress', this.handleBack);
    }

    _handleBack() {
        const navigator = this.props.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    }
}