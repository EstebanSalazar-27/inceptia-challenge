interface PaginationProps {
 currentPage: number;
 totalPages: number;
 onNextPage: () => void;
 onPrevPage: () => void;
}
/**
 * 
 * @description Este componente se encarga de manejar las acciones de paginas otorgadas por un hight-order-component
 * @param currentPage Pagina actual
 * @param totalPages Total de paginas
 * @param onNextPage Accion para siguiente pagina
 * @param onPrevPage Accion para pagina anterior
 * @returns 
 */
const Pagination = ({
 currentPage,
 totalPages,
 onNextPage,
 onPrevPage,
}: PaginationProps) => {
 const handlePrevPage = () => {
  onPrevPage();
 };

 const handleNextPage = () => {
  onNextPage();
 };

 return (
  <div className="flex justify-end p-4">
   <button
    onClick={handlePrevPage}
    disabled={currentPage === 1}
    className="px-3 py-1 mr-2 bg-slate-200 dark:bg-stone-800  text-gray-600 rounded"
   >
    Prev
   </button>
   <span className="px-3 py-1  text-gray-400 ">
    Page {currentPage} of {totalPages}
   </span>
   <button
    onClick={handleNextPage}
    disabled={currentPage === totalPages}
    className="px-3 py-1 mr-2 bg-slate-200 dark:bg-stone-800  text-gray-600 rounded"
   >
    Next
   </button>
  </div>
 );
};
export default Pagination;
