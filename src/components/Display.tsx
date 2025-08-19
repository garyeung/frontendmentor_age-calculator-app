import { useEffect, useRef } from "react";
import { Age } from "./AgeCalculator";

function Display({age}: {age: Age}){

   const items = Object.entries(age).map((item,index) => {
        const [key, value] = item;
        return <DisplayItem name={key} value={value} key={key+index}/>
   });

    
    return(
        <div className="my-7">
            {items}
        </div>
    );
}

function DisplayItem({value, name}: {value: string, name: string}){
    const spanRef = useRef(null);

    useEffect(()=> {
        const span = spanRef.current! as HTMLElement;

        span.classList.add('fade-up');

        setTimeout(()=> {
         span.classList.remove('fade-up');
        }, 1500);
    }, [value]);

    return (
        <div className="text-5-2xl sm:text-8xl font-[Poppins-ExtraBoldItalic]">
            <span ref={spanRef}  className="inline-block text-purple">{value}</span>  {name}
        </div>
    )
}

export default Display;