import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import TermScreen from './screens/TermScreen';

const HomeStack = StackNavigator({
    Home: { screen: HomeScreen, },
});

const SettingsStack = StackNavigator({
    Settings: { screen: SettingsScreen },
    SignIn: { screen: SignInScreen },
    SignUp: { screen: SignUpScreen },
    Term: { screen: TermScreen },
});

// const SignInStack = StackNavigator({
//     SignIn: { screen: SignInScreen },
// });

export default TabNavigator(
    {
        Home: { screen: HomeStack },
        Settings: { screen: SettingsStack },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                }
                else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }
                // else if (routeName === 'Users') {
                //     iconName = `ios-people${focused ? '' : '-outline'}`;
                // }
                // else if (routeName === 'Songs') {
                //     iconName = `ios-musical-note${focused ? '' : '-outline'}`;
                // }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
);
