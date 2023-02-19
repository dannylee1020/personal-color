import { View, Text, SafeAreaView, Button } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import tw from "twrnc";

const CameraVision = () => {
    const [type, setType] = useState(CameraType.front);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <SafeAreaView style={tw`items-center justify-center`}>
                <Text>We need your permission to finish the test</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={tw`items-center flex-1 justify-center`}>
            {/* <Camera type={type} /> */}
            <Text style={tw`font-bold text-lg`}>Camera Vision!!! </Text>
        </SafeAreaView>
    );
};

export default CameraVision;
