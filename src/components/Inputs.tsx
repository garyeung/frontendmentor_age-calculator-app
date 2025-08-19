import { DateTime } from "luxon";
import { useState } from "react";
import { Age } from "./AgeCalculator";
import React from "react";

enum ErrorTypes  {
NONE = "",
EMPTY = "This field is required",
YEAR =  "Must be in the past",
MONTH =  "Must be a valid month",
DAY =  "Must be a valid day",
DATE =  "Must be a valid date",
NAN = "Must be a valid number",
}
interface Inputdata {
  name: string,
  value: string;
  placeholder: string;
  error: ErrorTypes
}
interface InputdataObj {
  [key: string]: Inputdata
}

function Inputs({pushAge}:{pushAge(x:Age): void}){
    const buttonUrl = 'images/icon-arrow.svg';
    const data: InputdataObj = {
         day: {
            name: 'day',
            value: "",
            placeholder: 'DD',
            error: ErrorTypes.NONE
        },
        month: {
            name:'month',
            value: "",
            placeholder: 'MM',
            error: ErrorTypes.NONE

        },
        year: {
            name: 'year',
            value: "",
            placeholder: 'YYYY',
            error: ErrorTypes.NONE
        }

    }

    const [buttonLogo, setButtonLogo] = useState(buttonUrl);
    const [birthday, setBirthday] = useState(data);

    const isNaN = (num:any) => {
      return (num == "" )? true: Number.isNaN(num);
    }

    const verifyInputs = (data: InputdataObj) => {
        const updateData = {...data};
        const now = DateTime.now();
        let isValid = true;

        for( let key in updateData){
          const item = updateData[key];
          const value = Number(item.value);
          if(item.value === "")
          {
            item.error = ErrorTypes.EMPTY;
            isValid = false;
          }
          else if(isNaN(value)){
            item.error = ErrorTypes.NAN;
            isValid = false;
          }
          else{
            item.error = ErrorTypes.NONE;
            switch (item.name) {
               case "year":
                 if (value < 0 || value > now.year) {
                   item.error = ErrorTypes.YEAR;
                   isValid = false;
                 }
                 break;

               case "month":
                 if (value > 12 || value < 1) {
                   item.error = ErrorTypes.MONTH;
                   isValid = false;
                 }
                 break;

               case "day":
                 if (value < 1 || value > 31) {
                   item.error = ErrorTypes.DAY;
                   isValid = false;
                 }
                 break;
               default:
                 break;
             }
          }
        }
         
        setBirthday(updateData);
        return isValid;
    }
    const makeDate = (da: InputdataObj) => {

      const updateBirthday = {...da};
      const year = Number(updateBirthday.year.value);
      const month = Number(updateBirthday.month.value);
      const day = Number(updateBirthday.day.value);
      return DateTime.fromObject({year: year,
                                         month: month,
                                         day: day  })
    }

    const veriflyDate = (birthday: InputdataObj) => {
      const updateBirthday = {...birthday};
      const date = makeDate(updateBirthday);
      if(date.isValid){
        return true;
      }
      else{
        updateBirthday.day.error = ErrorTypes.DATE
        setBirthday(updateBirthday);
        return false;
      }
    }

    const calculateAge = (start: DateTime, end: DateTime): Age => {
      const duration =  end.diff(start, ["years", "months", 'days']);
      console.log(duration);
      const {years, months, days}  =  duration.toObject();

      return {
        years: Math.floor(years!),
        months: Math.floor(months!),
        days: Math.floor(days!)
      }
    };

    
    const handleSuimit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if(verifyInputs(birthday) && veriflyDate(birthday)){
        const ages = calculateAge(makeDate(birthday), DateTime.now());
        pushAge(ages);
      }
      


    }
    const receiveValue = (name: string, value: string) => {
      const updateBirthday = {...birthday};
      updateBirthday[name] = {
        ...updateBirthday[name],
        ["value"]: value
      }
      setBirthday(updateBirthday);
    }

    const inputs = Object.entries(birthday).map(( [key, value],index) => {
      return <Input inputdata={value} pushValue={receiveValue} key={key+index} />
    })
    return (
        <form onSubmit={handleSuimit} className="">
          <div className="flex my-7 gap-x-5">
            {inputs}
          </div>
          <div className="flex flex-col items-center justify-center sm:items-end relative">
            <button type="submit" className="bg-purple hover:bg-off-black rounded-full w-16 h-16 sm:w-20 sm:h-20 z-[1] transition-colors">
              <img src={buttonLogo} alt="button" className="mx-auto max-w-[40%]"/>
            </button>
            <hr className="text-light-grey w-full absolute"/>
          </div>
        </form>
    );
}

function Input({inputdata, pushValue}: {inputdata: Inputdata, pushValue: Function}){

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        pushValue(name, value)
    }
    const isError = (e=inputdata.error)=>{
      if(e == ErrorTypes.NONE) {return false;}
      return true;
    }

    return(
    <div className="font-[Poppins-Bold] uppercase max-w-[130px]">
      <label htmlFor={inputdata.name} className={`${isError()? "text-light-red": "text-smokey-grey"} tracking-widest`}>{inputdata.name}</label>
      <input  type="text" name={inputdata.name} value={inputdata.value} placeholder={inputdata.placeholder} id={inputdata.name} onChange={handleChange}  className={` uppercase placeholder-smokey-grey text-[28px]  sm:text-[32px] w-full border-[1px] rounded-lg focus:outline-none focus:border-purple ${isError()? 'border-light-red': 'border-light-grey'} text-off-black p-2`}/>
      <p className={`normal-case font-[Poppins-Italic] text-xs ${isError()? 'text-light-red': ''}`}>{inputdata.error}</p>
    </div>
    );
}

export default Inputs;
