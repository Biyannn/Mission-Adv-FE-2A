const Button = (props) => {
  const {
    children,
    variant,
    color,
    type = "button",
    onClick = () => {},
  } = props;
  return (
    <button
      className={`w-11/12 h-10 ${variant} ${color} rounded-lg font-sans font-bold text-base tracking-wider my-2 flex justify-center items-center mx-4`}
      type={type}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
