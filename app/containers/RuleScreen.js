/**
 * Created by archerding on 16-4-20.
 */
import React, {
    Component,
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class RuleScreen extends Component {
    constructor(props) {
        super(props);
        let {navigator} = props;

    }

    render() {
        return (
            <View style={styles.container}>
                <Text> This is Rule Screen. </Text>
            </View>
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