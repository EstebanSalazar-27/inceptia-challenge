import { getLogs, getBots } from "@/api";
import FiltersBar from "@/components/Filterbar";
import DataTable from "@/components/TableComponents/dataTable";
import { Bot, Log, RootLogsReq } from "@/models/api";
import { useFilters } from "@/hooks/filters";
import { useFetcher } from "@/hooks/fetcher";
import { headers, renderRow } from "@/pages/reports/consts";
import Spinner from "@/components/Spinner";

function ReportsPage() {
 const { handleFilterChange, filters, cleanFilters } = useFilters();
 const { data: bots } = useFetcher<Bot[], Bot[], string>({
  requestFn: getBots,
  dependencies: [filters],
 });
 const { data: logs, loading: isLoadingLogs } = useFetcher<
  RootLogsReq,
  RootLogsReq,
  string
 >({
  requestFn: getLogs,
  dependencies: [filters],
 });

 return (
  <div className="flex gap-8 w-full h-full">
   <FiltersBar
    filters={filters}
    cleanFilters={cleanFilters}
    handleFilters={handleFilterChange}
    bots={bots?.length ? bots : []}
   />

   <main className="w-4/5 h-full bg-white shadow-md border-b-2 border-b-blue-400">
    {isLoadingLogs ? (
     <Spinner />
    ) : logs?.results.length ? (
     <DataTable<Log>
      headers={headers}
      data={logs.results}
      renderRow={renderRow}
     />
    ) : (
     <div className="w-full h-full flex items-center justify-center">
      No se encontraron resultados
     </div>
    )}
   </main>
  </div>
 );
}

export default ReportsPage;
