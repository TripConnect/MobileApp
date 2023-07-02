import { View, StyleSheet, Text, Image, Pressable } from "react-native";

import homePhoto from '../assets/image/home-photo.png';

export default function Home() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Let's{"\n"}
                    <Text style={styles.title__hightlight}>Explore</Text>{"\n"}
                    the world
                </Text>
                <Text style={styles.subscription}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci voluptatibus fuga accusamus in. Similique, libero. Fuga libero dolores provident accusantium.
                </Text>
            </View>
            <View>
                <Pressable style={styles.entryButton} onPress={() => { console.log("Let authorization"); }}>
                    <Text style={styles.entryButton__text}>Enter</Text>
                </Pressable>
            </View>
            <View>
                <Image style={styles.photo} source={homePhoto} />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: "space-around",
        paddingTop: 70,
        paddingBottom: 20,
        paddingHorizontal: 50,
        backgroundColor: '#e5e5e5',
    },

    title: {
        marginBottom: 30,
        color: '#425884',
        fontSize: 50,
        fontWeight: 300,
        textTransform: 'uppercase',
    },
    title__hightlight: {
        fontWeight: 500,
    },

    entryButton: {
        backgroundColor: '#425884',
        borderRadius: 4,
        padding: 20,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    entryButton__text: {
        color: "#e5e5e5",
        textTransform: 'uppercase',
    },

    subscription: {
        color: '#425884',
        fontWeight: 200,
    },

    photo: {
        width: "100%",
    }
});
