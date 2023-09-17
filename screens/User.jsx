import { View, Text, StyleSheet, Pressable } from "react-native";
import { gql, useMutation } from '@apollo/client';
import { useSelector } from "react-redux";

const CREATE_CONVENTION_MUTATION = gql`
    mutation CreateConversation($name: String, $user_ids: [String!]!, $type: String!) {
        createConversation(name: $name, user_ids: $user_ids, type: $type) {
            conversation_id
        }
    }
`;


export default function User({ navigation, route }) {
    const { user_id, display_name } = route.params;
    const [createConversation, { data, loading, error }] = useMutation(CREATE_CONVENTION_MUTATION);
    let currentUserId = useSelector(state => state.account.userId);

    const handleChatButtonPress = () => {
        createConversation({ variables: { name: null, user_ids: [currentUserId, user_id], type: "private" } })
            .then(response => {
                navigation.navigate("Chat", {
                    conversationId: parseInt(response.data.createConversation.conversation_id),
                    user_id: user_id,
                })
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header__title}>
                    <Text style={styles.header__title__highlight}>{display_name}</Text> travels
                </Text>
            </View>
            <View style={styles.main}>
                <Pressable
                    style={styles.main__chatButton}
                    onPress={handleChatButtonPress}
                    disabled={currentUserId === user_id}
                >
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
        fontWeight: "600",
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
