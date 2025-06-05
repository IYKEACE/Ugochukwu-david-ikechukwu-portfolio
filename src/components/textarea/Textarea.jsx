const Textarea = ({ cols, rows, label, className, onChange, id }) => {
  return (
    <div>
      <label htmlFor={label} className={className}>
        {label}
      </label>
      <textarea onChange={onChange} cols={cols} rows={rows} id={id}></textarea>
    </div>
  );
};
export default Textarea;
