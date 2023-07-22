import { View, StyleSheet, Text, Pressable, ImageBackground, SafeAreaView, TextInput, Alert } from "react-native";

export default function Chat({ route }) {
    const { user_id } = route.params;

    return (
        <View style={styles.container}>
            <Text>{user_id}</Text>
            <View style={styles.messageContainer}>

            </View>
            <View>
                <TextInput
                    style={styles.main__inputField}
                    placeholder="Username"
                    onChangeText={(username) => setUsername(username)}
                    value={username}
                    placeholderTextColor="#fff"
                />
            </View>
        </View>
    )
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
});
