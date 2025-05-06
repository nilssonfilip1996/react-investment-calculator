import { useState } from "react";
import UserInput from "./components/UserInput";

let initUserInput = {
  initInv: 0,
  annInv: 0,
  expRet: 0,
  dur: 0,
};

function App() {
  const [userInput, setUserInput] = useState(initUserInput);

  return (
    <main>
      <UserInput></UserInput>
    </main>
  );
}

export default App;
