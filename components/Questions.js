import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Questions = ({ data }) => {
    const [selected, setSelected] = useState(null);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-[#222B3B] flex-1`}>
            <View style={tw`grow bg-white m-5 rounded-lg mt-25`}>
                <Text style={tw`text-2xl font-semibold m-10`}>
                    {data.question}
                </Text>
                <FlatList
                    data={data.details}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={tw`items-center h-15 justify-center border-2 border-gray-400 mx-10 rounded-lg mb-10 ${
                                selected?.id === item.id &&
                                "bg-indigo-200 border-indigo-500"
                            }`}
                            onPress={() => {
                                setSelected(item);
                            }}
                        >
                            <Text style={tw`rounded-md text-lg`}>
                                {item.color}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
                <View style={tw`flex-row justify-evenly mb-10`}>
                    <TouchableOpacity
                        style={tw`px-8`}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <Text style={tw`text-lg font-bold p-3`}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`bg-blue-600 rounded-lg px-8`}
                        onPress={() => {
                            navigation.navigate(data.nextScreen);
                        }}
                    >
                        <Text style={tw`text-lg text-white font-bold p-3`}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Questions;
