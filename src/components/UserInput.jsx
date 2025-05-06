import { useState } from "react";

let initUserInput = {
  initInv: 0,
  annInv: 0,
  expRet: 0,
  dur: 0,
};

export default function UserInput() {
  const [userInput, setUserInput] = useState(initUserInput);

  function handleChange(id, value) {
    if (value >= 0) {
      setUserInput((prevUserInput) => {
        return {
          ...prevUserInput,
          [id]: value,
        };
      });
    }
  }

  console.log(userInput);

  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            required
            id="initInv"
            type="number"
            onChange={(e) =>
              handleChange(e.target.id, parseInt(e.target.value))
            }
            value={userInput["initInv"]}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            required
            id="annInv"
            type="number"
            onChange={(e) =>
              handleChange(e.target.id, parseInt(e.target.value))
            }
            value={userInput["annInv"]}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" />
        </p>
      </div>
    </div>
  );
}
