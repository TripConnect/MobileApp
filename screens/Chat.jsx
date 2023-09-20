import { View, StyleSheet, Text, Pressable, ImageBackground, SafeAreaView, TextInput, Alert } from "react-native";
import { useState } from "react";
import { gql, useQuery } from '@apollo/client';
import { useSelector } from "react-redux";


const USER_QUERY = gql`
  query LoadUser($user_id: String!) {
    loadUser(user_id: $user_id) {
        user_id
        display_name
    }
  }
`;


const LOAD_CONVENTION_QUERY = gql`
    query LoadConversation($conversation_id: ID!, $page: Int, $limit: Int) {
        loadConversation(conversation_id: $conversation_id, page: $page, limit: $limit) {
            name
            messages {
                from_user_id
                to_user_id
                content
            }
        }
    }
`;


export default function Chat({ route }) {
    const { user_id, conversationId } = route.params;

    const socket = useSelector((state) => state.account.socket);
    const [chatMessage, setChatMessage] = useState("");
    const { loading: userLoading, error: userError, data: userData } = useQuery(USER_QUERY, {
        variables: { user_id }
    });
    const { loading: conversationLoading, error: conversationError, data: conversationData } = useQuery(LOAD_CONVENTION_QUERY, {
        variables: { conversation_id: conversationId, page: 1, limit: 50 },
    });
    if (userError) {
        Alert.alert("Error", `Error! ${userError}`);
        return <Text>{`Error! ${userError}`}</Text>;
    };
    if (conversationError) {
        Alert.alert("Error", `Error! ${conversationError}`);
        return <Text>{`Error! ${conversationError}`}</Text>;
    }

    const handleChatCommit = () => {
        console.log({ message: chatMessage, to: user_id });
        socket.emit("chat", { content: chatMessage, to_user_id: user_id });
    }

    return (
        <View style={styles.container}>
            {
                (userLoading || conversationLoading) ?
                    <Text>Loading...</Text>
                    :
                    <>
                        <Text>{userData.loadUser.display_name}</Text>
                        <View style={styles.messageContainer}>
                            {
                                conversationData.loadConversation.messages.map(
                                    message => (<View>
                                        <Text>{message.from_user_id}</Text>
                                        <Text>{message.content}</Text>
                                    </View>)
                                )
                            }
                        </View>
                        <View>
                            <TextInput
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
