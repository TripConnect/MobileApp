import { View, StyleSheet, Text, Pressable, ImageBackground, SafeAreaView, TextInput, Alert } from "react-native";
import { useState, useEffect } from "react";

import { gql, useMutation } from '@apollo/client';
const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
        token {
            user_id
            access_token
        }
    }
  }
`;

import loginPhoto from '../assets/image/LoginPhoto.jpg';
import { setToken } from "../features/userSlice";
import { useDispatch } from "react-redux";

export default function Login({ navigation }) {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

    const handleLogin = () => {
        login({ variables: { username, password } })
            .then(response => {
                if (response?.data?.login?.token) {
                    let { user_id, access_token } = response.data.login.token;
                    dispatch(setToken({ accessToken: access_token, userId: user_id }));
                    navigation.navigate("Home", { user_id });
                } else {
                    Alert.alert('Login failed', 'Username or password is invalid');
                    setUsername('');
                    setPassword('');
                }
            });
    }

    return (
        <ImageBackground source={loginPhoto} resizeMode="cover" style={styles.coverImage} blurRadius={2.5}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.header__title}>Trip connect</Text>
                    <Text style={styles.header__subscription}>Let enjoy your journey</Text>
                </View>
                <SafeAreaView style={styles.main}>
                    <TextInput
                        style={styles.main__inputField}
                        placeholder="Username"
                        onChangeText={(username) => setUsername(username)}
                        value={username}
                        placeholderTextColor="#fff"
                    />
                    <TextInput
                        style={styles.main__inputField}
                        placeholder="Password"
                        onChangeText={(password) => setPassword(password)}
                        value={password}
                        secureTextEntry={true}
                        placeholderTextColor="#fff"
                    />
                    <Pressable
                        style={styles.main__entryButton}
                        onPress={handleLogin}
                    >
                        <Text style={styles.main__entryButton__text}>Login</Text>
                    </Pressable>
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
        fontWeight: "100",
    },
    header__title: {
        fontSize: 50,
        fontWeight: "800",
        color: 'darkblue',
    },
    header__subscription: {
        fontSize: 30,
        fontWeight: "200",
        fontStyle: 'italic',
        color: '#eee',
    },

    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: "rgba(10, 10, 10, 0.3)",
        paddingHorizontal: 25,
        paddingVertical: 25,
        borderRadius: 10,

    },
    main__inputField: {
        width: "100%",
        padding: 20,
        margin: 5,
        color: "#eee",

        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",

        borderWidth: 1,
        borderColor: "#eee",
        backgroundColor: "transparent",
    },
    main__entryButton: {
        width: '100%',
        backgroundColor: '#425884',
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    main__entryButton__text: {
        color: "#e5e5e5",
        textTransform: 'uppercase',
    },

    footer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 50,
    },
    footer__text: {
        color: "#eee",
    }
});
