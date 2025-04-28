const Input = ({name, type, placeholder, value, onChange, ...rest}) => {
    return(
        <input name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
        className="flex text-sm border-2 border-slate-500 rounded w-full py-2 px-2 text-slate-700 placeholder:opacity-75" />
    )
}

export default Input;