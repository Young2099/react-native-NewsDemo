/**
 * Created by panguso on 2016/12/12.
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions/RequestDatas'
import {
    View,
    StyleSheet,
    ScrollView,
    Image,
    Text,
    TouchableHighlight,
    RefreshControl
} from 'react-native';
import NavigationBar from '../../component/NavigationBar';
import theme from '../../constants/theme';
import getDate from '../../utils/getCurrentDate';
import  * as Info from '../../utils/handleDataSource';
import SimpleList from '../../component/SimpleListView';
import px2dp from '../../utils/px2dp';
class HomeFragment extends Component {
    constructor(props) {
        super(props);
        this.state = {opacity: 0,};
        this.imageHeight = px2dp(400);
    }

    render() {
        const dataSource = this.props.dataSource;
        return (
            <View style={styles.container}>
                <View style={[styles.toolbar, {opacity: this.state.opacity}]}>
                    <NavigationBar title="今日Gank" rightBtnIcon='calendar'
                                   rightBtnPress={this._onPress.bind(this, 0)}/></View>
                <ScrollView scrollEnabled={this.state.scrollEnabled} onScroll={this._onScroll.bind(this)}
                            refreshControl={
                                <RefreshControl refreshing={this.props.loading}
                                                onRefresh={this._onPress.bind(this, 0)}/>}>
                    {this.props.hasData ?
                        <View style={{height: this.imageHeight, width: theme.screenWidth}}>
                            {this.props.loading ? <Text>loading</Text> :
                                <View>
                                    <View style={{height: this.imageHeight, width: theme.screenWidth}}>
                                        <ImageView
                                            imgUrl={Info.getFuLiUrl(dataSource)}
                                            labelTime={getDate()}
                                        />
                                    </View>
                                    <View style={styles.scrollContents}>
                                        {Info.getCategoryList(dataSource).map((item, i) => {
                                            if (item !== '福利')
                                                return <SimpleList key={i}
                                                                   dataSource={Info.getTargetList(dataSource, item)}
                                                                   headerTitle={item}/>
                                        })}
                                    </View>
                                    <View style={styles.footer}>
                                        <TouchableOpacity
                                            onPress={this._onPress.bind(this, 1)}
                                            activeOpacity={theme.touchableOpacityActiveOpacity}
                                        >
                                            <View style={styles.bottomBtn}>
                                                <Text style={styles.btnLabel}>没看够？试试往期干货吧</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }</View>
                        :
                        null
                    }
                </ScrollView>
            </View>
        );
    }

    componentDidMount() {
        this.props.actions.fetchData(getDate());
    }

    _onPress(id) {
        if (id === 0)
            this.props.actions.fetchData(getDate());
        else if (id === 1);
    }


    //滑动的动作
    _onScroll(event) {
        //y轴方向移动的距离
        var offsetY = event.nativeEvent.contentOffset.y;
        if (offsetY <= this.imageHeight - theme.toolbar.height);
        var opacity = offsetY / (this.imageHeight - theme.toolbar.height);
        this.setState({opacity: opacity});
    }

}

class ImageView extends Component {
    static propTypes = {
        imgUrl: PropTypes.string,
        labelTime: PropTypes.string
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.imgUrl}} style={styles.img}>

                    <View style={styles.dateLabel}>
                        <Text style={styles.label}>{this.props.labelTime}</Text>
                    </View>
                </Image>

            </View>
        )
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
        zIndex: 1,
        // elevation: 8 //通过使用Android特定的elevation属性实现了视图阴影。但只能在Android 5.0+上使用。
    },

    dateLabel: {
        backgroundColor: 'rgba(0,0,0,.5)',
        position: 'relative',
        width: theme.screenWidth,
        height: px2dp(50),
        bottom: px2dp(50),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    footer: {
        width: theme.screenWidth,
        height: px2dp(70),
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    scrollContents: {
        height: theme.screenHeight,
    },

    bottomBtn: {
        backgroundColor: theme.mainThemeColor,
        width: theme.screenWidth * 0.8,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    btnLabel: {
        color: '#fff',
        fontSize: 16
    }
});
const mapStateToProps = (state) => {
    return {
        dataSource: state.data.dataSource,
        loading: state.data.loading,
        hasData: state.data.hasData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFragment);