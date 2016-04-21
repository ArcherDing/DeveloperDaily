/**
 * Created by archerding on 16-4-20.
 */
import React, {
    AsyncStorage,
    Component,
    Image,
    StyleSheet,
    Text,
    View,
    ViewPagerAndroid
} from 'react-native';

import Button from '../components/Button';
import PageIndicator from '../components/PageIndicator';
import MainScreen from './MainScreen';
import RuleScreen from './RuleScreen';
const FIRST_LAUNCH = "@DeveloperDaily:FirstLaunch"
const IMAGE_1 = require('./img/tutorial_1.png');
const IMAGE_2 = require('./img/tutorial_2.png');
const IMAGE_3 = require('./img/tutorial_3.png');
const IMAGE_4 = require('./img/tutorial_4.png');
export default class LaunchScreen extends Component {
    constructor(props) {
        super(props);
    }

    _openMainScreen() {
        this._gotoNextScreen({ name: 'MainScreen', component: MainScreen });
    }

    _openRuleScreen() {
        this._gotoNextScreen({ name: 'RuleScreen', component: RuleScreen });
    }

    _gotoNextScreen(route) {
        const { navigator } = this.props;
        navigator.replace(route);
    }

    componentDidMount() {
        this._saveValue().done();
    }


    async _saveValue() {
        await AsyncStorage.setItem(FIRST_LAUNCH, 'true');
    }

    _renderFinish() {
        return (
            <View style={styles.finish}>
                <Button text='开启我的头条' onPress={this._openMainScreen.bind(this) }/>
                <Text style={styles.text}  onPress={this._openRuleScreen.bind(this) } >查看IO币规则</Text>
            </View >
        );
    }

    _renderPager(image, showFinish = false) {
        return (
            <View style={styles.pageStyle}>
                <Image  style={styles.backgroundImage} source={image}/>
                {showFinish ? this._renderFinish() : null}
            </View>
        );
    }

    _onPageSelected(e) {
        this.indicators.setSelectedIndex(e.nativeEvent.position);
    }

    render() {
        return (
            <View style={styles.container}>
                <ViewPagerAndroid
                    style={styles.viewPager}
                    initialPage={0}
                    onPageSelected={this._onPageSelected.bind(this) }
                    >
                    {this._renderPager(IMAGE_1) }
                    {this._renderPager(IMAGE_2) }
                    {this._renderPager(IMAGE_3) }
                    {this._renderPager(IMAGE_4, true) }
                </ViewPagerAndroid>
                <PageIndicator
                    ref={ref => { this.indicators = ref; } }
                    count={4}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEF2E2',
    },
    viewPager: {
        flex: 1,
    },
    pageStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        width: 180,
        height: 240,
        resizeMode: 'stretch'
    },
    finish: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    text: {
        color: '#24B2EB',
        margin: 10
    },
});