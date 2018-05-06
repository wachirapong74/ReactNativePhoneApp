import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'

class HomeScreen extends React.Component {
    
    static navigationOptions = {
        title: 'Home',
    };
    
    render() {
        const { items } = this.props

        // console.log(items)
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Hello World!</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.testReducers,
    }
}

export default connect(mapStateToProps)(HomeScreen)