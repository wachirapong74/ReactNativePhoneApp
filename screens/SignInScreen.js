import React from 'react';
import { 
    StyleSheet, 
    ScrollView, 
    Text, 
    View, 
    Button as ButtonNative,
    AsyncStorage,
    Keyboard,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { reduxForm, Field } from 'redux-form';
import MyInput from "../utils/MyInput";
import { signIn } from "../redux/actions/authActions";

class SignInScreen extends React.Component {
    // static navigationOptions = {
    //     title: 'Sign in',
    // };

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
        }
    }

    componentDidMount() {
        // this.resetKey()
        // this.getKey()
    }

    async getKey() {
        try {
            const value = await AsyncStorage.getItem('user-token');
            console.log('User Token is ', value);
        } catch (error) {
            console.log("Error retrieving data" + error);
        }
    }

    async resetKey() {
        try {
            // Alert.alert(
            //     'Confirm to Sign Out',
            //     '',
            //     [
            //         { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            //         { 
            //             text: 'OK', onPress: () => {
            //                 await AsyncStorage.removeItem('user-token');
            //             } 
            //         },
            //     ],
            //     { cancelable: false }
            // )

            await AsyncStorage.removeItem('user-token');
            
        } catch (error) {
            console.log("Error resetting data" + error);
        }
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <Text style={styles.error}>
                    {this.props.errorMessage}
                </Text>
            )
        }
    }

    onSubmit = (values) => {
        this.props.dispatch(signIn(values)).then((signInSuccess) => {
            if (signInSuccess) {
                Keyboard.dismiss()
                this.props.navigation.navigate('Home')
            }
        })
    }
    
    render() {
        const { handleSubmit } = this.props

        return (
            <ScrollView keyboardShouldPersistTaps={'handled'} style={styles.container}>
                <Text style={styles.title}>Sign in</Text>

                <Field
                    label={'Username (your email)'}
                    name={'email'}
                    onChangeText={(input) => this.setState({ email: input })}
                    value={this.state.email}
                    component={MyInput}
                />

                <Field
                    label={'Password'}
                    name={'password'}
                    secureTextEntry={true}
                    onChangeText={(input) => this.setState({ password: input })}
                    value={this.state.password}
                    component={MyInput}
                />

                {this.renderAlert()}

                <Button
                    title='Sign in'
                    buttonStyle={{
                        backgroundColor: "rgba(92, 99,216, 1)",
                    }}
                    containerViewStyle={{ width: '100%', marginTop: 15, marginLeft: 0, marginBottom: 15 }}
                    onPress={handleSubmit(this.onSubmit)}
                />

                <ButtonNative
                    title='Sign up'
                    onPress={() => this.props.navigation.navigate('SignUp')}
                />
            </ScrollView>
        );
    }
}

const validate = values => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const errors = {};
    if (!values.email) {
        errors.email = 'Username field is required';
    }
    else if (values.email && reg.test(values.email) === false) {
        errors.email = 'Email is Not Correct';
    }

    if (!values.password) {
        errors.password = 'Password field is required';
    } else if (values.password.length <= 4) {
        errors.password = 'Password must be at least 4 characters long';
    }

    return errors;
};

const styles = StyleSheet.create({
    container: {
        // flex: 1, 
        // justifyContent: 'center', 
        paddingLeft: 15,
        paddingRight: 15,
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 15,
    },
    error: {
        color: 'red'
    }
});

const mapStateToProps = state => {
    return {
        errorMessage: state.authReducers.error //กรณี Signin ไม่ผ่าน
    }
}

const form = reduxForm({
    form: 'signIn',
    validate
});

export default connect(mapStateToProps)(form(SignInScreen))