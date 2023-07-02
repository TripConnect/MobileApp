import { View, StyleSheet, Text, Pressable, ImageBackground, SafeAreaView, TextInput } from "react-native";

import loginPhoto from '../assets/image/login-photo.jpg';

export default function Login() {
    return (
        <ImageBackground source={loginPhoto} resizeMode="cover" style={styles.coverImage} blurRadius={2.5}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.header__title}>Trip connect</Text>
                    <Text style={styles.header__subscription}>Let enjoy your journey</Text>
                </View>
                <SafeAreaView style={styles.main}>
                    <View>
                        <TextInput
                            style={styles.main__inputField}
                            placeholder="Enter username"
                        />
                        <TextInput
                            style={styles.main__inputField}
                            placeholder="Enter password"
                        />
                        <Pressable style={styles.main__entryButton} onPress={() => { console.log("Let login"); }}>
                            <Text style={styles.main__entryButton__text}>Login</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
                <View style={styles.footer}>
                    <Text style={styles.footer__text}>Create Account | Forget Pasword</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 70,
        paddingBottom: 20,
        paddingHorizontal: 50,
        height: "100%",
        with: "100%",
        alignItems: "stretch",
        justifyContent: 'space-around',
    },
    coverImage: {
        with: "100%",
        height: "100%",
        justifyContent: "center",
    },

    header: {
        flex: 1,
        fontWeight: 100,
    },
    header__title: {
        fontSize: 50,
        fontWeight: 500,
        color: 'darkblue',
    },
    header__subscription: {
        fontSize: 30,
        fontWeight: 200,
        color: '#eee',
    },

    main: {
        flex: 1,
        justifyContent: 'space-between',
    },
    main__inputField: {
        width: "100%",
        borderRadius: 50,
        padding: 20,
        backgroundColor: '#eeeeee',
        margin: 5,
    },
    main__entryButton: {
        width: '100%',
        backgroundColor: '#425884',
        borderRadius: 4,
        padding: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main__entryButton__text: {
        color: "#e5e5e5",
        textTransform: 'uppercase',
    },

    footer: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
    },
    footer__text: {
        color: "#eeeeee",
    }
});