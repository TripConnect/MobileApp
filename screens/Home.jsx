import { StyleSheet, View, TextInput, Text, Pressable, Image } from "react-native";
import { useState, useEffect } from "react";

import { gql, useLazyQuery } from '@apollo/client';
const SEARCH_USER_QUERY = gql`
  query SearchUser($display_name_pattern: String!) {
    searchUser(display_name_pattern: $display_name_pattern) {
        user_id
        display_name
    }
  }
`;

export default function Home({ navigation }) {
    let [userFilter, setUserFilter] = useState("");
    let [searchedUsers, setSearchedUsers] = useState([]);
    const [searchUser, { loading, error, data }] = useLazyQuery(SEARCH_USER_QUERY);

    const handleSearchUserSubmit = () => {
        if (!userFilter) return;
        searchUser({ variables: { display_name_pattern: userFilter } })
            .then(response => {
                let users = response.data.searchUser;
                setSearchedUsers(users);
            });
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    style={styles.main__inputField}
                    placeholder="Search"
                    onChangeText={(filterValue) => setUserFilter(filterValue)}
                    value={userFilter}
                    placeholderTextColor="black"
                    onSubmitEditing={handleSearchUserSubmit}
                />
                <View>
                    {
                        searchedUsers.map(user => (
                            <Pressable
                                key={`user${user.user_id}`}
                                style={styles.main__searchedUser__user}
                                onPress={() => navigation.navigate("User", user)}
                            >
                                <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                                    style={{ width: 30, height: 30, marginEnd: 10, }} />
                                <Text>{user.display_name}</Text>
                            </Pressable>
                        ))
                    }
                </View>
            </View>
        </View>
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
        justifyContent: 'flex-start',
    },
    main__inputField: {
        width: "100%",
        padding: 20,
        margin: 5,

        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        backgroundColor: "transparent",
    },
    main__searchedUser__user: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginVertical: 5,
    },
});
