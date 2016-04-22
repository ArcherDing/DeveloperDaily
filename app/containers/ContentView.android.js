/**
 * Created by archerding on 16-4-20.
 */
import React, {
    Component,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewPagerAndroid
} from 'react-native';

const MENU = require('./img/ic_menu_white_24dp.png');
const ADD = require('./img/ic_add_white_24dp.png');
const SEARCH = require('./img/ic_search_white_24dp.png');
import ImageButton from '../components/ImageButton';

export default class ContentView extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.nav}>
                    <ImageButton onPress={this.props.openDrawer}source={MENU} />
                    <Text style={[{ flex: 1 }, styles.text]}>开发者头条</Text>
                    <ImageButton source={ADD}/>
                    <ImageButton source={SEARCH}/>
                </View>
                <View style={styles.tabs}>
                    <View style={styles.tab} >
                        <Text style={styles.text}>精选</Text>
                    </View>
                    <View style={[styles.tab, { borderBottomColor: '#FFFFFF', borderBottomWidth: 1, }]} >
                        <Text style={styles.text}>订阅</Text>
                    </View>
                    <View style={styles.tab} >
                        <Text style={styles.text}>发现</Text>
                    </View>
                </View>
                <ViewPagerAndroid
                    style={styles.viewPager}
                    initialPage={0} >
                    <View>
                        <View style={{ height: 200 }}>
                            <ViewPagerAndroid
                                style={{ height: 200 }}
                                initialPage={0} >
                                <View style={{ backgroundColor: '#F00' }}>
                                    <Text>11</Text>
                                </View>
                                <View style={{ backgroundColor: '#0F0' }}>
                                    <Text>22</Text>
                                </View>
                                <View style={{ backgroundColor: '#00F' }}>
                                    <Text>33</Text>
                                </View>
                            </ViewPagerAndroid>
                            <View style={styles.indicators}>
                                <View style={styles.indicator}></View>
                                <View style={styles.indicator}></View>
                                <View style={styles.indicator}></View>
                            </View>
                        </View>
                        <Text>1</Text>
                    </View>
                    <View>
                        <Text>2</Text>
                    </View>
                    <View>
                        <Text>3</Text>
                    </View>
                </ViewPagerAndroid>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nav: {
        backgroundColor: '#24B2EB',
        flexDirection: 'row',
        height: 50,
        alignItems: 'center'
    },
    tabs: {
        backgroundColor: '#24B2EB',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tab: {
        flex: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 18
    },
    viewPager: {
        flex: 1,
        backgroundColor: '#FEFEFE'
    },
    indicators: {
        justifyContent: 'center',
        position: 'absolute',
        flexDirection: 'row',
        bottom: 0,
        left: 0,
        right: 0
    },
    indicator: {
        backgroundColor: '#24B2EB',
        width: 20,
        height: 3,
        margin: 2
    }
});