import React from "react";
import Questions from "../components/Questions";

const data = {
    question: "What is the color of your eyes ?",
    nextScreen: "CameraVision",
    details: [
        {
            id: 1,
            color: "blue / green",
        },
        {
            id: 2,
            color: "turquoise / hazel ",
        },
        {
            id: 3,
            color: "grayish blue or brown / gray",
        },
        {
            id: 4,
            color: "deep brown / black",
        },
    ],
};

const ThirdQ = () => {
    return <Questions data={data}></Questions>;
};

export default ThirdQ;
