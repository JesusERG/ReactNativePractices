import { useState, useEffect } from 'react';

interface Todo {
  id: number;
  title: string;
}

const useFetch = (url: string) => {
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;
