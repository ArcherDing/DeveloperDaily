/**
 * Created by archerding on 16-4-20.
 */
import React, {
    Component,
    Image,
    StyleSheet,
    Text,
    View,
    ViewPagerAndroid
} from 'react-native';

import PageIndicator from '../components/PageIndicator';

const IMAGE_1 = require('./img/tutorial_1.png');
const IMAGE_2 = require('./img/tutorial_2.png');
const IMAGE_3 = require('./img/tutorial_3.png');
const IMAGE_4 = require('./img/tutorial_4.png');
export default class LaunchScreen extends Component {
    constructor(props) {
        super(props);
        //let {navigator} = props;

    }

    _renderPager(image) {
        return (
            <View style={styles.pageStyle}>
                <Image  style={styles.backgroundImage} source={image}/>

            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ViewPagerAndroid
                    style={styles.viewPager}
                    initialPage={0}
                    onPageSelected={e => { this.indicators.setSelected(e.nativeEvent.position); } }
                    >
                    {this._renderPager(IMAGE_1) }
                    {this._renderPager(IMAGE_2) }
                    {this._renderPager(IMAGE_3) }
                    {this._renderPager(IMAGE_4) }
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
});