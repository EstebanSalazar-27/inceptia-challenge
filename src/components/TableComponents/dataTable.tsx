import { Table } from "../../components/TableComponents/table";
import { TableWrapper } from "../../components/TableComponents/tableWrapper";
import { TH } from "../../components/TableComponents/th";
import { Thead } from "../../components/TableComponents/thead";

interface DataTableProps<T> {
 headers: string[];
 data: T[];
 renderRow: (item: T) => JSX.Element;
}

const DataTable = <T,>({ headers, data, renderRow }: DataTableProps<T>) => {
 return (
  <TableWrapper>
   <Table>
    {/* Header */}
    <Thead>
     <tr>
      {headers.map((header) => (
       <TH key={header}>{header}</TH>
      ))}
     </tr>
    </Thead>

    {/* Body */}
    <tbody>{data.map((item) => renderRow(item))}</tbody>
   </Table>
  </TableWrapper>
 );
};

export default DataTable;
