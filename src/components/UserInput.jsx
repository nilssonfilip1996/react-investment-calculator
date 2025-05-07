import Input from "./Input";

export default function UserInput({ userInputData, onChangeUserInputData }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          labelName={userInputData[0].labelName}
          id={userInputData[0].id}
          value={userInputData[0].value}
          onChangeInput={onChangeUserInputData}
        />
        <Input
          labelName={userInputData[1].labelName}
          id={userInputData[1].id}
          value={userInputData[1].value}
          onChangeInput={onChangeUserInputData}
        />
      </div>
      <div className="input-group">
      <Input
          labelName={userInputData[2].labelName}
          id={userInputData[2].id}
          value={userInputData[2].value}
          onChangeInput={onChangeUserInputData}
        />
        <Input
          labelName={userInputData[3].labelName}
          id={userInputData[3].id}
          value={userInputData[3].value}
          onChangeInput={onChangeUserInputData}
        />
      </div>
    </div>
  );
}
