export default function Input({ labelName, id, value, onChangeInput }) {
    
  function handleChange(event) {
    const id = event.target.id;
    const value = parseInt(event.target.value);
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
        onChange={handleChange}
        value={value}
      />
    </p>
  );
}
