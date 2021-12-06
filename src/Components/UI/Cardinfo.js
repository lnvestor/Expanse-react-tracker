import "../../index.css";
import tw from "tailwind-styled-components";

const Cardinfo = ({ children }) => {
  return <Cader>{children}</Cader>;
};

const Cader = tw.div`

 py-2 m-3  
`;

export default Cardinfo;
