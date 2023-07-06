import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import User from './screens/User';

const ROUTES = [
    { name: "Home", component: Home },
    { name: "Login", component: Login },
    { name: "User", component: User },
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
