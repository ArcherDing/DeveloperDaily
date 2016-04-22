/**
 * Created by archerding on 16-4-20.
 */
import React, {
    Component,
    Navigator
} from 'react-native';

import SplashScreen from './SplashScreen';

export default class AppNavigator extends Component {
    render() {
        const firstRoute = {
            name: 'SplashScreen',
            component: SplashScreen
        };

        return (
            <Navigator
                initialRoute={firstRoute}
                configureScene={route => Navigator.SceneConfigs.FloatFromLeft}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                } }
                />
        );
    }
}