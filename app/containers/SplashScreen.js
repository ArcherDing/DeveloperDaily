/**
 * Created by archerding on 16-4-20.
 */
import React, {
    AsyncStorage,
    Component,
    Image,
    StyleSheet,
    View
} from 'react-native';

import LaunchScreen from './LaunchScreen';
import MainScreen from './MainScreen';
const FIRST_LAUNCH = "@DeveloperDaily:FirstLaunch"
const LOGO = require('./img/logo_fill_blue.png');

export default class SplashScreen extends Component {
    _gotoNextScreen(route) {
        const {navigator} = this.props;
        setTimeout(() => {
            navigator.replace(route);
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={LOGO} />
            </View>
        );
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    async _loadInitialState() {
        let value = await AsyncStorage.getItem(FIRST_LAUNCH);
        if (value != null) {
            this._gotoNextScreen({ name: 'MainScreen', component: MainScreen });
        } else {
            this._gotoNextScreen({ name: 'LaunchScreen', component: LaunchScreen });
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#24B2EB',
    },
    logo: {
        width: 96,
        height: 96,
        resizeMode: 'cover'
    },
});