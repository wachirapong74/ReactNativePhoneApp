import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    };
    
    render() {

        const list = [
            {
                name: 'Sign in',
                subtitle: '',
                handleOnPress: () => this.props.navigation.navigate('SignIn'),
            },
            {
                name: 'Term and Conditions',
                subtitle: '',
                handleOnPress: () => this.props.navigation.navigate('Home'),
            },
        ]

        return (
            <ScrollView keyboardShouldPersistTaps={'handled'} style={styles.container}>
                {
                    list.map((l, i) => (
                        <ListItem
                            key={i}
                            title={l.name}
                            // subtitle={l.subtitle}
                            onPress={l.handleOnPress}
                        />
                    ))
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        // paddingLeft: 15,
        // paddingRight: 15,
    },
});