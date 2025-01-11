import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const home  = require('../assets/home.png')
const calendar = require( '../assets/calendar.png')
const profile  = require('../assets/profile.png')
const settings = require('../assets/settings.png')
const logout = require('../assets/logout.png')


const Navbar = ({ onNavigate }) => {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('Home')}>
                <Image
                    source={home}
                    style={styles.icon}
                />
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('Calendar')}>
                <Image
                    source={calendar}
                    style={styles.icon}
                />
                <Text style={styles.navText}>Calendar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('Profile')}>
                <Image
                    source={profile}
                    style={styles.icon}
                />
                <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('Settings')}>
                <Image
                    source={settings}
                    style={styles.icon}
                />
                <Text style={styles.navText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('Logout')}>
                <Image
                    source={logout}
                    style={styles.icon}
                />
                <Text style={styles.navText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Navbar;

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
        backgroundColor: '#2A2A2A',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 1,
        borderTopColor: '#444',
    },
    navItem: {
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        marginBottom: 5,
    },
    navText: {
        color: '#FFFFFF',
        fontSize: 12,
    },
});
