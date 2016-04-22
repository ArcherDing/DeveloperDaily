/**
 * Created by archerding on 16-4-20.
 */
import React, {
    Component,
    DrawerLayoutAndroid,
    Image,
    ListView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const MENU = require('./img/ic_menu_white_24dp.png');
const ADD = require('./img/ic_add_white_24dp.png');
const SEARCH = require('./img/ic_search_white_24dp.png');
import ImageButton from '../components/ImageButton';
import SlideMenuView from './SlideMenuView';
import ContentView from './ContentView';

export default class MainScreen extends Component {
    _renderNavigationView() {
        let {navigator} = this.props;
        return <SlideMenuView navigator={navigator} />;
    }

    _openDrawer() {
        this.refs.drawer.openDrawer();
    }

    render() {
        return (
            <DrawerLayoutAndroid
                ref='drawer'
                style={styles.container}
                drawerWidth={350}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={this._renderNavigationView.bind(this) }>
                <ContentView openDrawer={this._openDrawer.bind(this) }/>
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});