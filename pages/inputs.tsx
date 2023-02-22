import type { NextPage } from "next";
import { Dispatch, SetStateAction, useState } from "react";

const Inputs: NextPage<{
    startingValues: { [key: string]: string };
    setFinalValues: Dispatch<SetStateAction<{ [key: string]: string }>>;
}> = ({ startingValues, setFinalValues }) => {
    const [currentValues, setCurrentValues] = useState<{
        [key: string]: string;
    }>({ ...startingValues });

    const handleChange = (key: string, val: string) => {
        setCurrentValues({
            ...currentValues,
            [key]: val,
        });
    };

    return (
        <div>
            <div>
                {Object.entries(currentValues).map(([key, val]) => (
                    <div key={key}>
                        <p>{key}:</p>
                        <input
                            value={val}
                            onChange={(e) => handleChange(key, e.target.value)}
                        />
                        <hr />
                    </div>
                ))}
            </div>
            <button onClick={() => setFinalValues({ ...currentValues })}>
                Generate Final Values
            </button>
        </div>
    );
};

export default Inputs;
