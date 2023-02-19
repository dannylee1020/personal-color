import Questions from "../components/Questions";

const data = {
    question: "What color is your skin ?",
    nextScreen: "SecondQ",
    details: [
        {
            id: 1,
            color: "black",
        },
        {
            id: 2,
            color: "white",
        },
        {
            id: 3,
            color: "yellow",
        },
        {
            id: 4,
            color: "brown",
        },
    ],
};

const FirstQ = () => {
    return <Questions data={data}></Questions>;
};

export default FirstQ;
