import Inputs from "./Inputs";
import Display from "./Display";
import { useState } from "react";

export interface Age {
    years: string | number,
    months: string | number,
    days: string | number
}
function AgeCalculator(){
    const initalAge:Age = {
        years: '--',
        months: '--',
        days: '--'

    }
    const [age, setAge] = useState<Age>(initalAge)
    return  (
    <div className=" max-w-3xl mx-3 md:mx-auto my-20 sm:my-10 bg-[theme(colors.white)] p-5 sm:px-8 rounded-3xl rounded-br-[6rem] sm:rounded-br-[11rem] font-[Poppins]">
        <Inputs pushAge={setAge}/>
        <Display age={age} />
    </div>);
}

export default AgeCalculator;