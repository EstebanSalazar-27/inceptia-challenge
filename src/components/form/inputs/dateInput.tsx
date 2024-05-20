import { InputValue } from "../../../models";

function DateInput({
 fieldName,
 onChange,
 value,
}: {
 fieldName: string;
 onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
 value: InputValue
}) {
 return (
  <input
   className="px-2 py-1 w-full  text-sm  bg-light-A  dark:bg-dark-C dark:text-light-B  rounded-sm focus:outline-none transition "
   name={fieldName}
   id={fieldName}
   type="date"
   value={value}
   onChange={onChange}
  />
 );
}
export default DateInput;
