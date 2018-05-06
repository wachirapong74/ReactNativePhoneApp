import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'


export default class TermScreen extends React.Component {

    static navigationOptions = {
        // title: 'Term and Conditions',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Term and Conditions</Text>
                
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15,
    },
});