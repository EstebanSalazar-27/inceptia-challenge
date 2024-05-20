import { InputValue } from "../../../models/global";

function DateInput({
 fieldName,
 onChange,
 value,
}: {
 fieldName: string;
 onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
 value: InputValue;
}) {
 return (
  <input
   title="Seleccionar fecha"
   className="px-2 py-1 w-full  text-sm  bg-light-A  dark:bg-stone-700 dark:text-slate-200  rounded-sm focus:outline-none transition "
   name={fieldName}
   id={fieldName}
   type="date"
   value={value}
   onChange={onChange}
  />
 );
}
export default DateInput;
