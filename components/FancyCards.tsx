import { Image, StyleSheet, Text, View } from "react-native";


export default function FancyCards() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Locations</Text>
            
            <View style={[styles.card, styles.cardElevated]}>
                <Image 
                    source={{
                        uri: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
                    <Text style={styles.cardDescription}>
                        The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is one of the most iconic landmarks.
                    </Text>
                    <Text style={styles.cardFooter}>12 min away</Text>
                </View>
            </View>

            <View style={[styles.card, styles.cardElevated]}>
                <Image 
                    source={{
                        uri: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Taj Mahal</Text>
                    <Text style={styles.cardLabel}>Agra, Uttar Pradesh</Text>
                    <Text style={styles.cardDescription}>
                        The Taj Mahal is an ivory-white marble mausoleum, widely recognized as the jewel of Muslim art in India and a UNESCO World Heritage Site.
                    </Text>
                    <Text style={styles.cardFooter}>2 hours away</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        paddingHorizontal: 16,
        marginBottom: 12,
        marginTop: 8,
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 16,
        marginVertical: 12,
        marginHorizontal: 16,
        backgroundColor: '#fff',
        overflow: 'hidden',
    },
    cardElevated: {
        elevation: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
    },
    cardImage: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },
    cardBody: {
        padding: 16,
        flex: 1,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 6,
    },
    cardLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#FF6B6B',
        marginBottom: 10,
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
        marginBottom: 12,
        flex: 1,
    },
    cardFooter: {
        fontSize: 13,
        fontWeight: '600',
        color: '#4ECDC4',
    },
})