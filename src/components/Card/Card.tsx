import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 55vh;
  margin: 0.5rem;
  padding-top: 5rem;
  width: 70%;
`;

const Card = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <Container>{children}</Container>;
};

export default Card;
