/**
 * Created by archerding on 16-4-20.
 */
import React, {
    Component,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

export default class Button extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#24B2EB',
        borderRadius: 5,
        borderWidth: 2
    },
    text: {
        color: '#24B2EB',
        margin: 10
    },
});