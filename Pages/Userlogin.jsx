import { Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import google from "../assets/google.png"

const logo = require('../assets/logo.png');
const Google = require('../assets/google.png');

const User = (props) => {
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);

    const handleGoogleLogin = () => {
        console.log('Continue with Google');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.image} />
                <Text style={styles.title}>Synergy Infotech</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.subheader}>Login</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Username or Email"
                    placeholderTextColor="#888"
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    placeholderTextColor="#888"
                    value={password}
                    onChangeText={setPassword}
                />

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text style={styles.label}>Keep me logged in</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Calander')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <View style={styles.orContainer}>
                    <Text style={styles.orText}>OR</Text>
                </View>

                <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
                    <Image source={Google} style={{ width: 20, height: 20, marginRight: 10 }} />
                    <Text style={styles.googleButtonText}>Continue with Google</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default User;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4FF',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    header: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2A2A2A',
    },
    subheader: {
        fontSize: 25,
        fontWeight: '600',
        color: '#2A2A2A',
        marginBottom: 20,
    },
    form: {
        flex: 1,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#FFF',
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#2A2A2A',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orContainer: {
        marginVertical: 20,
    },
    orText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#888',
    },
    googleButton: {
        width: '100%',
        height: 50,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        flexDirection: 'row',
    },
    googleButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
