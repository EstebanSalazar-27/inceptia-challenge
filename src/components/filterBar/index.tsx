import { IWrapper } from "../../models";
import DateInput from "../form/inputs/dateInput";
import Label from "../form/Label";
import { Button } from "../layout";

const FilterCont = ({ children }: IWrapper) => {
 return (
  <div className="bg-white dark:bg-dark-B p-4 shadow rounded-sm">
   {children}
  </div>
 );
};

function FiltersBar() {
 return (
  <aside className="h-full w-max min-w-[200px] rounded-sm flex flex-col gap-4 border-t-2 ">
   <FilterCont>
    <Label fieldName="cliente">
     Cliente
     <select
      name="cliente"
      id="cliente"
      className=" w-full  text-sm bg-white dark:bg-dark-C dark:text-light-B border border-gray-300 hover:border-blue-600  p-2 rounded-sm shadow-sm font-semibold transition text-light-D focus:outline-none focus:shadow-outline"
     >
      <option value="Bgmotors">Bgmotors</option>
     </select>
    </Label>
   </FilterCont>

   <FilterCont>
    <Label fieldName="search">
     Buscar
     <input
      className="px-2 py-1 w-full border-b-2 border-blue-400 focus:outline-none transition "
      id="search"
      name="filter"
      type="search"
      placeholder="Buscar"
     />
    </Label>
   </FilterCont>

   <FilterCont>
    <Label fieldName="fromDate">Rango de fecha</Label>

    <div className="flex flex-col gap-2 ">
     <Label fieldName="fromDate">
      Desde
      <DateInput fieldName="createdOnFrom" />
     </Label>

     <Label fieldName="toDate">
      Hasta
      <DateInput fieldName="createdOnTo" />
     </Label>
    </div>
   </FilterCont>

   <Button>Limpiar filtros</Button>
  </aside>
 );
}
export default FiltersBar;
