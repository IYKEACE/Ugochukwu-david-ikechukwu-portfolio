const Input = ({ type, placeholder, className, onChange, label }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
      />
    </div>
  );
};
export default Input;
