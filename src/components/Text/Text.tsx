import styled from "styled-components";

const Label = styled.label<PropType>`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
  font-family: "Arimo", sans-serif;
  width: 30%;
  color: ${(p) => p.color};
`;

interface PropType {
  children: string;
  color?: string;
}

const Text = ({ children, color = "#000" }: PropType) => {
  return <Label color={color}>{children}</Label>;
};

export default Text;
