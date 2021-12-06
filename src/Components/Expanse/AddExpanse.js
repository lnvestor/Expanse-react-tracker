// import { FcCdLogo } from "react-icons/fc";
import tw from "tailwind-styled-components";
import "../../index.css";
import AddExpanseForm from "./AddExpanseForm";
const AddExpanse = ({ onAddcopiedexpanse }) => {


  const copiedFunction = (saveddata) => {

    const expanseData = {
      ...saveddata,
    
    };

    onAddcopiedexpanse(expanseData);
  };

  return (
    <Header>
      <ExpanseInfo>
        <AddExpanseForm onCopiedData={copiedFunction} />
      </ExpanseInfo>
    </Header>
  );
};

let Header = tw.div`

m-9 flex bg-gray-700 p-8 rounded-xl justify-center  w-lg  shadow-2xl

`;

let ExpanseInfo = tw.div`
px-8 align-center justify-center text-center
`;

export default AddExpanse;
