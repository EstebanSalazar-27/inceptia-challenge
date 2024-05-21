import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Interface para los filtros
export interface Filters {
 bot: number;
 state: string;
 page: number;
 local_updated__date__gte: string;
 local_updated__date__lte: string;
}

// Valores iniciales para los filtros
const initialFilters: Filters = {
 bot: 0,
 page: 1,
 state: "",
 local_updated__date__gte: "",
 local_updated__date__lte: "",
};

const useFilters = () => {
 const [filters, setFilters] = useState<Filters>(initialFilters);
 const navigate = useNavigate();

 // Función para agregar un filtro a la URL asegurando que 'page' se ubique al final dado que la api rompe si no se pasa en ese orden
 const addFilterInUrl = (
  filterName: keyof Filters,
  filterValue: string | number
 ): void => {
  const searchParams = new URLSearchParams(location.search);

  // Verificar si se está agregando un filtro diferente a 'page'
  if (filterName !== "page") {
   // Si se agrega un nuevo filtro que no sea 'page', restablecer la página a 1
   searchParams.set("page", "1");
  } else {
   searchParams.delete("page");
  }

  // Establecer el nuevo filtro
  searchParams.set(filterName, String(filterValue));

  // Crear la nueva URL y navegar a ella
  const newUrl = `${location.pathname}?${searchParams.toString()}`;
  navigate(newUrl);
 };

 // Función para eliminar un filtro de la URL
 const deleteFilterInUrl = (filterName: keyof Filters): void => {
  const url: URL = new URL(window.location.href);
  url.searchParams.delete(filterName);
  navigate(url.toString(), { replace: true });
 };

 // Función para manejar cambios en los filtros
 const handleFilterChange = (
  e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
 ): void => {
  const { name: filterName, value: filterValue } = e.target;

  if (filterValue === "") {
   deleteFilterInUrl(filterName as keyof Filters);
  } else {
   addFilterInUrl(filterName as keyof Filters, filterValue);
  }
  setFilters({ ...filters, [filterName]: filterValue, page: 1 });
 };

 // Funciones para manejar la paginación
 const handleNextPage = () => {
  const newValue = filters.page + 1;
  addFilterInUrl("page", newValue);
  setFilters({ ...filters, page: newValue });
 };

 const handlePrevPage = () => {
  const newValue = filters.page > 1 ? filters.page - 1 : 1;
  addFilterInUrl("page", newValue);
  setFilters({ ...filters, page: newValue });
 };

 // Cargar los filtros desde la URL
 useEffect(() => {
  const searchParams: URLSearchParams = new URLSearchParams(location.search);
  const bot = parseInt(searchParams.get("bot") || "0", 10);
  const state = searchParams.get("state") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const local_updated__date__gte =
   searchParams.get("local_updated__date__gte") || "";
  const local_updated__date__lte =
   searchParams.get("local_updated__date__lte") || "";
  setFilters({
   bot,
   state,
   local_updated__date__gte,
   local_updated__date__lte,
   page,
  });
 }, []);

 // Función para limpiar los filtros
 const cleanFilters = () => {
  setFilters(initialFilters);
  window.history.pushState({}, document.title, window.location.pathname);
 };

 return {
  filters,
  handleFilterChange,
  cleanFilters,
  handleNextPage,
  handlePrevPage,
 };
};

export { useFilters };
