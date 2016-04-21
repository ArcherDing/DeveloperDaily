/**
 * Created by archerding on 16-4-20.
 */
import React, {
    Component,
    View
} from 'react-native';

export default class PageIndicator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: this.props.initialPage,
        };
    }

    setSelectedIndex(index) {
        this.setState({ selectedIndex: index });
    }

    render() {
        let indicators = [];
        for (let i = 0; i < this.props.count; i++) {
            let indicatorStyle = {
                backgroundColor: i === this.state.selectedIndex ? this.props.selectedColor : this.props.unselectedColor,
                width: 20,
                height: 3,
                margin: 2
            };
            indicators.push(<View key={i} style={indicatorStyle}/>);
        }
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                {indicators}
            </View>
        );
    }
}

PageIndicator.defaultProps = {
    initialPage: 0,
    selectedColor: '#24B2EB',
    unselectedColor: '#9E9E9E'
};