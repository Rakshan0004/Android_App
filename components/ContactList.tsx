import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function ContactList() {

    const contacts = [
        {
            uid: 1,
            name: 'Rakshan ch',
            status: 'Available',
            imageUrl: 'https://ui-avatars.com/api/?name=Rakshan+Ch&background=0D8ABC&color=fff&size=150',
        },
        {
            uid: 2,
            name: 'John Doe',
            status: 'Busy',
            imageUrl: 'https://ui-avatars.com/api/?name=John+Doe&background=FF6B6B&color=fff&size=150',
        },
        {
            uid: 3,
            name: 'Jane Smith',
            status: 'Available',
            imageUrl: 'https://ui-avatars.com/api/?name=Jane+Smith&background=4ECDC4&color=fff&size=150',
        },
    ];
    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView
            style={styles.container}
            scrollEnabled={false}
            >
                {contacts.map(({uid, name, status, imageUrl}) => (
                    <View key={uid} style={styles.userCard}>
                        <Image 
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.userImage}
                        />
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        marginTop: 50,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    container: {
        paddingHorizontal: 16,
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        padding: 12,
        borderRadius: 80,
        backgroundColor: '#8D3DAF',
        elevation: 2,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    userInfo: {
        flex: 1,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
        marginBottom: 4,
    },
    userStatus: {
        fontSize: 14,
        color: 'white',
    },
})