import { View, Text, StyleSheet } from "react-native";

export default function User({ route }) {
    const { user_id } = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header__title}>
                    <Text style={styles.header__title__highlight}>{user_id}</Text> travels
                </Text>
            </View>
            <View></View>
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
    header: {
        flex: 1,
    },
    header__title: {
        fontSize: 30,
    },
    header__title__highlight: {
        fontWeight: 600,
        color: 'darkblue',
    }
});
