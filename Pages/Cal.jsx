import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Navbar from './Navbar';

const logo = require('../assets/logo.png');

const Cal = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const holidays = {
        '2025-01-26': { marked: true, dotColor: 'red', customStyles: { text: { color: 'red' } } },
        '2025-12-25': { marked: true, dotColor: 'blue', customStyles: { text: { color: 'blue' } } },
        '2025-08-15': { marked: true, dotColor: 'orange', customStyles: { text: { color: 'orange' } } },
    };

    const handleApplyLeave = () => {
        if (selectedDate) {
            alert(`Leave applied for ${selectedDate}`);
        } else {
            alert('Please select a date before applying for leave.');
        }
    };

    const handleNavigate = (screen) => {
        alert(`Navigating to ${screen}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.image} />
                <Text style={styles.title}>Synergy Infotech</Text>
            </View>

            <Text style={styles.instructions}>Select a date to apply for leave</Text>

            <Calendar
                current={'2025-01-01'}
                minDate={'2023-01-01'}
                maxDate={'2030-12-31'}
                onDayPress={(day) => {
                    setSelectedDate(day.dateString);
                }}
                markedDates={{
                    ...holidays,
                    [selectedDate]: { selected: true, selectedColor: 'green' },
                }}
                theme={{
                    selectedDayBackgroundColor: 'green',
                    todayTextColor: '#FF6347',
                    arrowColor: 'blue',
                }}
                style={styles.calendar}
            />

            <TouchableOpacity style={styles.applyButton} onPress={handleApplyLeave}>
                <Text style={styles.applyButtonText}>Apply for Leave</Text>
            </TouchableOpacity>

            <Navbar onNavigate={(screen) => alert(`Navigating to ${screen}`)} />

        </SafeAreaView>
    );
};

export default Cal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4FF',
        alignItems: 'center',
    },
    header: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
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
    instructions: {
        fontSize: 16,
        color: '#2A2A2A',
        marginBottom: 10,
    },
    calendar: {
        width: '90%',
        height: 400, // Makes the calendar larger
        marginBottom: 20,
    },
    applyButton: {
        backgroundColor: '#2A2A2A',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginBottom: 20,
    },
    applyButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
