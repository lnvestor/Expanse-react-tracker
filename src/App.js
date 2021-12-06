// import ExpanseItem from "./Components/ExpanseItem";
import { FcBinoculars } from "react-icons/fc";
import "./index.css";
import tw from "tailwind-styled-components";
import Card from "./Components/UI/Card";
import AddExpanse from "./Components/Expanse/AddExpanse";
import Carder from "./Components/UI/Cardinfo";
import Footer from "./Components/UI/Footer";
import Expanses from "./Components/Expanse/Expanses";
import { useState } from "react";
// import * as Scroll from "react-scroll";

let DUMMY_EXPANSES = [
  {
    id: "ef3",
    date: new Date(2021, 2, 30),
    title: "Expanse",
    amount: 100,
  },
];

function App() {

  const [expanses, setexpanse] = useState(DUMMY_EXPANSES);

  const copiedHandler = (expanse) => {

    setexpanse((prevExpense) => {
      return [expanse, ...prevExpense];

    });

  };
  console.log(expanses);

  return (
    <Wrapper>
      <Card>
        <Ttitle>
          <FcBinoculars className=" mx-6" />
          Expanse Tracker
        </Ttitle>
        <AddExpanse onAddcopiedexpanse={copiedHandler} />

        <Carder>
          <Expanses items={expanses} />
        </Carder>
      </Card>
      <Footer className="fixed" />
    </Wrapper>
  );
}

const Ttitle = tw.h1`
 text-3xl text-center  py-5 text-white bg-gray-700 flex justify-center 
`;
const Wrapper = tw.div`

`;

export default App;
