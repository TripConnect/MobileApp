import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';

const ROUTES = [
    { name: "Home", component: Home },
    { name: "Login", component: Login },
]

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {ROUTES.map(route => <Stack.Screen key={"screen" + route.name} {...route} />)}
            </Stack.Navigator>
        </NavigationContainer >
    );
}
