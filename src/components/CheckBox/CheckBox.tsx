import Text from "../Text/Text";

const CheckBox = ({ ssl = false }: { ssl: boolean }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "10%" }}>
      <label>use SSL </label>
      <input checked={ssl} type={"checkbox"} />
    </div>
  );
};

export default CheckBox;
