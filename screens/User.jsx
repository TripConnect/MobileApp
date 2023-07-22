import { View, Text, StyleSheet, Pressable } from "react-native";

export default function User({ route }) {
    const { user_id, display_name } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header__title}>
                    <Text style={styles.header__title__highlight}>{display_name}</Text> travels
                </Text>
            </View>
            <View style={styles.main}>
                <Pressable style={styles.main__chatButton}>
                    <Text>Chat</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: "flex-start",
        paddingTop: 70,
        paddingBottom: 20,
        paddingHorizontal: 50,
        backgroundColor: '#e5e5e5',
    },
    header: {
        flex: 1,
    },
    header__title: {
        fontSize: 30,
    },
    header__title__highlight: {
        fontWeight: 600,
        color: 'darkblue',
    },
    main: {
        flex: 1,
    },
    main__chatButton: {
        padding: 10,
        backgroundColor: "darkblue",
    },
});
