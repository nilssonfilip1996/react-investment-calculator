export default function Input({ labelName, id, value, onChangeInput, isFloat}) {
    
  function handleChange(event) {
    const id = event.target.id;
    const value = isFloat ? parseFloat(event.target.value) : parseInt(event.target.value);
    if (value >= 0) {
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
