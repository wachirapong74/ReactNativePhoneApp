import React from 'react';
import { StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
    AsyncStorage
} from 'react-native';

import { ListItem } from 'react-native-elements';

export default class SettingsScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            settings: [
                {
                    name: 'Sign in',
                    subtitle: '',
                    handleOnPress: () => this.props.navigation.navigate('SignIn'),
                },
                {
                    name: 'Term and Conditions',
                    subtitle: '',
                    handleOnPress: () => this.props.navigation.navigate('Term'),
                },
            ]
        }
    }
    
    static navigationOptions = {
        title: 'Settings',
    };

    componentDidMount() {
        this.getKey()
    }

    async getKey() {
        try {            
            const token = await AsyncStorage.getItem('user-token');

            console.log('token from getkey: ', token)

            if (token != null) {   
                this.setState({
                    settings: [
                        {
                            name: 'Sign Out',
                            subtitle: '',
                            handleOnPress: () => this.resetKey(),
                        },
                        {
                            name: 'Term and Conditions',
                            subtitle: '',
                            handleOnPress: () => this.props.navigation.navigate('Term'),
                        },
                    ]
                });
            }

        } catch (error) {
            return null
            console.log("Error retrieving data" + error);
        }
    }

    async resetKey() {
        try {
            await AsyncStorage.removeItem('user-token');
            this.props.navigation.navigate('SignIn')
        } catch (error) {
            console.log("Error resetting data" + error);
        }
    }
    
    render() {
        return (
            <ScrollView keyboardShouldPersistTaps={'handled'} style={styles.container}>
                {
                    this.state.settings.map((l, i) => (
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
    },
});