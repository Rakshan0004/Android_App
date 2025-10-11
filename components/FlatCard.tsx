import { StyleSheet, Text, View } from 'react-native';
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardRed]}>
                    <Text style={styles.cardText}>
                        Red
                    </Text>
                </View>
                <View style={[styles.card, styles.cardBlue]}>
                    <Text style={styles.cardText}>
                        Blue
                    </Text>
                </View>
                <View style={[styles.card, styles.cardGreen]}>
                    <Text style={styles.cardText}>
                        Green
                    </Text>
                </View>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 10,
    },
    card: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        margin: 8,
        // Shadow effects for iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        // Elevation for Android
        elevation: 8,
    },
    cardRed: {
        backgroundColor: '#EF5354',
    },
    cardBlue: {
        backgroundColor: '#5DA3FA',
    },
    cardGreen: {
        backgroundColor: '#50DBB4',
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    }
})