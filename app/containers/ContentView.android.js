/**
 * Created by archerding on 16-4-20.
 */
import React, {
    Component,
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const MENU = require('./img/ic_menu_white_24dp.png');
const ADD = require('./img/ic_add_white_24dp.png');
const SEARCH = require('./img/ic_search_white_24dp.png');
import ImageButton from '../components/ImageButton';

export default class ContentView extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#24B2EB', flexDirection: 'row', height: 50, alignItems: 'center', }}>
                    <ImageButton onPress={this.props.openDrawer}source={MENU} />
                    <Text style={{ flex: 1, color: '#FFFFFF', fontSize: 18 }}>开发者头条</Text>
                    <ImageButton source={ADD}/>
                    <ImageButton source={SEARCH}/>
                </View>
            </View>
        );
    }
}