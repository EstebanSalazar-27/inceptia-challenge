function DateInput({ fieldName }: { fieldName: string }) {
 return (
  <input
   className="px-2 py-1 w-full  text-sm  bg-light-A  dark:bg-dark-C dark:text-light-B  rounded-sm focus:outline-none transition "
   name={fieldName}
   id={fieldName}
   type="date"
  />
 );
}
export default DateInput;
