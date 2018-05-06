import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Madoka } from 'react-native-textinput-effects';

/**
 * to be wrapped with redux-form Field component
 */

const styles = StyleSheet.create({
    error: {
        // fontSize: 19,
        fontStyle: 'italic',
        color: '#d35058',
    }
});

export default function MyInput(props) {
    const { input, meta: { touched, error, warning }, ...inputProps } = props;

    return (
        <View>
            <Madoka
                {...inputProps}
                borderColor={'#0f87f8'}
                labelStyle={{ color: '#35679a' }}
                inputStyle={{ color: '#0e0e0e' }}
                onChangeText={input.onChange}
                onBlur={input.onBlur}
                onFocus={input.onFocus}
                value={input.value}
            />

            {touched && error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}