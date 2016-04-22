/**
 * Created by archerding on 16-4-20.
 */
import React, {
    Component,
    Image,
    TouchableOpacity
} from 'react-native';

export default class ImageButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={this.props.style}>
                <Image style={{ height: 24, width: 24, margin: 10 }} source={this.props.source}/>
            </TouchableOpacity>
        );
    }
}