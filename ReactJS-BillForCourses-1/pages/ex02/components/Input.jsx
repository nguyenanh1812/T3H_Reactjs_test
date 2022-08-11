function Input({ type, isChecked }) {
  return isChecked ? <input type={type} checked /> : <input type={type} />;
}

export default Input;
