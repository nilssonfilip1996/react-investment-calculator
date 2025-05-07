import { useState } from "react";
import UserInput from "./components/UserInput";

let initUserInput = [
  {id:"initInv", labelName:"Initial Investment", value:0},
  {id:"annInv", labelName:"Annual Investment", value:0},
  {id:"expRet", labelName:"Expected Return", value:0},
  {id:"dur", labelName:"Duration", value:0}
];

function App() {
  const [userInput, setUserInput] = useState(initUserInput);
  
  function handleUserInputChange(id, newValue) {
    setUserInput((prevUserInput) => {
      let newUserInput = [...prevUserInput];
      newUserInput.map((entry) => {
        if(entry.id === id){entry.value = newValue;}
      })
      return newUserInput;
    });
  }

  return (
    <main>
      <UserInput userInputData={userInput} onChangeUserInputData={handleUserInputChange}></UserInput>
    </main>
  );
}

export default App;
