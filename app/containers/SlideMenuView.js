/**
 * Created by archerding on 16-4-20.
 */
import React, {
    Component,
    Image,
    ListView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import RuleScreen from './RuleScreen';
const menus = [
    {
        icon: require('./img/nav_icon_gift.png'),
        title: '礼物兑换',
        subTitle: '《21天学通HTML5+CSS3》',
        component: RuleScreen
    },
    {
        icon: require('./img/nav_icon_my_shares.png'),
        title: '我的分享',
        subTitle: '0',
        component: RuleScreen
    },
    {
        icon: require('./img/nav_icon_subscribed_subjects.png'),
        title: '我的订阅',
        subTitle: '0',
        component: RuleScreen
    },
    {
        icon: require('./img/nav_icon_favorite.png'),
        title: '我的收藏',
        subTitle: '0',
        component: RuleScreen
    },
    {
        icon: require('./img/nav_icon_create_subject.png'),
        title: '立即创建主题',
        subTitle: null,
        component: RuleScreen
    },
    {
        icon: require('./img/nav_icon_created_subjects.png'),
        title: '我创建的主题',
        subTitle: '0',
        component: RuleScreen
    },
    {
        icon: require('./img/nav_icon_feedback.png'),
        title: '意见反馈',
        subTitle: null,
        component: RuleScreen
    },
    {
        icon: require('./img/nav_icon_cooperation.png'),
        title: '合作申请',
        subTitle: null,
        component: RuleScreen
    },
    {
        icon: require('./img/nav_icon_settings.png'),
        title: '设置',
        subTitle: null,
        component: RuleScreen
    }
];

export default class SlideMenuScreen extends Component {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(menus)
        };
    }

    _renderNextScreen(route) {
        const { navigator } = this.props;
        navigator.push(route);
    }

    _renderRow(rowData, sectionID, rowID) {
        return (
            <TouchableOpacity onPress={() => this._renderNextScreen({ name: rowData.title, component: rowData.component }) }>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 0.5, borderBottomColor: '#E0E0E0' }}>
                    <Image style={{ height: 20, width: 20, margin: 15 }} source={rowData.icon } />
                    <Text style={{ flex: 1, marginLeft: 8 }}>{rowData.title}</Text>
                    <Text style={{ marginRight: 20 }}>{rowData.subTitle}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <View style={{ backgroundColor: '#24B2EB', flexDirection: 'row', height: 120, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 0.5, borderBottomColor: '#E0E0E0' }}>
                    <View style={{ borderColor: '#FFFFFF', borderRadius: 5, borderWidth: 1 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 16, margin: 5 }}>登陆/注册</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: '#24B2EB', flexDirection: 'row', height: 60, alignItems: 'center', justifyContent: 'space-around' }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ flex: 1, color: '#FFFFFF', fontSize: 12 }}>昨日收益</Text>
                        <Text style={{ flex: 1, color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>0</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ flex: 1, color: '#FFFFFF', fontSize: 12 }}>IO币总额</Text>
                        <Text style={{ flex: 1, color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' }}>0</Text>
                    </View>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this) }
                    />
            </View>
        );
    }
}