import React from 'react';
import { connect } from 'react-redux'

import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';

import { Button } from 'react-native-elements';
import { reduxForm, Field } from 'redux-form';
import MyInput from "../utils/MyInput";

import { signUp } from "../redux/actions/userActions";

class SignUpScreen extends React.Component {
    // static navigationOptions = {
    //     title: 'Sign Up',
    // };

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
        }
    }

    onSubmit = (values) => {
        // console.log('values is :', values)
        this.props.dispatch(signUp(values)).then(() => {
            // this.setState({
            //     name: "",
            //     email: "",
            //     password: "",
            // })

            Alert.alert(
                'Sign Up is Completed',
                'Please Sign in now!!',
                [
                    // { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                    // { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { 
                        text: 'OK', 
                        onPress: () => {
                            // console.log('OK Pressed')
                            this.props.navigation.goBack()
                        } 
                    },
                ],
                { cancelable: false }
            )
        })
    }

    render() {
        const { handleSubmit } = this.props

        return (
            <ScrollView keyboardShouldPersistTaps={'handled'} style={styles.container}>
            
                <Text style={styles.title}>Sign Up</Text>

                <Field
                    label={'Name'}
                    name={'name'}
                    onChangeText={(input) => this.setState({ name: input })}
                    value={this.state.name}
                    component={MyInput}
                />

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

                <Button
                    title='Submit'
                    buttonStyle={{
                        backgroundColor: "rgba(92, 99,216, 1)",
                    }}
                    containerViewStyle={{ width: '100%', marginTop: 15, marginLeft: 0, marginBottom: 15 }}
                    onPress={handleSubmit(this.onSubmit)}
                />
            </ScrollView>
        );
    }
}

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
    }
});

const validate = values => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    const errors = {};
    if (!values.name) {
        errors.name = 'Name field is required';
    }

    if (!values.email) {
        errors.email = 'Username field is required';
    }
    else if (values.email && reg.test(values.email) === false) {
        errors.username = 'Email is not Correct';
    }

    if (!values.password) {
        errors.password = 'Password field is required'; 
    } else if (values.password.length <= 4) {
        errors.password = 'Password must be at least 4 characters long'; 
    }

    return errors;
};

export default reduxForm({ 
    form: 'signUp',
    validate
})(SignUpScreen);
