import React from "react";
import { useState } from "react";
import YearsFilter from "./Yearsfilter";
import tw from "tailwind-styled-components";
import ExpanseItem from "./ExpanseItem";
import "../../index.css";
const Expanses = ({ items }) => {
  const [filtreddate, setfiltreddate] = useState("2020");

  const copiedFilter = (filterd) => {
    setfiltreddate(filterd);
  };

  const datafiltred = items.filter((exp) => {
    return exp.date.getFullYear().toString() === filtreddate;
  });


  let resultcontent=  <p className="text-red-400 text-center text-2xl font-mono ">Not Found Try again</p>;

  // let resultcontentt= null;


  if(filtreddate==="all") {

    resultcontent = items.map((item) => {

     return   <ExpanseItem
          key={item.id}
          title={item.title}
          datex={item.date}
          amount={item.amount} />
    
       
  }
    )
} else if (datafiltred.length !==0) {
  resultcontent= datafiltred.map((item) => {
    return  <ExpanseItem
         key={item.id}
         title={item.title}
         datex={item.date}
         amount={item.amount}
       />

}
  )
}




  return (
    <div>
      <YearsFilter onCopied={copiedFilter} /> {}
      <Wrapper>
        {resultcontent}
        <ExpanseData>
        </ExpanseData>
      </Wrapper>
    </div>
  );
};
const Wrapper = tw.div`

 overflow-y-scroll h-md
`;
const ExpanseData = tw.div`
`;
export default Expanses;
