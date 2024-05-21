import { useState, useEffect } from "react";

/**
 * Tipos genéricos para el hook useFetcher.
 * @template T - Tipo para la respuesta de la solicitud.
 * @template P - Tipo para los parámetros de la solicitud.
 */
interface UseFetcherProps<T, P> {
 /**
  * Función que realiza la solicitud de datos.
  * @param {P} [params] - Parámetros opcionales para la solicitud.
  * @returns {Promise<T | undefined>} - Promesa resuelta con la respuesta de la solicitud.
  */
 requestFn: (params?: P) => Promise<T | undefined>;

 /**
  * Dependencias que activan la solicitud cuando cambian.
  */
 dependencies: any[];
}

/**
 * Hook personalizado para realizar solicitudes de datos.
 * @template T - Tipo para la respuesta de la solicitud.
 * @template D - Tipo para los datos devueltos por el hook.
 * @template P - Tipo para los parámetros de la solicitud.
 * 

 * @param {Function} options.requestFn - Función que realiza la solicitud de datos.
 * @param {any[]} options.dependencies - Dependencias que activan la solicitud cuando cambian.
 * 
 * @returns {{ data: D, loading: boolean, error: any }} - Objeto con datos, estado de carga y error.
 */
export function useFetcher<T, D, P>({
 requestFn,
 dependencies,
}: UseFetcherProps<T, P>) {
 const [data, setData] = useState<D | undefined>(undefined);
 const [loading, setLoading] = useState<boolean>(true);
 const [error, setError] = useState<any>(undefined);

 /**
  * Función para realizar la solicitud de datos.
  * @param {P} [searchParams] - Parámetros opcionales para la solicitud.
  */
 const fetchData = async (searchParams?: P) => {
  try {
   setLoading(true);
   const response: any = (await requestFn(searchParams)) as T;

   setData(response);
  } catch (err) {
   setError(err);
   setData(undefined);
   console.error(err);
  } finally {
   setLoading(false);
  }
 };
 const getSearchParamsString = (url: string): string => {
  const urlObj = new URL(url);
  return urlObj.search;
 };
 useEffect(() => {
  // Obtener parámetros de búsqueda y pasarlos a la solicitud
  const search = getSearchParamsString(window.location.href);
  fetchData(search as P);
 }, dependencies);

 return { data, loading, error };
}
