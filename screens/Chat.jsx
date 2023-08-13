import { View, StyleSheet, Text, Pressable, ImageBackground, SafeAreaView, TextInput, Alert } from "react-native";
import { useState } from "react";
import { gql, useQuery } from '@apollo/client';

import SocketIOConnection from "../services/socket";

const USER_QUERY = gql`
  query LoadUser($user_id: String!) {
    loadUser(user_id: $user_id) {
        user_id
        display_name
    }
  }
`;

export default function Chat({ route }) {
    const { user_id } = route.params;
    const [chatMessage, setChatMessage] = useState("");
    const { data, loading, error } = useQuery(USER_QUERY, {
        variables: { user_id }
    });

    const handleChatCommit = () => {
        console.log({ message: chatMessage, to: user_id });
        SocketIOConnection.getSocket().emit("chat", { content: chatMessage, to_user_id: user_id });
    }

    return (
        <View style={styles.container}>
            {
                loading ?
                    <Text>Loading...</Text>
                    :
                    <>
                        <Text>{data.loadUser.display_name}</Text>
                        <View style={styles.messageContainer}>

                        </View>
                        <View>
                            <TextInput
                                style={styles.main__inputField}
                                placeholder="Enter message"
                                onChangeText={(message) => setChatMessage(message)}
                                onSubmitEditing={handleChatCommit}
                            />
                        </View>
                    </>
            }
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
