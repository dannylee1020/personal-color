import Questions from "../components/Questions";

const data = {
    question: "What is your natural hair color ?",
    nextScreen: "ThirdQ",
    details: [
        {
            id: 1,
            color: "light",
        },
        {
            id: 2,
            color: "warm ",
        },
        {
            id: 3,
            color: "cool",
        },
        {
            id: 4,
            color: "deep",
        },
    ],
};

const SecondQ = () => {
    return <Questions data={data}></Questions>;
};

export default SecondQ;
