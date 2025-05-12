
function validateInput(input, isFloat){
  const regex = /^\d+$/;
  const regexFloat = /^(\d+(\.\d+)?)$/;
  if(isFloat) {
    return regexFloat.test(input);
  } else {
    return regex.test(input);
  }
}

export default function Input({ labelName, id, value, onChangeInput, isFloat}) {
    
  function handleChange(event) {
    const isValid = validateInput(event.target.value, isFloat);
    console.log(labelName + ": " + isValid);
    if (isValid) {
      const id = event.target.id;
      const value = isFloat ? parseFloat(event.target.value) : parseInt(event.target.value);
      onChangeInput(id, value);
    }
  }

  return (
    <p>
      <label>{labelName}</label>
      <input
        required
        id={id}
        type="number"
        step={isFloat ? "0.1" : "1"}
        onChange={handleChange}
        value={value}
      />
    </p>
  );
}
