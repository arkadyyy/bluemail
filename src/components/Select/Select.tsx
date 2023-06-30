import Text from "../Text/Text";

const Select = ({
  value,
  onChange,
}: {
  value: string;
  onChange: () => void;
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "50%" }}>
      <Text>Account Type</Text>

      <select
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          border: "1px solid #d1d1d1",
          borderRadius: "5px",
          padding: "0.3rem",
          marginBottom: "0.4rem",
        }}
        value={value}
        name="pets"
        id="pet-select"
      >
        <option value="manual">Manual</option>
        <option value="advanced">Advanced</option>
      </select>
    </div>
  );
};

export default Select;
