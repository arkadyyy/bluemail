import { ChangeEventHandler } from "react";
import styled from "styled-components";
import { ThemeType } from "@/Theme/Theme";
import Text from "../Text/Text";

const Container = styled.input<PropType>`
  border: 1px solid ${(p) => (p.theme as ThemeType).colors.gray};
  border-radius: 5px;
  width: 100%;
  padding: 0.3rem;
  margin-top: ${(p) => p.marginTop};
`;

interface PropType {
  onChange: ChangeEventHandler;
  marginTop?: string;
  placeholder?: string | null;
  label: string;
  inputType: string;
  value: string | boolean;
  required: boolean;
}

const Input = ({
  onChange,
  marginTop = "0px",
  placeholder,
  label,
  inputType,
  value,
  required,
}: PropType) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "50%",
        margin: "0.3rem",
      }}
    >
      <Text>{label}</Text>
      <Container
        required={required}
        value={value}
        type={inputType}
        // type="password"
        placeholder={placeholder}
        marginTop={marginTop}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
