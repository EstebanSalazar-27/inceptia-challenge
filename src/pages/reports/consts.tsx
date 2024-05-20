import { TD } from "@/components/TableComponents/td";
import { Log } from "@/models/api";

const headers = [
 "Gestionado",
 "ID",
 "Telefono",
 "Dni",
 "Grupo",
 "Orden",
 "Llamada",
 "Estado",
];

const renderRow = (item: Log) => {
 const {
  last_updated,
  id,
  phone,
  extra_metadata: { dni, grupo, orden },
  case_duration,
  case_result,
 } = item;

 return (
  <tr key={id}>
   <TD>{last_updated}</TD>
   <TD>{id}</TD>
   <TD>{phone}</TD>
   <TD>{dni}</TD>
   <TD>{grupo}</TD>
   <TD>{orden}</TD>
   <TD>{case_duration}</TD>
   <TD>{case_result.name}</TD>
  </tr>
 );
};
export { headers, renderRow };
