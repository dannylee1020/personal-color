import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import FirstQ from "./screens/FirstQ";
import SecondQ from "./screens/SecondQ";
import ThirdQ from "./screens/ThirdQ";
import CameraVision from "./screens/CameraVision";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="FirstQ" component={FirstQ} />
                <Stack.Screen name="SecondQ" component={SecondQ} />
                <Stack.Screen name="ThirdQ" component={ThirdQ} />
                <Stack.Screen name="CameraVision" component={CameraVision} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
