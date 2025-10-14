import { View, Text, Linking, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={styles.card}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>What's new in React Native in 2025</Text>
                </View>
                <Image 
                    source={{
                        uri: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3} style={styles.descriptionText}>
                        React Native is a framework for building native applications using React.
                        It is a popular framework for building mobile applications.
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => openWebsite('https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800')}
                    >
                        <Text style={styles.buttonSecText}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => openWebsite('https://reactnative.dev')}
                    >
                        <Text style={styles.buttonSecText}>Follow Me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom: 8,
    },
    card: {
        width: 370,
        height: 430,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderBottomWidth: 3,
        borderBottomColor: '#E07C24',
        marginHorizontal: 16,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },

        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    headingContainer: {
        padding: 12,
        backgroundColor: '#E07C24',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    cardImage: {
        width: '100%',
        height: 200,
    },
    bodyContainer: {
        padding: 12,
    },
    descriptionText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
    },
    footerContainer: {
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#E07C24',
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderRadius: 6,
    },
    buttonSecondary: {
        backgroundColor: '#2C5F7C',
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderRadius: 6,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    buttonSecText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
})