import Input from "./Input";
import Label from "./Label";

const Number = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="px-2 mb-4">
      <Label htmlFor={name}>{label}</Label>
      <div className="flex space-x-2">
        <select
          name={name}
          id={name}
          className="flex border-2 border-slate-500 rounded px-1"
        >
          <option value="+62">+62</option>
        </select>
        <Input
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Number;
