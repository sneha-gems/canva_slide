const TextInput = ({ ...props }) => {
  return (
    <div className="mt-20">
      <input className="form-control" {...props} />
    </div>
  );
};

export default TextInput;
