import { Filters } from "@/hooks/filters";
import { IWrapper } from "@/models";
import { Bot } from "@/models/api";
import DateInput from "@components/form/Inputs/dateInput";
import Input from "@components/form/Inputs/searchInput";
import Label from "@components/form/Label";
import { Button } from "@components/Layout";

const FilterCont = ({ children }: IWrapper) => {
 return (
  <div className="bg-white dark:bg-dark-B p-4 shadow rounded-sm">
   {children}
  </div>
 );
};

function FiltersBar({
 bots,
 handleFilters,
 cleanFilters,
 filters,
}: {
 bots: Bot[];
 handleFilters: (
  e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
 ) => void;
 filters: Filters;
 cleanFilters: () => void;
}) {
 return (
  <aside className="h-full w-max min-w-[200px] rounded-sm flex flex-col gap-4 border-t-2 ">
   <FilterCont>
    <Label fieldName="client">
     Bots
     <select
      title="Seleccionar bot"
      name="bot"
      id="bot"
      className=" w-full  text-sm bg-white dark:bg-dark-C dark:text-light-B border border-gray-300 hover:border-blue-600  p-2 rounded-sm shadow-sm font-semibold transition text-light-D focus:outline-none focus:shadow-outline"
      value={filters.bot}
      onChange={handleFilters}
     >
      <option value="0" disabled selected>
       Seleccionar bot
      </option>
      {bots.map((client) => (
       <option value={client.id} key={client.id}>
        {client.name}
       </option>
      ))}
     </select>
    </Label>
   </FilterCont>

   <FilterCont>
    <Label fieldName="search">
     Buscar
     <Input
      value={filters.search}
      onChange={handleFilters}
      inputName="search"
      placeholder="Buscar"
     />
    </Label>
   </FilterCont>

   <FilterCont>
    <Label fieldName="fromDate">Rango de fecha</Label>

    <div className="flex flex-col gap-2 ">
     <Label fieldName="fromDate">
      Desde
      <DateInput
       onChange={handleFilters}
       value={filters.local_updated__date__gte}
       fieldName="local_updated__date__gte"
      />
     </Label>

     <Label fieldName="toDate">
      Hasta
      <DateInput
       onChange={handleFilters}
       value={filters.local_updated__date__lte}
       fieldName="local_updated__date__lte"
      />
     </Label>
    </div>
   </FilterCont>

   <Button onClick={cleanFilters}>Limpiar filtros</Button>
  </aside>
 );
}
export default FiltersBar;
