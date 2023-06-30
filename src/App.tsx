import { useEffect, useState } from "react";
import { Input, Select, Wrapper, Button, CheckBox } from "./components";

function App() {
  const [type, setType] = useState<string>("manual");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [serverAddress, setServerAddress] = useState("");
  const [serverPath, setServerPath] = useState("");
  const [port, setPort] = useState("");
  const [ssl, setSsl] = useState<boolean>(false);

  const INPUTS = [
    {
      type: "email",
      required: true,
      label: "User Name",
      placeholder: "name@example.com",
      value: username,
      handler: (e: React.ChangeEvent<HTMLInputElement>) =>
        usernameHandler(e.target.value),
    },
    {
      type: "password",
      required: true,
      label: "Password",
      placeholder: "Required",
      value: password,
      handler: (e: React.ChangeEvent<HTMLInputElement>) =>
        passwordHandler(e.target.value),
    },
    {
      type: "url",
      required: false,
      label: "Server address",
      placeholder: "example.com",
      value: serverAddress,
      handler: (e: React.ChangeEvent<HTMLInputElement>) =>
        serverAddressHandler(e.target.value),
    },
    {
      type: "text",
      required: false,
      label: "Server path",
      placeholder: "/calendars/user/",
      value: serverPath,
      handler: (e: React.ChangeEvent<HTMLInputElement>) =>
        serverPathHandler(e.target.value),
    },
    {
      type: "number",
      required: false,
      label: "Port",
      placeholder: null,
      value: port,
      handler: (e: React.ChangeEvent<HTMLInputElement>) =>
        portHandler(e.target.value),
    },
    // {
    //   type: "checkbox",
    //  required: false,
    //   label: "Use SSL",
    //   placeholder: null,
    //   value: ssl,
    //   handler: (e: React.ChangeEvent<HTMLInputElement>) =>
    //     sslHandler(e.target.value),
    // },
  ];

  const [inputs, setInputs] = useState(INPUTS);

  useEffect(() => {
    if (type === "manual") setInputs(INPUTS.slice(0, -3));
    if (type === "advanced") setInputs(INPUTS);
  }, [type]);

  const usernameHandler = (val: string) => {
    setUsername(val);
  };

  const passwordHandler = (val: string) => {
    setPassword(val);
  };
  const serverAddressHandler = (val: string) => {
    setServerAddress(val);
  };

  const serverPathHandler = (val: string) => {
    setServerPath(val);
  };

  const portHandler = (val: string) => {
    setPort(val);
  };

  const sslHandler = (val: boolean) => {
    setSsl(val);
  };

  const handleSubmit = () => {
    const x = JSON.stringify({
      username,
      password,
      serverAddress,
      serverPath,
      port,
      ssl,
    });
    alert(x);
  };

  const accountTypeHandler = (val: any) => {
    setType(val);
  };

  return (
    <>
      <Wrapper onSubmit={handleSubmit}>
        <Select onChange={accountTypeHandler} />

        <>
          {INPUTS.map((input, index) => (
            <Input
              key={input.placeholder}
              value={input.value}
              placeholder={input.placeholder}
              label={input.label}
              required={input.required}
              onChange={input.handler}
              inputType={input.type}
            />
          ))}
        </>

        {/* <CheckBox value={true} /> */}
        <div style={{ display: "flex", alignItems: "center", width: "10%" }}>
          <label>use SSL </label>
          <input
            onChange={() => sslHandler(!ssl)}
            checked={ssl}
            type={"checkbox"}
          />
        </div>

        <Button>Submit</Button>
      </Wrapper>
    </>
  );
}

export default App;
