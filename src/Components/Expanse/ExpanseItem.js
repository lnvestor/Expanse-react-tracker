import tw from "tailwind-styled-components";
import "../../index.css";
import ExpanseDates from "./ExpanseDates";

const ExpanseItem = ({datex, title,amount}) => {
  return (
    <div>
      <Wrapper>
        <DateAndTitle>
          <ExpanseTime>
            <ExpanseDates manageDate={datex} />
          </ExpanseTime>
          <Title>{title}</Title>
        </DateAndTitle>
        <Amount>{amount}$</Amount>
      </Wrapper>
    </div>
  );
};

const Wrapper = tw.div`
 text-2xl flex justify-center justify-between m-3 bg-gray-700 p-5 rounded-2xl items-center shadow-2xl  
`;
const DateAndTitle = tw.div`
flex items-center 
`;
const ExpanseTime = tw.h1`
px-5 bg-gray-800 py-5 rounded-3xl 
`;
const Title = tw.h1`

px-4 text-gray-300 text-lg text md:text-2xl lg:text-3xl

`;
const Amount = tw.h1`

bg-gray-600 h-auto p-5 rounded-full items-center text-blue-300
`;

export default ExpanseItem;
