import { useState } from "react";
import type { NextPage } from "next";
import Inputs from "./inputs";

// random key-value pairs
const startingValues = {
    somekey45434: "someval23461324",
    somekey52424: "someval790158790123",
    somekey512341: "someval919233",
    somekey23123: "someval34113123",
    somekey512351234: "someval132123123",
    somekey512774131: "someval9399391",
    somekey890348: "someval3119299929",
    somekey95939: "someval333311212231",
    somekey90010039: "someval121112121111",
};

const Home: NextPage = () => {
    const [finalValues, setFinalValues] = useState<{ [key: string]: string }>(
        {}
    );

    return (
        <div>
            <div>
                <h2>Starting Values:</h2>
                <code>{JSON.stringify(startingValues, null, 2)}</code>
            </div>

            <Inputs
                startingValues={startingValues}
                setFinalValues={setFinalValues}
            />

            <div>
                <h2>Final values:</h2>
                <code>{JSON.stringify(finalValues, null, 2)}</code>
            </div>
        </div>
    );
};

export default Home;
