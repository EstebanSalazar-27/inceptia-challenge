function Input({
 inputName,
 placeholder,
 onChange,
}: {
 onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
 inputName: string;
 placeholder: string;
}) {
 return (
  <input
   name={inputName}
   placeholder={placeholder}
   onChange={onChange}
   className="focus:outline-none p-2 border-b-2 w-full border-b-blue-100 focus:border-b-blue-500 transition-colors text-slate-800 font-nunito"
   type="search"
  />
 );
}

export default Input;
