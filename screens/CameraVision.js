import {
    View,
    Text,
    SafeAreaView,
    Button,
    TouchableOpacity,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as Linking from "expo-linking";
import { useState } from "react";
import tw from "twrnc";

const CameraVision = () => {
    const [type, setType] = useState(CameraType.front);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    console.log(permission);

    if (!permission) {
        return <View />;
    }

    // ask permission for the first time
    if (!permission.granted && permission.canAskAgain) {
        return (
            <SafeAreaView style={tw`items-center justify-center h-full`}>
                <Text>We need to access your camera to finish the test!</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </SafeAreaView>
        );
    }

    // navigate user to settings page to manually enable permission
    if (!permission.granted && !permission.canAskAgain) {
        return (
            <SafeAreaView style={tw`items-center justify-center h-full`}>
                <Text>Go to settings to enable camera access!</Text>
                <Button
                    onPress={() => {
                        Linking.openSettings();
                    }}
                    title="enable camera"
                />
            </SafeAreaView>
        );
    }

    return (
        <View style={tw`items-center flex-1 justify-center`}>
            <Camera type={type} style={tw`h-full w-full`}>
                <View style={tw`flex-1 items-center justify-between`}>
                    <Text style={tw`mt-20 text-white font-bold text-lg`}>
                        Which color looks better on your face ?
                    </Text>
                    <View style={tw`flex-row justify-evenly w-full mb-20`}>
                        <TouchableOpacity
                            style={tw`w-30 h-35 bg-rose-400`}
                        ></TouchableOpacity>
                        <TouchableOpacity
                            style={tw`w-30 h-35 bg-pink-400`}
                        ></TouchableOpacity>
                    </View>
                </View>
            </Camera>
        </View>
    );
};

export default CameraVision;
