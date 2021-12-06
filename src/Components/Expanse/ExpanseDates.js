import tw from "tailwind-styled-components";
import "../../index.css";

const ExpanseDates = ({manageDate}) => {
  let day =manageDate.toLocaleString("en-US", { day: "2-digit" });
  let month = manageDate.toLocaleString("en-US", { month: "long" });
  let year = manageDate.getFullYear();




  return (
    <Wrapper>

     <ExpanseDays>{day}</ExpanseDays>
      <ExpanseMonth>{month}</ExpanseMonth>
      <ExpanseYear>{year}</ExpanseYear>

    </Wrapper>
  );
};

const Wrapper = tw.div``;
let ExpanseMonth = tw.h1`
text-white
`;
let ExpanseDays = tw.h1`
text-green-300 text-center text-3xl

`;
let ExpanseYear = tw.h1`
text-white text-center text-xl

`;

export default ExpanseDates;
