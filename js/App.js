/**
 * Created by panguso on 2016/12/12.
 */
'use strict';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import {store} from './store/index';
import {Navigator} from 'react-native';
import MainPage from './containers/MainPage';
export default class App extends Component {
    render() {
        return (
            //这Provider有待研究，大概是为了更新其状态
            <Provider store={store}>
                <Navigator
                    //必要的方法，初始化所需要渲染的组件，（路由是导航栏用来识别渲染场景的一个对象）
                    initialRoute={{component: MainPage}}
                    //这是必要参数。用来渲染指定路由的场景。调用的参数是路由和导航器。
                    renderScene={(route, navigator) => <route.component{...route.args} navigator={navigator}
                    />}
                />
            </Provider>
        );
    }
}