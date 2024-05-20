import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Interface para los filtros
export interface Filters {
 bot: number | string
 state: string;
 search: string;
 local_updated__date__gte: string;
 local_updated__date__lte: string;
}

// Valores iniciales para los filtros
const initialFilters: Filters = {
 bot: "",
 search: "",
 state: "",
 local_updated__date__gte: "",
 local_updated__date__lte: "",
};

const useFilters = () => {
 const [filters, setFilters] = useState<Filters>(initialFilters);
 const navigate = useNavigate();

 // Función para agregar un filtro a la URL
 const addFilterInUrl = (
  filterName: keyof Filters,
  filterValue: string
 ): void => {
  const searchParams = new URLSearchParams(location.search);
  searchParams.set(filterName, filterValue);
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
  console.log('jere', filterValue)
  setFilters({ ...filters, [filterName]: filterValue });
 };

 // Efecto para cargar los filtros desde la URL
 useEffect(() => {
  const searchParams: URLSearchParams = new URLSearchParams(location.search);
  const bot = parseInt(searchParams.get("bot") || "0", 10);
  const state = searchParams.get("state") || "";
  const search = searchParams.get("search") || "";
  const local_updated__date__gte = searchParams.get("local_updated__date__gte") || "";
  const local_updated__date__lte = searchParams.get("local_updated__date__lte") || "";
  setFilters({
   bot,
   state,
   local_updated__date__gte,
   local_updated__date__lte,
   search,
  });
 }, []);

 // Función para limpiar los filtros
 const cleanFilters = () => {
  setFilters(initialFilters);
  window.history.pushState({}, document.title, window.location.pathname);
 };

 return { filters, handleFilterChange, cleanFilters };
};

export { useFilters };
