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

  // Función para agregar un filtro a la URL asegurando que 'page' esté al final
  const addFilterInUrl = (
    filterName: keyof Filters,
    filterValue: string | number
  ): void => {
    const searchParams = new URLSearchParams(location.search);

    if (filterName === "page") {
      searchParams.delete("page");
    }

    searchParams.set(filterName, String(filterValue));

    if (filterName !== "page") {
      const pageValue = searchParams.get("page") || String(filters.page);
      searchParams.delete("page");
      searchParams.set("page", pageValue);
    }

    const newUrl = `${location.pathname}?${searchParams.toString()}`;
    navigate(newUrl);
  };

  // Función para eliminar un filtro de la URL
  const deleteFilterInUrl = (filterName: keyof Filters): void => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete(filterName);

    // Asegurar que 'page' esté al final
    const pageValue = searchParams.get("page");
    if (pageValue) {
      searchParams.delete("page");
      searchParams.append("page", pageValue);
    }

    const newUrl = `${location.pathname}?${searchParams.toString()}`;
    navigate(newUrl, { replace: true });
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

    if (filterName !== "page") {
      setFilters({ ...filters, [filterName]: filterValue, page: 1 });
      addFilterInUrl("page", 1);
    } else {
      setFilters({ ...filters, [filterName]: parseInt(filterValue) });
    }
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

  const handleJumpNext = () => {
    const newValue = filters.page + 3;
    addFilterInUrl("page", newValue);
    setFilters({ ...filters, page: newValue });
  };

  const handleJumpPrev = () => {
    const newValue = filters.page > 3 ? filters.page - 3 : 1;
    addFilterInUrl("page", newValue);
    setFilters({ ...filters, page: newValue });
  };

  // Efecto para cargar los filtros desde la URL
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
    handleJumpNext,
    handleJumpPrev,
  };
};

export { useFilters };
