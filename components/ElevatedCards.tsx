import { View, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native";


export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.heading}>Trending Places</Text>
            <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardEmoji}>🗼</Text>
                    <Text style={styles.cardText}>Paris</Text>
                    <Text style={styles.cardSubtext}>France</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardEmoji}>🗽</Text>
                    <Text style={styles.cardText}>New York</Text>
                    <Text style={styles.cardSubtext}>USA</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardEmoji}>🗾</Text>
                    <Text style={styles.cardText}>Tokyo</Text>
                    <Text style={styles.cardSubtext}>Japan</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardEmoji}>🕌</Text>
                    <Text style={styles.cardText}>Dubai</Text>
                    <Text style={styles.cardSubtext}>UAE</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardEmoji}>🏰</Text>
                    <Text style={styles.cardText}>London</Text>
                    <Text style={styles.cardSubtext}>UK</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text style={styles.cardEmoji}>🌉</Text>
                    <Text style={styles.cardText}>Sydney</Text>
                    <Text style={styles.cardSubtext}>Australia</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        paddingHorizontal: 16,
        marginBottom: 12,
        marginTop: 8,
    },
    scrollContent: {
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 150,
        borderRadius: 12,
        marginHorizontal: 8,
        backgroundColor: '#FFFFFF',
        padding: 12,
    },
    cardElevated: {
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    },
    cardEmoji: {
        fontSize: 48,
        marginBottom: 8,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    cardSubtext: {
        fontSize: 14,
        fontWeight: '500',
        color: '#666',
    }
})