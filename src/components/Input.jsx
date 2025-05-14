
/**
 * Checks if a number is correctly formated.
 * If isFloat is true, then the function checks if the input is either a whole number or a decimal number.
 * If isFloat is false, then the function only checks if the number is a whole number.
 * 
 * @param {number} input integer or float. 
 * @param {boolean} isFloat true or false. 
 * @returns 
 */
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
