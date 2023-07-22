import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './screens/Welcome';
import Login from './screens/Login';
import User from './screens/User';
import Chat from './screens/Chat';
import Home from './screens/Home';

const ROUTES = [
    { name: "Welcome", component: Welcome },
    { name: "Login", component: Login },
    { name: "User", component: User },
    { name: "Chat", component: Chat },
    { name: "Home", component: Home },
]

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                {ROUTES.map(route => <Stack.Screen key={"screen" + route.name} {...route} />)}
            </Stack.Navigator>
        </NavigationContainer >
    );
}
