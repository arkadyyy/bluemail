import styled from "styled-components";
import { ThemeType } from "@/Theme/Theme";
import Card from "../Card/Card";

const Container = styled.form`
  height: 100vh;
  width: 100%;
  background-color: ${(p) => (p.theme as ThemeType).colors.bgGray};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = ({
  children,
  onSubmit,
}: {
  children: JSX.Element | JSX.Element[];
  onSubmit: () => void;
}) => {
  return (
    <Container onSubmit={onSubmit}>
      <Card>{children}</Card>
    </Container>
  );
};

export default Wrapper;
