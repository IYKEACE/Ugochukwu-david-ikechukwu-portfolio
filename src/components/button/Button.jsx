const Button = ({ type, onClick, onSubmit, className, icon, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      className={className}
      icon={icon}
      children={children}
    >
      {icon && <span className={className}>{icon}</span>}
      {children}
    </button>
  );
};
export default Button;
