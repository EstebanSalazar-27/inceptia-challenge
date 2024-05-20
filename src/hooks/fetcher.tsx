import { useState, useEffect } from "react";

/**
 * Generic Types for the useFetcher hook.
 * @template T - Type for the response of the request.
 * @template P - Type for the parameters of the request.
 */
interface UseFetcherProps<T, P> {
 /**
  * Function that makes the data request.
  * @param {P} [params] - Optional parameters for the request.
  * @returns {Promise<T | undefined>} - Promise resolved with the response of the request.
  */
 requestFn: (params?: P) => Promise<T | undefined>;

 /**
  * Dependencies that trigger the request when they change.
  */
 dependencies: any[];
}

/**
 * Custom hook for making data requests.
 * @template T - Type for the response of the request.
 * @template D - Type for the data returned by the hook.
 * @template P - Type for the parameters of the request.
 * 

 * @param {Function} options.requestFn - Function that makes the data request.
 * @param {any[]} options.dependencies - Dependencies that trigger the request when they change.
 * 
 * @returns {{ data: D, loading: boolean, error: any }} - Object with data, loading state, and error.
 */
export function useFetcher<T, D, P>({
 requestFn,
 dependencies,
}: UseFetcherProps<T, P>) {
 const [data, setData] = useState<D | undefined>(undefined);
 const [loading, setLoading] = useState<boolean>(true);
 const [error, setError] = useState<any>(undefined);

 /**
  * Function to make the data request.
  * @param {P} [searchParams] - Optional parameters for the request.
  */
 const fetchData = async (searchParams?: P) => {
  try {
   setLoading(true);
   const response: any = (await requestFn(searchParams)) as T;

   setData(response);
  } catch (err) {
   setError(err);
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
  // Get search parameters and pass them to the request
  const search = getSearchParamsString(window.location.href);
  fetchData(search as P);
 }, dependencies);

 return { data, loading, error };
}
