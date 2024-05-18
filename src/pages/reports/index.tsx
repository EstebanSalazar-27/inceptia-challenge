import { Login } from "../../api/login";
import { Table } from "../../components/TableComponents/table";
import { TableWrapper } from "../../components/TableComponents/tableWrapper";
import { TD } from "../../components/TableComponents/td";
import { TH } from "../../components/TableComponents/th";
import { Thead } from "../../components/TableComponents/thead";

function ReportsPage() {
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
 
 return (
  <>
   <TableWrapper>
    <Table>
     <Thead>
      <tr>{headers.length && headers.map((header) => <TH>{header}</TH>)}</tr>
     </Thead>
     <tbody>
      <tr>
       {cases.results.map((item) => {
        const {
         last_updated,
         id,
         phone,
         extra_metadata: { dni, grupo, orden },
         case_duration,
         case_result,
        } = item;

        return (
         <>
          <TD>{last_updated}</TD>
          <TD>{id}</TD>
          <TD>{phone}</TD>
          <TD>{dni}</TD>
          <TD>{grupo}</TD>
          <TD>{orden}</TD>
          <TD>{case_duration}</TD>
          <TD>{case_result.name}</TD>
         </>
        );
       })}
      </tr>
     </tbody>
    </Table>
   </TableWrapper>
  </>
 );
}

export default ReportsPage;
const cases = {
 count: 25,
 next:
  "<http://admindev.inceptia.ai/api/v1/inbound-case/?client=28&local_updated__date__gte=2021-03-01&local_updated__date__lte=2022-03-25&page=2>",
 previous: null,
 results: [
  {
   id: 23963,
   client: {
    id: 28,
    name: "gmotors",
   },
   case_uuid: "6",
   phone: 541140754716,
   first_name: "",
   last_name: "",
   code: null,
   case_result: {
    result_id: 3,
    name: "Cortó Cliente - Orden Identificada",
    is_final: true,
    contacted: true,
   },
   case_duration: "00:01:07",
   case_log: {
    responses: [
     {
      text:
       "Buenas tardes. Este es el asistente para envíos de cupones de Pago de Plan de Ahorro Chevrolet. Por favor marque o diga en forma clara los cuatro números de su Grupo uno por uno",
      time: 1635957629,
      confidence: 1,
     },
     {
      text:
       "No logré identificar su número de grupo. Por favor marque o dígalo nuevamente dígito por dígito",
      time: 1635957648,
      confidence: 1,
     },
     {
      text: "Gracias, ahora marque o diga los 3 números del Orden",
      time: 1635957662,
      confidence: 1,
     },
     {
      text:
       "Por último, también marque o diga los números de su documento uno por uno",
      time: 1635957673,
      confidence: 1,
     },
     {
      text: "Disculpe, aguarde un momento por favor",
      time: 1635957689,
      confidence: 1,
     },
     {
      text: "Disculpe, aguarde un momento por favor",
      time: 1635957695,
      confidence: 1,
     },
    ],
    result_id: 3,
    commitment: "",
    got_promise: false,
    transcription: [
     {
      text: "4",
      time: 1635957647,
      confidence: 0.98,
     },
     {
      text: "4875",
      time: 1635957661,
      confidence: 1.0,
     },
     {
      text: "726",
      time: 1635957672,
      confidence: 1.0,
     },
     {
      text: "33487562",
      time: 1635957688,
      confidence: 1.0,
     },
    ],
    final_sip_code: 200,
   },
   extra_metadata: {
    dni: "33487562",
    grupo: "4875",
    orden: "726",
   },
   recording:
    "<https://admindev.inceptia.ai/media/inbound_recordings/inbound_recording_23963-20211103_1641_8k_9qeN6IS.wav>",
   is_complete: true,
   status: "CLOSED",
   last_updated: "03/11/2021 13:41:40",
   is_active: true,
  },
 ],
};
