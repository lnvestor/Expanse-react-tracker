import { FcLike } from "react-icons/fc";
import tw from "tailwind-styled-components";
import "../../index.css";
const Footer = () => {
  return (
    <FooterBar>
      <Namefooter> Made by Oulili </Namefooter>{" "}
      <FcLike className="align-center text-2xl" />
    </FooterBar>
  );
};

let FooterBar = tw.div`
 bg-gray-900 flex justify-center py-5 italic text-white hover:text-green-300 


`;
let Namefooter = tw.div`

text-2xl px-3
`;

export default Footer;
