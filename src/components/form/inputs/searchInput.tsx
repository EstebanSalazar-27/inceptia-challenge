import { InputValue } from "../../../models/global";

function Input({
 inputName,
 placeholder,
 onChange,
 value,
}: {
 onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
 inputName: string;
 placeholder: string;
 value?: InputValue;
}) {
 return (
  <input
   name={inputName}
   placeholder={placeholder}
   onChange={onChange}
   className="focus:outline-none p-2 border-b-2 w-full border-b-blue-100 focus:border-b-blue-500 transition-colors text-slate-800  dark:text-slate-200 dark:bg-stone-700"
   type="search"
   value={value}
  />
 );
}

export default Input;
