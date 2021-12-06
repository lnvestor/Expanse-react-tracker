import tw from "tailwind-styled-components";
import "../../index.css";

const Yearsfilter = ({onCopied,selected}) => {

let selectvalue = (event) => {
  onCopied(event.target.value);
}


  return ( 
    <Wrapper>
      <Lable>
        <Labeled>Filter By Year</Labeled>
      </Lable>
      <Selectors>
        <Select  onChange={selectvalue} value={selected}>
        <Option value="all">All</Option>
          <Option value="2020">2020</Option>
          <Option value="2021">2021</Option>
          <Option value="2022">2022</Option>
          <Option value="2019">2019</Option>
        </Select>
      </Selectors>
    </Wrapper>
  );
};

const Wrapper = tw.div`
flex bg-gray-700 p-4 rounded-2xl m-4 justify-between shadow-2xl m-10
`;
const Lable = tw.div`
bg-gray-600 p-8 rounded-full 
`;
const Selectors = tw.div`
bg-gray-600 p-4 rounded-full ml-2 lg:p-4
`;
const Labeled =tw.label` text-green-300 justify-center align-center `

const Option = tw.option`
rounded-xl
`
const Select = tw.select`
p-4 bg-gray-600 rounded-2xl text-green-400
`

export default Yearsfilter;
