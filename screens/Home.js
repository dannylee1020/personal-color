import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from "react-native";
import tw from "twrnc";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-[#1B264B] flex-1`}>
            <View style={tw`h-1/2 w-full`}>
                <Image
                    source={require("../assets/colorpalette.png")}
                    //! for simulator use in case require throws error
                    // source={{
                    //     uri: "/Users/dannylee/projects/personal-color/assets/colorpalette.png",
                    // }}

                    style={{
                        width: 400,
                        height: 400,
                        resizeMode: "cover",
                    }}
                />
            </View>
            <View style={tw`h-1/2 w-full`}>
                <View
                    style={tw`bg-white flex-1 m-4 rounded-lg justify-between`}
                >
                    <View>
                        <Text style={tw`text-3xl font-bold mx-5 mt-8`}>
                            Take your
                        </Text>
                        <Text style={tw`text-3xl font-bold mx-5`}>
                            personal color test!
                        </Text>
                        <Text
                            style={tw`text-base text-gray-600 w-2/3 mx-5 mt-10`}
                        >
                            Tell us little bit about yourself and we will find
                            you the right color match
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={tw`items-center bg-blue-600 h-12 rounded-full mx-20 justify-center mb-5`}
                        onPress={() => {
                            navigation.navigate("FirstQ");
                        }}
                    >
                        <Text style={tw`text-white font-bold`}>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;
