/**
 * Created by archerding on 16-4-20.
 */
import React, {
    Component,
    Image,
    StyleSheet,
    View
} from 'react-native';

import LaunchScreen from './LaunchScreen';
import MainScreen from './MainScreen';

const LOGO = require('./img/logo_fill_blue.png');

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        let {navigator} = props;

        setTimeout(() => {
            navigator.replace({ name: 'LaunchScreen', component: LaunchScreen });
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={LOGO} />
            </View>
        );
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