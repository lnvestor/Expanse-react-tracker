import tw from "tailwind-styled-components";

const Card = ({ children }) => {
  return <CardItem>{children}</CardItem>;
};

const CardItem = tw.div`
bg-gray-800  shadow-2xl font-mono  py-1 
`;

export default Card;
