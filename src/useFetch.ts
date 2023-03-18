import { useEffect, useState } from "react"

interface FetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

const useFetch =  <T extends unknown>(url: string): FetchResult<T>=>  {

  const [data,setData] = useState<T | null>(null);
  const [isLoading,setIsLoading] = useState<boolean>(true);
  const [error,setError] = useState<string|null>(null);
  useEffect(() => {

    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url,{signal : abortCont.signal})
      .then((res : Response) => {
        if(!res.ok){
          throw Error('could not fetch the data for that resource')
        }
        return res.json() as Promise<T>;
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err:Error) =>{
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        }else{
          setIsLoading(false);
          setError(err.message);
        }
      });
    },1000);

    return () => abortCont.abort();

  },[url]);
  return {data,isLoading,error}
}

export default useFetch; 