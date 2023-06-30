import styled from "styled-components";
import Text from "../Text/Text";
import { ThemeType } from "@/Theme/Theme";

const Container = styled.button`
  border: none;
  background-color: ${(p) => (p.theme as ThemeType).colors.btnOrange};
  border-radius: 10px;
  padding: 1rem;
  color: #fff;
  position: relative;
  top: 10%;
  width: 45%;
  cursor: pointer;
  margin-top: 3rem;
`;

interface PropType {
  children: string;
  onClick?: () => void;
}

const Button = ({ children, onClick }: PropType) => {
  return (
    <Container type="submit" onClick={onClick ? onClick : null}>
      <Text color="#fff">{children}</Text>
    </Container>
  );
};

export default Button;
