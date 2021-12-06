import React, { useState } from "react";
import tw from "tailwind-styled-components";
import "../../index.css";
// import ButtonA from '@mui/material/Button';


const AddExpanseForm = ({ onCopiedData }) => {
  const [gettitleex, settitleexp] = useState("");
  const [getnumberex, setnumberexexp] = useState("");
  const [getdateex, setdateexp] = useState("");




  const titleChangeHnadler = (event) => {
    settitleexp(event.target.value);
  };

  const amountHandler = (event) => {
    setnumberexexp(event.target.value);
  };

  const dateHandler = (event) => {
    setdateexp(event.target.value);
  };



  const submiteHandler = (event) => {

    event.preventDefault();

    const expanseData = {
      
      id: Math.random().toString(),
      title: gettitleex,
      amount: getnumberex,
      date: new Date(getdateex)
    };

    onCopiedData(expanseData);

    settitleexp("");
    setnumberexexp("");
    setdateexp("");

  };
  return (

    <form onSubmit={submiteHandler}>
      <Name
        placeholder="Enter Title "
        type="text"
        value={gettitleex}
        onChange={titleChangeHnadler}
        required
      ></Name>



            <Title
        placeholder="Enter Expense $"
        type="number"
        value={getnumberex}
        onChange={amountHandler}
        required
      ></Title>
      <DateForm
        type="date"
        value={getdateex}
        onChange={dateHandler}
        min="2019-01-01"
        max="2022-12-31"
        required
      ></DateForm>
      <Button>
        <AddButton type="submit">Add</AddButton>
      </Button>
    </form>
  );
};
let Name = tw.input`s
 m-2 h-10 w-xl px-3 rounded-xl focus:outline-none required
`;
let Title = tw.input`
m-2 h-10 w-xl px-2 rounded-xl  focus:outline-none border-red-300
`;
let DateForm = tw.input`
py-2 px-4 rounded-xl m-2 focus:outline-none 
`;
let AddButton = tw.button`

px-3 bg-green-300 px-9 rounded-2xl text-white text-long hover:bg-gray-900 hover:text-green-300 border-none cursor-pointer py-4 focus:outline-none 
`;
let Button = tw.div`
flex sm:justify-center  lg:justify-end justify-center
`;

export default AddExpanseForm;
