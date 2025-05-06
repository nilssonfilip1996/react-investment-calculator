import { useState } from "react";
import Input from "./Input";

let initUserInput = {
  initInv: 0,
  annInv: 0,
  expRet: 0,
  dur: 0,
};


export default function UserInput({ userInputData, onChangeUserInputData }) {
  const [userInput, setUserInput] = useState(initUserInput);

  function updateDataField(id, value) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [id]: value,
      };
    });
  }

  console.log(userInput);

  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          labelName={"Initial Investment"}
          id={"initInv"}
          value={userInput["initInv"]}
          onChangeInput={updateDataField}
        />
        <Input
          labelName={"Annual Investment"}
          id={"annInv"}
          value={userInput["annInv"]}
          onChangeInput={updateDataField}
        />
      </div>
      <div className="input-group">
        <Input
          labelName={"Expected Return"}
          id={"expRet"}
          value={userInput["expRet"]}
          onChangeInput={updateDataField}
        />
        <Input
          labelName={"Duration"}
          id={"dur"}
          value={userInput["dur"]}
          onChangeInput={updateDataField}
        />
      </div>
    </div>
  );
}
